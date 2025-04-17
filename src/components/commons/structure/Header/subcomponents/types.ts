import { Sections } from "../../../toolkit/ArrowButton/types";

export interface LinkAnchor {
  text: string;
  sectionId: Sections;
}

export interface NavListProps {
  links: LinkAnchor[];
  isOpen?: boolean;
}
