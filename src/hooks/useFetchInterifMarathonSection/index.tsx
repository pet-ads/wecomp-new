// Types
import { InterIfMarathonProps } from "../../types/interifMarathon";

// JSON
import interIfMarathon from "../../../public/data/interIfMarathon.json";

export default function useFetchInterifMarathonSection(): InterIfMarathonProps {
    return interIfMarathon;
}
