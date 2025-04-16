import genericEmpress from "../images/empresaGenerica.svg";
import ifsp from "../images/ifspLogo.png";
import pet from "../images/petadsLogo.svg";

interface OrganizationProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
}

export const organizationContent: OrganizationProps[] = [
  {
    name: "Generica",
    logoPath: ifsp,
    link: "#",
    width: "",
  },
  {
    name: "Generica",
    logoPath: pet,
    link: "#",
    width: "",
  },
];

export default organizationContent;
