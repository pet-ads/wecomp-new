import instagram from "@/assets/icons/contact/instagram.svg";
import facebook from "@/assets/icons/contact/facebook.svg";
import email from "@/assets/icons/contact/email.svg";

import { ContactProps } from "../../components/sections/Contact/types";

export const contactContent: ContactProps[] = [
  {
    username: "wecompifsp",
    contactUrl: "https://www.instagram.com/wecompifsp/",
    iconPath: instagram,
    iconAlt: "Instagram social network icon",
  },
  {
    username: "wecompifsp",
    contactUrl: "https://web.facebook.com/wecompifsp",
    iconPath: facebook,
    iconAlt: "Facebook  social network icon",
  },
  {
    username: "wecomp.scl@ifsp.edu.br",
    contactUrl:
      "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Contato+via+Site+da+Wecomp&to=wecomp.scl@ifsp.edu.br",
    iconPath: email,
    iconAlt: "Wecomp contact e-mail",
  },
];

export default contactContent;
