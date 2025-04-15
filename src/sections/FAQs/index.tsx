import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";

import { FAQContainer, FAQContent, FAQList } from "./styles";
import Details from "./subcomponent/Details";
import useFAQSectionData from "../../hooks/fetch/useFAQSectionData";

export default function FAQs() {
  return (
    <Section sectionId="FAQ">
      <FAQContent>
        <SubTitle children="Perguntas frequentes" />
        <FAQList>
          {faqContent.map((item, index) => (
            <Details
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </FAQList>
      </FAQContent>
    </Section>
  );
}
