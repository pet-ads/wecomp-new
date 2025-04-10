import talkIcon from "@/assets/icons/programming/talkIcon.svg";
import courseIcon from "@/assets/icons/programming/programmingIcon.svg";
import openingIcon from "@/assets/icons/programming/openingIcon.svg";
import technicalVisitIcon from "@/assets/icons/programming/technicalVisitIcon.svg";

import { TypeEventName } from "../components/sections/Programming/types";

type IconEventProps = {
  iconPath: string;
  label: string;
};

const icons: Record<TypeEventName, IconEventProps> = {
  Talk: {
    iconPath: talkIcon,
    label: "Talk",
  },
  Course: {
    iconPath: courseIcon,
    label: "Mini curso",
  },
  Opening: {
    iconPath: openingIcon,
    label: "Abertura",
  },
  TechnicalVisit: {
    iconPath: technicalVisitIcon,
    label: "Visita técnica",
  },
};

export function generatedIconEvent(typeEvent: TypeEventName) {
  return icons[typeEvent];
}
