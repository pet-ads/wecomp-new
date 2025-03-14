import {
  ProgrammingSectionProps,
  TypeEventName,
} from "../../../components/sections/Programming/types";

import programming from "../../../data/programming.json";
import {
  AvailabilityStatus,
  DifficultyEvent,
} from "../../../components/ui/tags/types";

export default function useProgrammingSectionData(): ProgrammingSectionProps {
  return {
    eventProgramming: programming.eventProgramming.map((prog) => ({
      ...prog,
      classification: prog.classification as DifficultyEvent,
      status: prog.status as AvailabilityStatus,
      typeEvent: prog.typeEvent as TypeEventName,
    })),
  };
}
