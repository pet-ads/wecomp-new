import { LocationSectionProps } from "../../types/Locations";

import location from "../../../public/data/location.json";

export default function useFetchLocationSection(): LocationSectionProps {
  return { eventLocations: location.eventLocations };
}
