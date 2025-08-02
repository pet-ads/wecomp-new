import oneSix from "../images/organizationLogo/OneSixLogo.svg";
import onovolab from "../images/organizationLogo/onovolab.svg";
import kakauTech from "../images/organizationLogo/KakauTech.svg";
import csdbr from "../images/organizationLogo/CsdLogo.svg";
import softable from "../images/organizationLogo/SoftableLogo.svg";
import amdocs from "../images/organizationLogo/amdocs.svg";

interface SponsorProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
}

export const sponsorsContent: SponsorProps[] = [
  {
    name: "Kakau Tech",
    logoPath: kakauTech,
    link: "https://www.kakautech.com",
    width: "9rem",
  },
  {
    name: "SOFTABLE",
    logoPath: softable,
    link: "https://softable.com.br/",
    width: "8rem",
  },
  {
    name: "CSD BR",
    logoPath: csdbr,
    link: "https://csdbr.com",
    width: "8rem",
  },
  {
    name: "AMDOCS",
    logoPath: amdocs,
    link: "https://www.amdocs.com/",
    width: "8rem",
  },
  {
    name: "ONOVOLAB",
    logoPath: onovolab,
    link: "https://onovolab.com",
    width: "9rem",
  }, 
  {
    name: "OneSIX",
    logoPath: oneSix,
    link: "https://onesix.global",
    width: "8rem",
  }
];

export default sponsorsContent;
