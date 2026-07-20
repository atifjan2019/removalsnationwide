"use client";

import { useEffect, useRef } from "react";
import { importLibrary } from "@googlemaps/js-api-loader";

type BookingDistanceCalculatorProps = {
  fromPlaceId: string;
  toPlaceId: string;
  onCalculated: (result: { distance: string; duration: string }) => void;
  onError: () => void;
};

export default function BookingDistanceCalculator({
  fromPlaceId,
  toPlaceId,
  onCalculated,
  onError,
}: BookingDistanceCalculatorProps) {
  const callbacksRef = useRef({ onCalculated, onError });

  useEffect(() => {
    callbacksRef.current = { onCalculated, onError };
  }, [onCalculated, onError]);

  useEffect(() => {
    let active = true;

    const calculate = async () => {
      try {
        const [{ Route }, { Place }, { UnitSystem }] = await Promise.all([
          importLibrary("routes"),
          importLibrary("places"),
          importLibrary("core"),
        ]);

        const { routes } = await Route.computeRoutes({
          origin: new Place({ id: fromPlaceId }),
          destination: new Place({ id: toPlaceId }),
          travelMode: "DRIVING",
          fields: ["distanceMeters", "durationMillis", "localizedValues"],
          language: "en-GB",
          region: "uk",
          units: UnitSystem.IMPERIAL,
        });

        const route = routes?.[0];
        if (!active || !route?.distanceMeters) {
          if (active) callbacksRef.current.onError();
          return;
        }

        const distance =
          route.localizedValues?.distance ??
          `${(route.distanceMeters / 1609.344).toFixed(1)} miles`;
        const duration =
          route.localizedValues?.duration ??
          (route.durationMillis
            ? `${Math.max(1, Math.round(route.durationMillis / 60000))} mins`
            : "");

        callbacksRef.current.onCalculated({ distance, duration });
      } catch {
        if (active) callbacksRef.current.onError();
      }
    };

    void calculate();

    return () => {
      active = false;
    };
  }, [fromPlaceId, toPlaceId]);

  return null;
}
