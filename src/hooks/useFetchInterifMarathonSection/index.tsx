import { InterIfMarathonProps } from "../../types/InterifMarathon";

import interIfMarathon from "../../../public/data/interIfMarathon.json";

export default function useFetchInterifMarathonSection(): InterIfMarathonProps {
  return interIfMarathon;
}
