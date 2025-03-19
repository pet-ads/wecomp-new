import { PrologueSectionProps } from "../../../components/sections/Prologue/types";

import prologue from "../../../data/prologue.json";

export default function usePrologueSectionData(): PrologueSectionProps {
  return prologue.eventDetails;
}
