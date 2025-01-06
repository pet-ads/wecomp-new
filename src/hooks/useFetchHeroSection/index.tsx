// External library
import { useEffect, useState } from "react";
import { API } from "../../api/config";

// Types
import { HeroSectionProps } from "../../types/HeroSection";

export default function useFetchHeroSection() {
  const [heroInformation, setHeroInformation] = useState<HeroSectionProps>();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await API.get("heroBanner.json");
        setHeroInformation(response.data.eventHero);
      } catch (error) {
        console.error("Ocorreu um erro ao obter da seção de hero:", error);
      }
    };
    fetchHero();
  }, []);

  return {heroInformation};
}
