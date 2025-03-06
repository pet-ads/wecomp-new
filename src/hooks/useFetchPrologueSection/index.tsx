import { PrologueSectionProps } from "../../types/PrologueSection";

import prologue from "../../../public/data/prologue.json";

export default function useFetchPrologueSection(): PrologueSectionProps {
  return prologue.eventDetails;
}
