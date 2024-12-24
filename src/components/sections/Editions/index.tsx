// Components
import SubTitle from "../../ui/SubTitle";

// Styles
import { EditionsCardContainer, EditionsContainer, EditionsContent } from "./styles";

export default function Editions() {
  return (
    <EditionsContainer>
      <EditionsContent>
        <SubTitle children="Edições anteriores"/>
        <EditionsCardContainer>
          Carrossel of Editions cards
        </EditionsCardContainer>
      </EditionsContent>
    </EditionsContainer>
  );
}
