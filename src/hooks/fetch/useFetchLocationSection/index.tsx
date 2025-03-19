import { LocationSectionProps } from "../../../sections/Locations/types";

import location from "../../../data/location.json";

export default function useFetchLocationSection(): LocationSectionProps {
  return { eventLocations: location.eventLocations };
}
