"use client";

import { useState, useEffect } from "react";

export default function useBreakpoint(minWidth: number) {
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setIsAbove(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [minWidth]);

  return isAbove;
}
