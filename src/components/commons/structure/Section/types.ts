import { PropsWithChildren } from "react";
import { Sections } from "../../toolkit/ArrowButton/types";

export interface SectionProps extends PropsWithChildren {
  title?: string;
  backgroundColor?: string;
  currentSectionId: Sections;
  nextSectionId?: Sections;
  isLastSection?: boolean;
}
