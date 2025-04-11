import { useState } from "react";

import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import sponsorsContent from "../../../assets/content/sponsors";

import {
  SupporterLogo,
  SupporterSection,
  SupporterWrapper,
  SupporterLogoContainer,
  MarqueeContainer,
  MarqueeItem,
} from "./styles";

export default function Supporters() {
  const [isPaused, setIsPaused] = useState({
    firstRow: false,
    secundRow: false,
  });

  const { sections } = useSectionRefs();

  const reversedArrayOfSupporters = [...sponsorsContent].reverse();
  const supporterList = [
    ...sponsorsContent,
    ...sponsorsContent,
    ...sponsorsContent,
    ...sponsorsContent,
  ];
  const reversedSupporterList = [
    ...reversedArrayOfSupporters,
    ...reversedArrayOfSupporters,
    ...reversedArrayOfSupporters,
    ...reversedArrayOfSupporters,
  ];

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDoubleClick = (className: "firstRow" | "secundRow") => {
    setIsPaused((prev) => ({
      ...prev,
      [className]: !prev[className],
    }));
  };

  return (
    <SupporterSection>
      <SupporterWrapper ref={sections.supporters}>
        <SubTitle children="Apoiadores" />
        <SupporterLogoContainer>
          <MarqueeContainer>
            <MarqueeItem
              isPaused={isPaused.firstRow}
              onClick={() => handleDoubleClick("firstRow")}
              onTouchStart={() => handleDoubleClick("firstRow")}
              onTouchEnd={() => handleDoubleClick("firstRow")}
            >
              {supporterList.map((supporter, index) => (
                <SupporterLogo
                  key={`${supporter.id}-${index}`}
                  src={supporter.logoPath}
                  alt={supporter.logoAlternativeText}
                  width={supporter.width}
                  onClick={() => handleRedirectOnClick(supporter.link)}
                />
              ))}
            </MarqueeItem>
            <MarqueeItem
              isPaused={isPaused.secundRow}
              onClick={() => handleDoubleClick("secundRow")}
              onTouchStart={() => handleDoubleClick("secundRow")}
              onTouchEnd={() => handleDoubleClick("secundRow")}
            >
              {reversedSupporterList.map((supporter, index) => (
                <SupporterLogo
                  key={index}
                  src={supporter.logoPath}
                  alt={`Logo da empresa ${supporter.name}`}
                  width={supporter.width}
                  onClick={() => handleRedirectOnClick(supporter.link)}
                />
              ))}
            </MarqueeItem>
          </MarqueeContainer>
        </SupporterLogoContainer>
      </SupporterWrapper>
      <ArrowButton sectionRef={sections.directors} />
    </SupporterSection>
  );
}
