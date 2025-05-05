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
import useIsMobile from "../../../hooks/window/Mobile";
import useOrientation from "../../../hooks/window/useOrientation";

export default function Marathon() {
  const isMobile = useIsMobile();
  const isLandscape = useOrientation();

  console.log("é landscape garai?", isLandscape);

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
            <p>
              {isMobile || (isMobile && isLandscape)
                ? marathonContent.definition.simplified
                : marathonContent.definition.full}
            </p>
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
