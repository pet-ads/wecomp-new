import { Event } from "../useInterIFMarathonSectionData/types";

import marathonData from "../../../data/interIfMarathon.json";

export default function useMarathonSectionData(): Event[] {
  return marathonData.interIfMarathon;
}
