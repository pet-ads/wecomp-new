import useWindowSize from "./useWindowSize";

export default function useIsMobileModalHeight(){
    const size = useWindowSize();
    const IsMobileModalHeight = size.height <= 610;
    return IsMobileModalHeight;
}
