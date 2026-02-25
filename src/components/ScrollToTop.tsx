import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to top when the route changes.
 * Fixes the issue where navigating to a new page keeps the previous scroll position.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
