import { useEffect, useState } from "react";
import {
  CarouselContainer,
  LogoList,
  LogoItem,
  LogoFigure,
  LogoImage,
  LogoCaption,
  SupporterSectionWrapper,
} from "./styles";
import sponsorsContent from "../../../assets/content/sponsors";
import ArrowButton from "../../ui/ArrowButton";
import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";

export default function SupportersCarousel() {
  const [index, setIndex] = useState(0);
  const visibleItems = 5;
  const loopedItems = [...sponsorsContent, ...sponsorsContent, ...sponsorsContent];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loopedItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [loopedItems.length]);

  const getTranslate = () => {
    const offset = Math.floor(visibleItems / 2);
    const shift = (100 / loopedItems.length) * (index - offset);
    return `translateX(-${shift}%)`;
  };

  return (
    <Section sectionId="Sponsors">
      <SupporterSectionWrapper>
        <SubTitle>Apoiadores</SubTitle>

        <CarouselContainer>
          <LogoList
            style={{
              transform: getTranslate(),
              width: `${(100 * loopedItems.length) / visibleItems}%`,
            }}
          >
            {loopedItems.map((sponsor, i) => {
              const isCenter = i === index;
              return (
                <LogoItem key={i} style={{ width: `${100 / loopedItems.length}%` }}>
                  <LogoFigure
                    isCenter={isCenter}
                    onClick={() => window.open(sponsor.link, "_blank")}
                  >
                    <LogoImage src={sponsor.logoPath} alt={sponsor.name} />
                    <LogoCaption>{sponsor.name}</LogoCaption>
                  </LogoFigure>
                </LogoItem>
              );
            })}
          </LogoList>
        </CarouselContainer>

        <ArrowButton sectionId="Organization" />
      </SupporterSectionWrapper>
    </Section>
  );
}
