import { OfferModality } from "./Tag";

export interface HighlightsProps {
  id: string | number;
  title: string;
  image: string;
  imageDescription: string;
  vacancies: number;
  description: string;
  type: OfferModality;
  link: string;
}

export interface HighlightsSectionProps {
    eventHighlights : HighlightsProps[]
}