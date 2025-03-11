import { Event } from "../../types/interifMarathon";

import marathonData from "../../data/interIfMarathon.json";

export default function useMarathonData(): Event[] {
  return marathonData.interIfMarathon;
}
