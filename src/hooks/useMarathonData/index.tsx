import { Event } from "../../types/InterifMarathon";

import marathonData from "../../../public/data/interIfMarathon.json";

export default function useMarathonData(): Event[] {
  return marathonData.interIfMarathon;
}
