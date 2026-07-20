"use client";

import { useEffect, useRef, useState } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

type SelectedAddress = {
  address: string;
  postcode: string;
  placeId: string;
};

type GoogleAddressFieldProps = {
  apiKey: string;
  fallbackPostcode: string;
  initialValue: string;
  label: string;
  placeholder: string;
  onAvailabilityChange: (available: boolean) => void;
  onFallbackChange: (postcode: string) => void;
  onInput: () => void;
  onSelect: (address: SelectedAddress) => void;
};

let configuredApiKey = "";

function loadPlaces(apiKey: string) {
  if (!configuredApiKey) {
    setOptions({
      key: apiKey,
      v: "weekly",
      language: "en",
      region: "GB",
      authReferrerPolicy: "origin",
    });
    configuredApiKey = apiKey;
  }

  return importLibrary("places");
}

export default function GoogleAddressField({
  apiKey,
  fallbackPostcode,
  initialValue,
  label,
  placeholder,
  onAvailabilityChange,
  onFallbackChange,
  onInput,
  onSelect,
}: GoogleAddressFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialValueRef = useRef(initialValue);
  const callbacksRef = useRef({ onAvailabilityChange, onInput, onSelect });
  const [mode, setMode] = useState<"loading" | "google" | "fallback">(
    apiKey ? "loading" : "fallback",
  );

  useEffect(() => {
    callbacksRef.current = { onAvailabilityChange, onInput, onSelect };
  }, [onAvailabilityChange, onInput, onSelect]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !apiKey) {
      callbacksRef.current.onAvailabilityChange(false);
      setMode("fallback");
      return;
    }

    let active = true;
    let autocomplete: google.maps.places.PlaceAutocompleteElement | null = null;

    const initialise = async () => {
      try {
        const { PlaceAutocompleteElement } = await loadPlaces(apiKey);
        if (!active) return;

        autocomplete = new PlaceAutocompleteElement({
          includedRegionCodes: ["gb"],
          placeholder,
          requestedLanguage: "en",
          requestedRegion: "uk",
        });
        autocomplete.className = "booking-place-autocomplete";
        autocomplete.description = `${label}. Search for a UK address or postcode and select a suggestion.`;
        autocomplete.value = initialValueRef.current;

        autocomplete.addEventListener("input", () => {
          callbacksRef.current.onInput();
        });

        autocomplete.addEventListener("gmp-select", async (event) => {
          try {
            const place = event.placePrediction.toPlace();
            await place.fetchFields({
              fields: ["id", "formattedAddress", "addressComponents"],
            });

            const postcode =
              place.addressComponents
                ?.find((component) => component.types.includes("postal_code"))
                ?.longText?.trim()
                .toUpperCase() ?? "";

            if (!place.id || !place.formattedAddress) {
              callbacksRef.current.onInput();
              return;
            }

            callbacksRef.current.onSelect({
              address: place.formattedAddress,
              postcode,
              placeId: place.id,
            });
          } catch {
            callbacksRef.current.onInput();
          }
        });

        autocomplete.addEventListener("gmp-error", () => {
          callbacksRef.current.onAvailabilityChange(false);
          setMode("fallback");
        });

        container.appendChild(autocomplete);
        callbacksRef.current.onAvailabilityChange(true);
        setMode("google");
      } catch {
        if (!active) return;
        callbacksRef.current.onAvailabilityChange(false);
        setMode("fallback");
      }
    };

    void initialise();

    return () => {
      active = false;
      if (autocomplete?.parentNode === container) {
        container.removeChild(autocomplete);
      }
    };
  }, [apiKey, label, placeholder]);

  if (mode === "fallback") {
    return (
      <div>
        <input
          autoFocus
          value={fallbackPostcode}
          onChange={(event) => onFallbackChange(event.target.value.toUpperCase())}
          placeholder="Enter a UK postcode"
          autoComplete="postal-code"
          aria-label={label}
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-lg uppercase text-black outline-none transition placeholder:text-black/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
        />
        <p className="mt-2 text-xs text-black/50">
          Address suggestions are unavailable. Enter a valid UK postcode to continue.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative min-h-[52px] w-full" aria-busy={mode === "loading"}>
        <div ref={containerRef} className="min-h-[52px] w-full" />
        {mode === "loading" && (
          <div className="absolute inset-0 h-[52px] animate-pulse rounded-xl border border-black/10 bg-black/5" />
        )}
      </div>
      <p className="mt-2 text-xs text-black/50">
        Start typing, then select the correct UK address from Google suggestions.
      </p>
    </div>
  );
}
