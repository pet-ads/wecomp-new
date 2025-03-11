
import { DirectorsProps } from "../../types/Directors";

import directors from "../../../public/data/directors.json";

export default function useFetchDirectorsSection(): DirectorsProps[] {
    return directors.eventDirectors;
}