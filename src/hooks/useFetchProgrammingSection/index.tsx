import { ProgrammingSectionProps, TypeEventName } from "../../types/Programming";

import programming from "../../data/programming.json";
import { AvailabilityStatus, DifficultyEvent } from "../../types/Tag";

export default function useFetchProgrammingSection(): ProgrammingSectionProps {
  return {
    eventProgramming: programming.eventProgramming.map((prog) => ({
      ...prog,
      classification: prog.classification as DifficultyEvent,
      status: prog.status as AvailabilityStatus,
      typeEvent: prog.typeEvent as TypeEventName,
    })),
  };
}