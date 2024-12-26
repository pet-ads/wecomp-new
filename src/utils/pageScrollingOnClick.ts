// Types
import { ArrowScrool } from "../types/ArrowButtonScroll";


export const handlePageScrollingOnClick = ({ sectionRef }: ArrowScrool) => {
     if (sectionRef && sectionRef.current) {
       sectionRef.current.scrollIntoView({
         behavior: "smooth",
         block: "center",
       });
     }
}