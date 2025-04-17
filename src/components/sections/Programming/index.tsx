import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";
import Slider from "../../commons/toolkit/Slider";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Modal";

import useIsMobile from "../../../hooks/window/Mobile";

import programmingContent from "../../../assets/content/programming";

import { ProgrammingCardContainer, ProgrammingContent } from "./styles";

export default function Programming() {
  const isMobile = useIsMobile();

  return (
    <Section sectionId="Programming">
      <ProgrammingContent>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>
          <Slider
            items={programmingContent}
            renderItem={(event) =>
              isMobile ? (
                <CardProjeto key={event.name} {...event} />
              ) : (
                <Card key={event.name} {...event} />
              )
            }
          />
        </ProgrammingCardContainer>
        <ArrowButton sectionId="Marathon" />
      </ProgrammingContent>
    </Section>
  );
}
