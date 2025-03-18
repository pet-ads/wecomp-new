import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useMarathonSectionData from "../../../hooks/fetch/useMarathonSectionData";

import {
  MarathonSection,
  MarathonWrapper,
  MarathonText,
  MarathonSubtitle
} from "./styles";
import RedirectButton from "../../ui/RedirectButton";

export default function Marathon() {
  const { sections } = useSectionRefs();
  const marathonData = useMarathonSectionData();
  const marathon = marathonData[0];

  return (
    <MarathonSection>
      <SubTitle children="Maratona InterIF" />
      <MarathonWrapper ref={sections.Marathon}>
        <MarathonSubtitle>O que é InterIF ?</MarathonSubtitle>
        <MarathonText>{marathon.definition}</MarathonText>
        <RedirectButton children="veja mais" link={marathon.link} />
      </MarathonWrapper>
      <ArrowButton sectionRef={sections.Highlights} />
    </MarathonSection>
  );
}
