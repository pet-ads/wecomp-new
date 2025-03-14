import { DirectorsProps } from "./types";

import directors from "../../../data/directors.json";

export default function useDirectorsSectionData(): DirectorsProps[] {
  return directors.eventDirectors;
}
