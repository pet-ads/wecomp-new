import sponsorsContent from "../../../assets/content/sponsors";
import { Section } from "../../commons/structure/Section";
import Carousel from "../../commons/toolkit/Carousel";

import { Container } from "./styles";

export default function SupportersCarousel() {
  return (
    <Section
      title="Apoiadores"
      currentSectionId="Sponsors"
      nextSectionId="Organization"
    >
      <Container>
        <Carousel items={sponsorsContent} visibleItems={5} />
      </Container>
    </Section>
  );
}
