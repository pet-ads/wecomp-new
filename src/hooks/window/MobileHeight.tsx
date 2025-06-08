import useWindowSize from "./useWindowSize";

export default function useIsMobileHeight(){
    const size = useWindowSize();
    const isMobileHeight = size.height <= 600;
    
    return isMobileHeight;
}
