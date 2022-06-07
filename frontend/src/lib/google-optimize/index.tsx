import { useEffect, useState } from "react";
import { useOptimize } from "./context";

declare global {
  interface Window {
    dataLayer?: { push: (options: { event: string }) => void };
    google_optimize?: { get: (id: string) => string };
  }
}

export const useOptimizeExperiment = <T,>(
  experimentId: string
): T | undefined => {
  const [variant, setVariant] = useState<T>();
  const optimizeApi = useOptimize();

  useEffect(() => {
    const variant = optimizeApi?.get(experimentId);
    setVariant(variant as T | undefined);
  }, [optimizeApi, experimentId]);

  return variant;
};

export * from "./context";
