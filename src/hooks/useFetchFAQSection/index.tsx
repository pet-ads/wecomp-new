import { FAQSectionProps } from "../../components/sections/FAQs/types";
import FAQ from "../../data/faqs.json";

export default function useFetchFAQSection(): FAQSectionProps {
  return {frequentlyAsks: FAQ.frequentlyAsks};
}
