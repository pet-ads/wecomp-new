import { HighlightsSectionProps } from "../../types/Highlights";

import highlights from "../../../public/data/highlights.json";
import { OfferModality } from "../../types/Tag";

export default function useFetchHighlightsSection(): HighlightsSectionProps {
  return {
    eventHighlights: highlights.eventHighlights.map((h) => ({
      ...h,
      type: h.type as OfferModality,
    })),
  };
}
