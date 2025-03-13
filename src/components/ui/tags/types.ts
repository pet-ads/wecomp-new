export type AvailabilityStatus = "Available" | "LastVacancies" | "Closed";

export type DifficultyEvent = "Free" | "Basic" | "Intermediary";

export type OfferModality = "Trainee" | "Internship" | "Hiring";

export interface AvailabilityProps {
  label: AvailabilityStatus;
}

export interface DifficultyEventProps {
  label: DifficultyEvent;
}

export interface OfferModalityProps {
  label: OfferModality;
}
