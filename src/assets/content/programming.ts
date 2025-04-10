import minister from "../../../public/images/ministrante.svg";

import {
  AvailabilityStatus,
  DifficultyEvent,
} from "../../components/ui/tags/types";

export type TypeEventName = "Talk" | "Course" | "Opening" | "TechnicalVisit";

interface ProgrammingProps {
  name: string;
  image: string;
  imageDescription: string;
  bio: string;
  author: string;
  date: string;
  time: string;
  link: string;
  vacancies: number;
  location: string;
  status: AvailabilityStatus;
  classification: DifficultyEvent;
  description: string;
  typeEvent: TypeEventName;
}

export interface CardHeaderProps {
  eventLocationAndDate: string;
  author: string;
  status: AvailabilityStatus;
  classification: DifficultyEvent;
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
  typeEvent: TypeEventName;
}

export const programmingContent: ProgrammingProps[] = [
  {
    name: "Abertura",
    image: minister,
    imageDescription: "Abertura da Wecomp",
    bio: "",
    author: "Lorem ipsum",
    date: "00 de setembro",
    time: "00h - 00h",
    link: "https://forms.gle/example123",
    vacancies: 30,
    location: "Onovolab",
    description:
      "A abertura oficial da VI Wecomp acontecerá no ONOVOLAB e contará com a presença de empresas parceiras, uma mesa redonda e uma confraternização. Não perca!",
    typeEvent: "Opening",
    classification: "Basic",
    status: "Available",
  },
  {
    name: "Minicurso de Front-end",
    image: minister,
    imageDescription: "Minicurso de Back-end",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    author: "Lorem ipsum",
    date: "00 de setembro",
    time: "00h - 00h",
    link: "https://forms.gle/example123",
    vacancies: 30,
    location: "IFSP",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    typeEvent: "Course",
    classification: "Free",
    status: "LastVacancies",
  },
  {
    name: "Talk sobre a Importância do Back-end",
    image: minister,
    imageDescription: "Minicurso de Back-end",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    author: "Lorem ipsum",
    date: "00 de setembro",
    time: "00h - 00h",
    link: "https://forms.gle/example123",
    vacancies: 30,
    location: "IFSP",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    typeEvent: "Talk",
    classification: "Intermediary",
    status: "Closed",
  },
  {
    name: "Visita Técnica",
    image: minister,
    imageDescription: "Ambiente da Visita Técnica",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    author: "Lorem ipsum",
    date: "00 de setembro",
    time: "00h - 00h",
    link: "https://forms.gle/example123",
    vacancies: 30,
    location: "Onovolab",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente sint quasi laboriosam excepturi delectus unde eum magni, dolores placeat harum blanditiis est veritatis itaque id ut eligendi ullam dignissimos!",
    typeEvent: "TechnicalVisit",
    classification: "Free",
    status: "Available",
  },
];

export default programmingContent;
