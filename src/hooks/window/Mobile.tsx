// Hooks
import useWindowSize from "./useWindowSize";

// Constants
const MAX_WIDTH = 768;

export default function useIsMobile() {
  const size = useWindowSize();
  const isMobile = size.width <= MAX_WIDTH;
  return isMobile;
}
