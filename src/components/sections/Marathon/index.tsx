import { Section } from "../../commons/structure/Section";
import RedirectButton from "../../commons/toolkit/RedirectButton";
import marathonContent from "../../../assets/content/marathon";

import {
  Container,
  ColumnContent,
  MarathonImageWrapper,
  MarathonImage,
  ScrollContainer,
} from "./styles";
import { ZOOM_ANIMATION } from "../../../animations/scaling";

export default function Marathon() {
  return (
    <Section
      title="InterIF"
      currentSectionId="Marathon"
      nextSectionId="Highlights"
    >
      <Container>
        <ColumnContent>
          <h2>O que é InterIF ?</h2>

          <ScrollContainer>
            <p>{marathonContent.definition}</p>
          </ScrollContainer>

          <RedirectButton children="veja mais" link={marathonContent.link} />
        </ColumnContent>

        <MarathonImageWrapper>
          <MarathonImage
            {...ZOOM_ANIMATION}
            src={marathonContent.path}
            alt="Foto da fase final do InterIF 2024"
          />
        </MarathonImageWrapper>
      </Container>
    </Section>
  );
}
