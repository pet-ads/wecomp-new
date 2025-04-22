import wecomp from "../images/wecompLogo.svg";

interface HeroProps {
  logoPath: string;
  logoAlternativeText: string;
  eventEdition: string;
  eventDate: string;
}

export const heroContent: HeroProps = {
  eventEdition: "VI Semana da Computação",
  eventDate: "03 a 09 de outubro",
  logoPath: wecomp,
  logoAlternativeText: "Logo do evento da Semana da Computação WECOMP",
};

export default heroContent;
