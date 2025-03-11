import { HeroSectionProps } from "../../types/Hero";

import heroBanner from "../../data/heroBanner.json";

export default function useFetchHeroSection(): HeroSectionProps {
  return heroBanner.eventHero;
}
