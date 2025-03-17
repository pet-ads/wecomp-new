import SubTitle from "../../ui/SubTitle";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import { FAQContainer, FAQContent, FAQList } from "./styles";
import Details from "./subcomponent/Details";
import useFAQSectionData from "../../../hooks/fetch/useFAQSectionData";

export default function FAQs() {
  const { sections } = useSectionRefs();
  const { frequentlyAsks } = useFAQSectionData();

  return (
    <FAQContainer>
      <FAQContent ref={sections.FAQs}>
        <SubTitle children="Perguntas frequentes" />
        <FAQList>
          {frequentlyAsks.map((item, index) => (
            <Details question={item.question} answer={item.answer} key={index}/>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
}
