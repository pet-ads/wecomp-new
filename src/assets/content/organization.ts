import ifsp from "../images/organizationLogo/IFSPLogo.svg";
import onesix from "../images/organizationLogo/OneSixLogo.svg";
import pet from "../images/organizationLogo/petLogo.svg";



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
    width: "12.5rem",
    type: "realizador",
  },
  {
    name: "PET ADS",
    logoPath: pet,
    link: "#",
    width: "8rem",
    type: "organizador",
  },
  {
    name: "ONE SIX",
    logoPath: onesix,
    link: "#",
    width: "5rem",
    type: "realizador",
  },
];

export default organizationContent;
