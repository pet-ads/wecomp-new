
import { DirectorsProps } from "../../types/Directors";

import directors from "./../../data/directors.json";

export default function useFetchDirectorsSection(): DirectorsProps[] {
    return directors.eventDirectors;
}