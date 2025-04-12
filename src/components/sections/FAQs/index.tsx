import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import Details from "./subcomponent/Details";

import faqContent from "../../../assets/content/faq";

import { FAQContent, FAQList } from "./styles";

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
