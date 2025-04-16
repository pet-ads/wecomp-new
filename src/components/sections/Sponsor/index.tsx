import { SupporterSectionWrapper } from "./styles";
import sponsorsContent from "../../../assets/content/sponsors";
import ArrowButton from "../../ui/ArrowButton";
import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import Carousel from "../../Carousel";

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