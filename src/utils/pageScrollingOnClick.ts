import { ArrowScrool } from "../components/ui/ArrowButton/types";

export const handlePageScrollingOnClick = ({ sectionRef }: ArrowScrool) => {
  if (sectionRef && sectionRef.current) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
