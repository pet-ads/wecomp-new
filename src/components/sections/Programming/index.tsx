import { Section } from "../../commons/structure/Section";

import { Container } from "./styles";
import SoonCard from "../../commons/toolkit/SoonCard";

export default function Programming() {
  const isMobile = useIsMobile();
  const isMobileHeight= useIsMobileHeight();
  const shouldUseMobileLayout = isMobile || isMobileHeight;

  return (
    <Section
      title="Programação"
      currentSectionId="Programming"
      nextSectionId="Marathon"
    >
      <Container>
        <SoonCard />
      </Container>
    </Section>
  );
}

