import { EditionSectionProps } from "../../../components/sections/Editions/types";

import Editions from "../../../data/editions.json";

export default function useEditionsSectionData(): EditionSectionProps {
  return { previousEditions: Editions.previousEditions };
}
