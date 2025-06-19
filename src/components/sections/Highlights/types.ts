export type TypeVName = "Internship" | "Trainee" | "Hiring";

export interface HighlightsProps {
  title: string;
  image: string;
  companyName: string;
  linkCompany: string;
  link: string;
  vacancies: number;
  description: string;
  typeEvent: TypeVName;
}
