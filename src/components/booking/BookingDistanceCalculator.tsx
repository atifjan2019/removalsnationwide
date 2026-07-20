"use client";

import { useEffect, useRef } from "react";
import { calculateDrivingRoute } from "@/lib/google-route";

type BookingDistanceCalculatorProps = {
  fromPlaceId: string;
  toPlaceId: string;
  fromAddress: string;
  toAddress: string;
  onCalculated: (result: { distance: string; duration: string }) => void;
  onError: () => void;
};

export default function BookingDistanceCalculator({
  fromPlaceId,
  toPlaceId,
  fromAddress,
  toAddress,
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
        const result = await calculateDrivingRoute({
          origin: fromAddress,
          destination: toAddress,
          originPlaceId: fromPlaceId,
          destinationPlaceId: toPlaceId,
        });
        if (active) callbacksRef.current.onCalculated(result);
      } catch {
        if (active) callbacksRef.current.onError();
      }
    };

    void calculate();

    return () => {
      active = false;
    };
  }, [fromAddress, fromPlaceId, toAddress, toPlaceId]);

  return null;
}
