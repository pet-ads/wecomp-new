import SubTitle from "../../ui/SubTitle";
import Slider from "../../Slider";
import UpcommingCard from "../../ui/SoonCard";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Modal";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useCheckDate from "../../../hooks/references/useCheckDate";
import useIsMobile from "../../Window/Mobile";

import programmingContent from "../../../assets/content/programming";

import {
  ProgrammingCardContainer,
  ProgrammingContainer,
  ProgrammingContent,
} from "./styles";

export default function Programming() {
  const { sections } = useSectionRefs();

  const checkDate = useCheckDate();
  const isMobile = useIsMobile();

  return (
    <ProgrammingContainer>
      <ProgrammingContent ref={sections.programming}>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>
          {checkDate ? (
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
          ) : (
            <UpcommingCard />
          )}
        </ProgrammingCardContainer>
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
