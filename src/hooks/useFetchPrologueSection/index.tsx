// Types
import { PrologueSectionProps } from "../../types/PrologueSection";

// JSON
import prologue from "../../../public/data/prologue.json";

export default function useFetchPrologueSection() {
  const prologueInformation: PrologueSectionProps = prologue.eventDetails;
  return { prologueInformation };
}
