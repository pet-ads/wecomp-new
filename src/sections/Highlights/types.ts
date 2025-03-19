import { OfferModality } from "../../components/ui/tags/types";

export interface HighlightsProps {
  id: string | number;
  title: string;
  image: string;
  imageDescription: string;
  vacancies: number;
  description: string;
  type: OfferModality;
  link: string;
  linkCompany: string;
}

export interface CardHeaderProps {
  title: string;
  classification: OfferModality;
  image: string;
  imageDescription: string;
  linkCompany: string;
}

export interface CardMainProps {
  content: string;
}

export interface CardFooterProps {
  vacancies: number;
  link: string;
}

export interface HighlightsSectionProps {
  eventHighlights: HighlightsProps[];
}
