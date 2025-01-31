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

export default function Supporters() {
  const { sections } = useSectionRefs();
  const { eventSupporters } = useFetchSupporters();

  const reversedArrayOfSupporters = [...eventSupporters].reverse();
  const supporterList = [...eventSupporters, ...eventSupporters];
  const reversedSupporterList = [
    ...reversedArrayOfSupporters,
    ...reversedArrayOfSupporters,
  ];

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  }

  return (
    <SupportesContainer>
      <SupportesContent ref={sections.supporters}>
        <SubTitle children="Patrocinadores" />
        <SupportesLogoContainer>
          <MarqueeContainer>
            <MarqueeItem>
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
            <MarqueeItem>
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
