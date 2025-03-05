export type TypeEventName = "Talk" | "Course" | "Opening" | "TechnicalVisit";

export interface ProgrammingProps {
  id: string | number;
  name: string;
  image: string;
  imageDescription: string;
  bio: string;
  author: string;
  date: string;
  time: string;
  link: string;
  vacancies: string | number;
  location: string;
  status: string;
  classification: string;
  description: string;
  typeEvent: TypeEventName;
}

export interface CardHeaderProps {
  title: string;
  eventLocationAndDate: string;
  author: string;
  status: string;
  classification: string;
  image: string;
  imageDescription: string;
}

export interface CardMainProps {
  content: string;
}

export interface CardFooterProps {
  vacancies: string | number;
  link: string;
  labelButton: string;
  handleChangeCardText: () => void;
}

export interface ProgrammingSectionProps {
  eventProgramming: ProgrammingProps[];
}
