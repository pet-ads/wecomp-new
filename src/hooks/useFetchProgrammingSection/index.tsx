// Types
import {ProgrammingSectionProps} from "../../types/Programming";

// JSON
import programming from "../../../public/data/programming.json";

export default function useFetchProgrammingSection(): ProgrammingSectionProps {
    return programming;
}
