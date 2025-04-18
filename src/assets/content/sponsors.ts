import genericEmpress from "../images/empresaGenerica.svg";
import cacautec from "../images/cacautec.png";
import csdbr from "../images/csdbr.png";

interface SponsorProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
}

export const sponsorsContent: SponsorProps[] = [
  {
    name: "Cacautec",
    logoPath: cacautec,
    link: "#",
    width: "",
  },
  {
    name: "Softable",
    logoPath: genericEmpress,
    link: "#",
    width: "",
  },
  {
    name: "CSD BR",
    logoPath: csdbr,
    link: "#",
    width: "",
  },
  {
    name: "SMARTFIT",
    logoPath: genericEmpress,
    link: "#",
    width: "",
  },
  {
    name: "Generica",
    logoPath: genericEmpress,
    link: "#",
    width: "",
  },
  {
    name: "Generica",
    logoPath: genericEmpress,
    link: "#",
    width: "",
  },
];

export default sponsorsContent;
