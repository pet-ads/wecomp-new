import useWindowSize from "./useWindowSize";

export default function useIsMobile(){
    const size = useWindowSize();
    const isMobile = size.width <= 768;
    return isMobile;
}