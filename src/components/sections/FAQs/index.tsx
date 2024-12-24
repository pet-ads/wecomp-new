// Components
import SubTitle from "../../ui/SubTitle";

// Styles
import { FAQContainer, FAQContent, FAQList} from "./styles";
import FAQ from "./subcomponent";

export default function FAQs() {
  return (
    <FAQContainer>
      <FAQContent>
        <SubTitle children="Perguntas frequentes" />
        <FAQList>
          <FAQ question="pgt 1" response="res 1" />
          <FAQ question="pgt 2" response="res 2" />
          <FAQ question="pgt 3" response="res 3" />
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
}
