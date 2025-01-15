// Types
import { HeroSectionProps } from "../../types/HeroSection";

// JSON
import heroBanner from "../../../public/data/heroBanner.json";

export default function useFetchHeroSection(): HeroSectionProps {
  return heroBanner.eventHero;
}
