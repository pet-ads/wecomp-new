import { HeroSectionProps } from "../../../components/sections/HeroBanner/types";

import heroBanner from "../../../data/heroBanner.json";

export default function useHeroSectionData(): HeroSectionProps {
  return heroBanner.eventHero;
}
