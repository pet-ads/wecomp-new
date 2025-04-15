import { TypeEventName } from "../sections/Programming/types";

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
