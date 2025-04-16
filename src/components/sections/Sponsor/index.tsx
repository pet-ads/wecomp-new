import sponsorsContent from "../../../assets/content/sponsors";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";
import { Section } from "../../commons/structure/Section";
import Carousel from "../../commons/toolkit/Carousel";

import { SupporterSectionWrapper } from "./styles";

export default function SupportersCarousel() {
  return (
    <Section sectionId="Sponsors">
      <SupporterSectionWrapper>
        <SubTitle>Apoiadores</SubTitle>

        <Carousel items={sponsorsContent} visibleItems={5} />

        <ArrowButton sectionId="Organization" />
      </SupporterSectionWrapper>
    </Section>
  );
}
