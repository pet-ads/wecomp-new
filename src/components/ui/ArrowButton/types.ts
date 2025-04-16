export type Sections =
  | "Hero"
  | "About"
  | "Sponsors"
  | "Organization"
  | "Programming"
  | "Marathon"
  | "Highlights"
  | "Locations"
  | "Contact"
  | "Editions"
  | "FAQ";

export interface ArrowScrool {
  sectionId: Sections;
}
