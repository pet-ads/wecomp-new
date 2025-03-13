import { TypeEventName } from "../components/sections/Programming/types";

export function generatedIconEvent(typeEvent: TypeEventName) {
  const icons = {
    Talk: {
      iconPath: "../../src/assets/icons/programming/talkIcon.svg",
      label: "Talk",
    },
    Course: {
      iconPath: "../../src/assets/icons/programming/programmingIcon.svg",
      label: "Mini curso",
    },
    Opening: {
      iconPath: "../../src/assets/icons/programming/openingIcon.svg",
      label: "Abertura",
    },
    TechnicalVisit: {
      iconPath: "../../src/assets/icons/programming/technicalVisitIcon.svg",
      label: "Visita técnica",
    },
  };
  return icons[typeEvent];
}
