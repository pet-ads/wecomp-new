import { OfferModality } from "../../components/ui/tags/types";

export interface HighlightsProps {
  title: string;
  image: string;
  companyName: string;
  vacancies: number;
  description: string;
  type: OfferModality;
  link: string;
  linkCompany: string;
}
