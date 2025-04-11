import { AvailabilityStatus, DifficultyEvent } from "../../../../ui/tags/types";

export interface CardHeaderProps {
  eventLocationAndDate: string;
  author: string;
  status: AvailabilityStatus;
  classification: DifficultyEvent;
  image: string;
  imageDescription: string;
}
