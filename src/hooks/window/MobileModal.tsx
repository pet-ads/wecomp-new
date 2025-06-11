import useWindowSize from "./useWindowSize";

export default function useIsMobileModal(){
    const size = useWindowSize();
    const IsMobileModal = size.width <= 510;
    return IsMobileModal;
}
