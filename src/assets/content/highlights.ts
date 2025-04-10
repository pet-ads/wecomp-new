import genericEmpress from "../../../public/images/empresaGenerica.svg";

import { OfferModality } from "../../components/ui/tags/types";

interface HighlightsProps {
  title: string;
  image: string;
  vacancies: number;
  description: string;
  type: OfferModality;
  link: string;
  linkCompany: string;
}

export interface CardHeaderProps {
  classification: OfferModality;
  image: string;
  imageDescription: string;
  linkCompany: string;
}

export interface CardMainProps {
  content: string;
}

export interface CardFooterProps {
  vacancies: number;
  link: string;
}

export const highlightsContent: HighlightsProps[] = [
  {
    title: "Trainee em Desenvolvimento Web com React e TypeScript",
    image: genericEmpress,
    linkCompany: "#",
    vacancies: 10,
    description:
      "Oportunidade para aprender e desenvolver aplicações modernas com React, TypeScript e Styled-components, acompanhado por especialistas da área.",
    type: "Trainee",
    link: "https://example.com/",
  },
  {
    title: "Estágio em Machine Learning e Inteligência Artificial",
    image: genericEmpress,
    linkCompany: "#",
    vacancies: 5,
    description:
      "Participe de projetos inovadores em Data Science, aplicando Machine Learning e redes neurais para resolver desafios do mundo real.",
    type: "Internship",
    link: "https://example.com/",
  },
  {
    title: "Engenheiro de Software Júnior",
    image: genericEmpress,
    linkCompany: "#",
    vacancies: 3,
    description:
      "Desenvolva soluções Full Stack utilizando Node.js, Express e MongoDB, adquirindo experiência prática em projetos reais.",
    type: "Hiring",
    link: "https://example.com/",
  },
  {
    title: "Estágio em Quality Assurance (QA) com JUnit",
    image: genericEmpress,
    linkCompany: "#",
    vacancies: 5,
    description:
      "Aprenda a desenvolver testes automatizados com JUnit, garantindo a qualidade e confiabilidade de aplicações de software.",
    type: "Internship",
    link: "https://example.com/",
  },
];

export default highlightsContent;
