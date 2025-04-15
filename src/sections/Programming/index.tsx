import SubTitle from "../../components/ui/SubTitle";
import Card from "./subcomponents/Card";
import Slider from "../../components/Slider";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useProgrammingSectionData from "../../hooks/fetch/useProgrammingSectionData";

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
<<<<<<< HEAD:src/components/sections/Programming/index.tsx
        <ArrowButton sectionId="Marathon" />
=======
>>>>>>> development:src/sections/Programming/index.tsx
      </ProgrammingContent>
    </Section>
  );
}