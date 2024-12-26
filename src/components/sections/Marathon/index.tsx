// Components
import SubTitle from "../../ui/SubTitle";

// Styles
import { MarathonCardContainer, MarathonContainer, MarathonContent } from "./styles";

export default function Marathon() {
  return (
    <MarathonContainer>
      <MarathonContent>
        <SubTitle children="Maratona InterIF"/>
        <MarathonCardContainer>
          Carrossel of Marathon cards
        </MarathonCardContainer>
      </MarathonContent>
    </MarathonContainer>
  );
}
