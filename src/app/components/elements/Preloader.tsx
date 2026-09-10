"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps): JSX.Element | null {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if all critical resources are loaded
    const checkResourcesLoaded = (): boolean => {
      if (typeof window === "undefined") return false;

      // Check if document is ready
      if (document.readyState !== "complete") return false;

      // Check if all images are loaded
      const images = document.querySelectorAll("img");
      for (let i = 0; i < images.length; i++) {
        const img = images[i] as HTMLImageElement;
        if (!img.complete) return false;
      }

      return true;
    };

    // If resources are already loaded, hide immediately
    if (checkResourcesLoaded()) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    // Listen for load event
    const handleLoad = () => {
      if (checkResourcesLoaded()) {
        setIsLoading(false);
        onComplete?.();
      }
    };

    // Listen for DOMContentLoaded and window load
    window.addEventListener("load", handleLoad);
    document.addEventListener("DOMContentLoaded", handleLoad);

    // Fallback: Hide after maximum wait time (prevents infinite loading)
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
}

