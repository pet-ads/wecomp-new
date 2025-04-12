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
} from "./styles";

export default function Marathon() {
  return (
    <Section sectionId="Marathon">
      <SubTitle children="Maratona InterIF" />
      <MarathonWrapper>
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
      <ArrowButton sectionId="Highlights" />
    </Section>
  );
}
