import {
  AvailabilityStatus,
  DifficultyEvent,
} from "../../commons/toolkit/tags/types";

export type TypeEventName = "Talk" | "Course" | "Opening" | "TechnicalVisit";

export interface ProgrammingProps {
  name: string;
  image: string;
  imageDescription: string;
  bio: string;
  author: string;
  date: string;
  time: string;
  link: string;
  vacancies: number;
  location: string;
  status: AvailabilityStatus;
  classification: DifficultyEvent;
  description: string;
  typeEvent: TypeEventName;
}
