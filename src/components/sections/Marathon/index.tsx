import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import marathonContent from "../../../assets/content/marathon";

import {
  MarathonSection,
  MarathonWrapper,
  MarathonText,
  MarathonSubtitle,
  MarathonImageWrapper,
} from "./styles";
import RedirectButton from "../../ui/RedirectButton";

export default function Marathon() {
  const { sections } = useSectionRefs();

  return (
    <MarathonSection>
      <SubTitle children="Maratona InterIF" />
      <MarathonWrapper ref={sections.Marathon}>
        <MarathonText>
          <MarathonSubtitle>O que é InterIF ?</MarathonSubtitle>
          <MarathonText>{marathonContent.definition}</MarathonText>
          <RedirectButton children="veja mais" link={marathonContent.link} />
        </MarathonText>
        <MarathonImageWrapper>
          <img
            src={marathonContent.path}
            alt="Foto da fase final do InterIF 2024"
          />
        </MarathonImageWrapper>
      </MarathonWrapper>
      <ArrowButton sectionRef={sections.Highlights} />
    </MarathonSection>
  );
}
