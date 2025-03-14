export interface LinkAnchor {
  text: string;
  ref: React.RefObject<HTMLDivElement>;
}

export interface NavListProps {
  links: LinkAnchor[];
  isOpen?: boolean
}