import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const OptimizeContext = createContext<Window["google_optimize"]>(undefined);

export const OptimizeProvider = (props: PropsWithChildren) => {
  const [optimizeApi, setOptimizeApi] = useState<Window["google_optimize"]>();

  useEffect(() => {
    window.dataLayer?.push({ event: "optimize.activate" });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.google_optimize != null) {
        setOptimizeApi(window.google_optimize);
        clearInterval(intervalId);
      }
    }, 100);
  }, []);

  return <OptimizeContext.Provider value={optimizeApi} {...props} />;
};

export const useOptimize = () => useContext(OptimizeContext);
