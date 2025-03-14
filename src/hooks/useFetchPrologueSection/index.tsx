import { PrologueSectionProps } from "../../components/sections/Prologue/types";

import prologue from "../../data/prologue.json";

export default function useFetchPrologueSection(): PrologueSectionProps {
  return prologue.eventDetails;
}
