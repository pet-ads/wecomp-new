import { Sections } from "../ui/ArrowButton/types";

export interface LinkAnchor {
  text: string;
  sectionId: Sections;
}

export interface NavListProps {
  links: LinkAnchor[];
  isOpen?: boolean;
}
