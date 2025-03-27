import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Card from "./subcomponents/Card";
import Slider from "../../Slider";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useProgrammingSectionData from "../../../hooks/fetch/useProgrammingSectionData";

import {
  ProgrammingCardContainer,
  ProgrammingContainer,
  ProgrammingContent,
} from "./styles";
import useCheckDate from "../../../hooks/references/useCheckDate";
import UpcommingCard from "../../ui/SoonCard";

export default function Programming() {
  const { sections } = useSectionRefs();

  const { eventProgramming } = useProgrammingSectionData();
  const checkDate = useCheckDate();

  return (
    <ProgrammingContainer>
      <ProgrammingContent ref={sections.programming}>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>
          <Slider
            items={eventProgramming}
            renderItem={(event) =>
              checkDate ? <Card key={event.id} {...event} /> : <UpcommingCard />
            }
          />
        </ProgrammingCardContainer>
        <ArrowButton sectionRef={sections.Marathon} />
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
