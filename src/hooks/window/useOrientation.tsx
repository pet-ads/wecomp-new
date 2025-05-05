import { useEffect, useState } from "react";

const checkIsLandscape = () => {
  return window.matchMedia("(orientation: landscape)").matches;
};

export default function useOrientation(): boolean {
  const [isLandscape, setIsLandscape] = useState(checkIsLandscape);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(checkIsLandscape());
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return isLandscape;
}
