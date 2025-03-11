import { PrologueSectionProps } from "../../types/Prologue";

import prologue from "../../../public/data/prologue.json";

export default function useFetchPrologueSection(): PrologueSectionProps {
  return prologue.eventDetails;
}
