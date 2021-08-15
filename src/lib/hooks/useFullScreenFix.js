import { useEffect } from "react";

export function useFullScreenFix() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);
      };
      window.addEventListener("resize", appHeight);
      appHeight();
      return () => window.removeEventListener("resize", appHeight);
    }
  }, []);
}
