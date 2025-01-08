// Types
import { HeroSectionProps } from "../../types/HeroSection";

// JSON
import heroBanner from "../../../public/data/heroBanner.json";

export default function useFetchHeroSection() {
  const heroInformation: HeroSectionProps = heroBanner.eventHero;
  return { heroInformation };
}
