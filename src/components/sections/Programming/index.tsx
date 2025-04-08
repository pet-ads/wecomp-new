import SubTitle from "../../ui/SubTitle";
import Card from "./subcomponents/Card";
import Slider from "../../Slider";
import CardProjeto from "./subcomponents/Modal"

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useProgrammingSectionData from "../../../hooks/fetch/useProgrammingSectionData";
import useIsMobile from "../../Window/Mobile";

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
  const isMobile = useIsMobile();

  return (
    <ProgrammingContainer>
      <ProgrammingContent ref={sections.programming}>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>
          {checkDate ? (
            
            <Slider
            items={eventProgramming}
            renderItem={(event) =>
              isMobile ? (
                <CardProjeto key={event.id} {...event} />
              ) : (
                <Card key={event.id} {...event} />
              )
            }
            />
            
          ) : (
            <UpcommingCard />
          )}
        </ProgrammingCardContainer>
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
