import genericEmpress from "../images/empresaGenerica.svg";

interface OrganizationProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
}

export const organizationContent: OrganizationProps[] = [
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

export default organizationContent;
