import useWindowSize from "./useWindowSize";

export default function useIsMobileHeight(){
    const size = useWindowSize();
    const isMobileHeight = size.height <= 630;
    return isMobileHeight;
}
