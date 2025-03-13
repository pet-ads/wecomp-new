import { Event } from "../useFetchInterifMarathonSection/types";

import marathonData from "../../data/interIfMarathon.json";

export default function useMarathonData(): Event[] {
  return marathonData.interIfMarathon;
}
