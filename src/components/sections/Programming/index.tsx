import { Section } from "../../Section";
import ArrowButton from "../../ui/ArrowButton";
import SubTitle from "../../ui/SubTitle";
import Slider from "../../Slider";
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