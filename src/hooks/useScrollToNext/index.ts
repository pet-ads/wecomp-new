import { useRef } from "react";

export const useScrollToNext = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const allSections = Array.from(document.querySelectorAll("section"));
      const currentIndex = allSections.indexOf(sectionRef.current);

      if (currentIndex !== -1 && currentIndex < allSections.length - 1) {
        allSections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return { sectionRef, scrollToNextSection };
};
