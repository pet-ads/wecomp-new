// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import {
  MarathonCardContainer,
  MarathonContainer,
  MarathonContent,
} from "./styles";

export default function Marathon() {
  const { sections } = useSectionRefs();

  return (
    <MarathonContainer>
      <MarathonContent ref={sections.Marathon}>
        <SubTitle children="Maratona InterIF" />
        <MarathonCardContainer>
          Carrossel of Marathon cards
        </MarathonCardContainer>
      <ArrowButton sectionRef={sections.Highlights} />
      </MarathonContent>
    </MarathonContainer>
  );
}
