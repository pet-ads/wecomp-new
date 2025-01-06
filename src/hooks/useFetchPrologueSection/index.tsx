// External library
import { useEffect, useState } from "react";
import { API } from "../../api/config";

// Types
import { PrologueSectionProps } from "../../types/PrologueSection";

export default function useFetchPrologueSection() {
  const [prologueInformation, setPrologueInformation] =
    useState<PrologueSectionProps>();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await API.get("prologue.json");
        setPrologueInformation(response.data.eventDetails);
      } catch (error) {
        console.error("Ocorreu um erro ao obter os dados da seção de prológo:", error);
      }
    };
    fetchHero();
  }, []);

  return { prologueInformation };
}
