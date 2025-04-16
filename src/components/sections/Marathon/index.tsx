import { Section } from "../../Section";
import RedirectButton from "../../ui/RedirectButton";
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import marathonContent from "../../../assets/content/marathon";

import {
  MarathonWrapper,
  MarathonText,
  MarathonSubtitle,
  MarathonImageWrapper,
  MarathonImage,
  MarathonTextContent,
} from "./styles";
import { ZOOM_ANIMATION } from "../../../animations/scaling";

export default function Marathon() {
  return (
    <Section sectionId="Marathon">
      <SubTitle children="Maratona InterIF" />
      <MarathonWrapper>
        <MarathonText>
          <MarathonSubtitle>O que é InterIF ?</MarathonSubtitle>
          <MarathonTextContent>
            {marathonContent.definition}
          </MarathonTextContent>
          <RedirectButton children="veja mais" link={marathonContent.link} />
        </MarathonText>
        <MarathonImageWrapper>
          <MarathonImage
            {...ZOOM_ANIMATION}
            src={marathonContent.path}
            alt="Foto da fase final do InterIF 2024"
          />
        </MarathonImageWrapper>
      </MarathonWrapper>
      <ArrowButton sectionId="Highlights" />
    </Section>
  );
}
