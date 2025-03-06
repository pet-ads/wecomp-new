import { useRef } from "react";

import { ChildrenContext } from "../../types/SectionRefsContextType";

import { SectionRefsContext } from "./context";

export default function SectionReferences({ children }: ChildrenContext) {
  const HeroBannerSection = useRef<HTMLDivElement>(null);
  const prologueSection = useRef<HTMLDivElement>(null);
  const supportersSection = useRef<HTMLDivElement>(null);
  const programmingSection = useRef<HTMLDivElement>(null);
  const HighlightsSection = useRef<HTMLDivElement>(null);
  const MarathonSection = useRef<HTMLDivElement>(null);
  const LocationsSection = useRef<HTMLDivElement>(null);
  const EditionsSection = useRef<HTMLDivElement>(null);
  const ContactSection = useRef<HTMLDivElement>(null);
  const FAQsSection = useRef<HTMLDivElement>(null);
  const DropDownMenuComponent = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{
        sections: {
          HeroBanner: HeroBannerSection,
          prologue: prologueSection,
          supporters: supportersSection,
          programming: programmingSection,
          Highlights: HighlightsSection,
          Marathon: MarathonSection,
          Locations: LocationsSection,
          Editions: EditionsSection,
          Contact: ContactSection,
          FAQs: FAQsSection,
          DropDownMenu: DropDownMenuComponent,
        },
      }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
}
