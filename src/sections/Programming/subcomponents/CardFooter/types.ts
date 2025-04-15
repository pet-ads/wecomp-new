import { TypeEventName } from "../../types";

export interface CardFooterProps {
  vacancies: string | number;
  link: string;
  labelButton: string;
  handleChangeCardText: () => void;
  typeEvent: TypeEventName;
}
