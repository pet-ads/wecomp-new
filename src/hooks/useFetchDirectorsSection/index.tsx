
import { DirectorsProps } from "./types";

import directors from "./../../data/directors.json";

export default function useFetchDirectorsSection(): DirectorsProps[] {
    return directors.eventDirectors;
}