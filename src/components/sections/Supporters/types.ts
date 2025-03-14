export interface SupportersProps {
  id: string | number;
  nameSupporter: string;
  logoAlternativeText: string;
  logoPath: string;
  link: string;
  width: string;
}

export interface SupportersScetionProps {
  eventSupporters: SupportersProps[];
}
