import { Section } from "../../commons/structure/Section";

import Slider from "../../commons/toolkit/Slider";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Modal";

import useIsMobile from "../../../hooks/window/Mobile";
import useIsMobileHeight from "../../../hooks/window/MobileHeight";

import programmingContent from "../../../assets/content/programming";

import { Container } from "./styles";
//import SoonCard from "../../commons/toolkit/SoonCard";

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
        <Slider
          items={programmingContent}
          renderItem={(event) =>
            shouldUseMobileLayout ? (
              <CardProjeto key={event.name} {...event} />
            ) : (
              <Card key={event.name} {...event} />
            )
          }
        />
        
      </Container>
    </Section>
  );
}