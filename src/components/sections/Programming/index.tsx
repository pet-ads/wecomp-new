// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Card from "./CardProgramming";
import Slider from "../../Slider";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchProgrammingSection from "../../../hooks/useFetchProgrammingSection";

// Styles
import {
  ProgrammingCardContainer,
  ProgrammingContainer,
  ProgrammingContent,
} from "./styles";

export default function Programming() {
  const { sections } = useSectionRefs();

  const { eventProgramming } = useFetchProgrammingSection();

  return (
    <ProgrammingContainer>
      <ProgrammingContent ref={sections.programming}>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>
          <Slider
            items={eventProgramming}
            renderItem={(event) => <Card key={event.id} {...event} />}
          />
        </ProgrammingCardContainer>
        <ArrowButton sectionRef={sections.Marathon} />
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
