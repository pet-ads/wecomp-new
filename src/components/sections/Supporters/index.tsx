import SubTitle from "../../ui/SubTitle";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useFetchSupporters from "../../../hooks/fetch/useSupportersSectionData";

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
  const supporterList = [
    ...eventSupporters,
    ...eventSupporters,
    ...eventSupporters,
    ...eventSupporters,
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

  return (
    <SupportesContainer>
      <SupportesContent ref={sections.supporters}>
        <SubTitle children="Patrocinadores" />
        <SupportesLogoContainer>
          <MarqueeContainer>
            <MarqueeItem>
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
            <MarqueeItem>
              {reversedSupporterList.map((supporter, index) => (
                <SupporterLogo
                  key={`${supporter.id}+${index}`}
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
    </SupportesContainer>
  );
}
