import SubTitle from "../../ui/SubTitle";
import Card from "./subcomponents/Card";
import Slider from "../../Slider";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useProgrammingSectionData from "../../../hooks/fetch/useProgrammingSectionData";

import {
  ProgrammingCardContainer,
  ProgrammingContainer,
  ProgrammingContent,
} from "./styles";

export default function Programming() {
  const { sections } = useSectionRefs();

  const { eventProgramming } = useProgrammingSectionData();

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
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
