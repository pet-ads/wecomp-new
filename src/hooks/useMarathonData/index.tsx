// Types
import { Event } from "../../types/interifMarathon";

// JSON
import marathonData from "../../../public/data/interIfMarathon.json";

export default function useMarathonData(): Event[] {
  return marathonData.interIfMarathon;
}
