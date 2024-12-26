// Components
import SubTitle from "../../ui/SubTitle";
import FAQ from "./subcomponent";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import { FAQContainer, FAQContent, FAQList } from "./styles";

export default function FAQs() {
  const { sections } = useSectionRefs();

  return (
    <FAQContainer>
      <FAQContent ref={sections.FAQs}>
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
