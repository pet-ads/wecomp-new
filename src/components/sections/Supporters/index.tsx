// External library
import { useState } from "react";
import { useMotionValue } from "framer-motion";

// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchSupporters from "../../../hooks/useFetchSupportersSection";

// Styles
import {
  SupporterLogo,
  SupportesContainer,
  SupportesContent,
  SupportesLogoContainer,
  MarqueeContainer,
  MarqueeItem,
} from "./styles";

// Animation
import { MARQUEE } from "../../../animations/marquee";


export default function Supporters() {
  const [isHoveredFirstRow, setIsHoveredFirstRow] = useState<boolean>(false);
  const [isHoveredSecondRow, setIsHoveredSecondRow] = useState<boolean>(false);

  const { sections } = useSectionRefs();
  const { eventSupporters } = useFetchSupporters();

  const xFirstRow = useMotionValue(0);
  const xSecondRow = useMotionValue(0);

  const reversedArrayOfSupporters = [...eventSupporters].reverse();
  const supporterList = [...eventSupporters, ...eventSupporters];
  const reversedSupporterList = [
    ...reversedArrayOfSupporters,
    ...reversedArrayOfSupporters,
  ];

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <SupportesContainer>
      <SupportesContent ref={sections.supporters}>
        <SubTitle children="Patrocinadores" />
        <SupportesLogoContainer>
          <MarqueeContainer>
            <MarqueeItem
              {...MARQUEE(isHoveredFirstRow, xFirstRow.get())}
              onMouseEnter={() => setIsHoveredFirstRow(true)}
              onMouseLeave={() => setIsHoveredFirstRow(false)}
              style={{ x: xFirstRow }}
            >
              {supporterList.map((supporter) => (
                <SupporterLogo
                  key={supporter.id}
                  src={supporter.logoPath}
                  alt={supporter.logoAlternativeText}
                  width={supporter.width}
                  onClick={() => handleRedirectOnClick(supporter.link)}
                />
              ))}
            </MarqueeItem>
            <MarqueeItem
              {...MARQUEE(isHoveredSecondRow, xSecondRow.get())}
              onMouseEnter={() => setIsHoveredSecondRow(true)}
              onMouseLeave={() => setIsHoveredSecondRow(false)}
              style={{ x: xSecondRow }}
            >
              {reversedSupporterList.map((supporter) => (
                <SupporterLogo
                  key={supporter.id}
                  src={supporter.logoPath}
                  alt={supporter.logoAlternativeText}
                  width={supporter.width}
                  onClick={() => handleRedirectOnClick(supporter.link)}
                />
              ))}
            </MarqueeItem>
          </MarqueeContainer>
        </SupportesLogoContainer>
      </SupportesContent>
      <ArrowButton sectionRef={sections.programming} />
    </SupportesContainer>
  );
}
