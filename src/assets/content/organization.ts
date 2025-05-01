import ifsp from "../images/ifspLogo.png";
import pet from "../images/petadsLogo.svg";

interface OrganizationProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
  type: "realizador" | "organizador"; 
}

export const organizationContent: OrganizationProps[] = [
  {
    name: "IFSP",
    logoPath: ifsp,
    link: "#",
    width: "",
    type: "realizador",
  },
  {
    name: "PET ADS",
    logoPath: pet,
    link: "#",
    width: "",
    type: "organizador",
  },
];

export default organizationContent;
