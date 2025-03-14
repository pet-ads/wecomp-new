import { HighlightsSectionProps } from "../../../components/sections/Highlights/types";

import highlights from "../../../data/highlights.json";
import { OfferModality } from "../../../components/ui/tags/types";

export default function useHighlightsSectionData(): HighlightsSectionProps {
  return {
    eventHighlights: highlights.eventHighlights.map((h) => ({
      ...h,
      type: h.type as OfferModality,
    })),
  };
}
