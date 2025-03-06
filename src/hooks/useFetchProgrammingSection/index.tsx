import { ProgrammingSectionProps } from "../../types/Programming";

import programming from "../../../public/data/programming.json";

export default function useFetchProgrammingSection(): ProgrammingSectionProps {
  return programming;
}
