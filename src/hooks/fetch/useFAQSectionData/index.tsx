import { FAQSectionProps } from "../../../components/sections/FAQs/types";
import FAQ from "../../../data/faqs.json";

export default function useFAQSectionData(): FAQSectionProps {
  return { frequentlyAsks: FAQ.frequentlyAsks };
}
