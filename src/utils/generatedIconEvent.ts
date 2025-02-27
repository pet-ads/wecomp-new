// Types
import { TypeEventName } from "../types/Programming";

export function generatedIconEvent(typeEvent: TypeEventName) {
  const icons = {
    Talk: { iconPath: "../../src/assets/icons/programming/talkIcon.svg" },
    Course: {
      iconPath: "../../src/assets/icons/programming/programmingIcon.svg",
    },
    Opening: {
      iconPath: "../../src/assets/icons/programming/openingIcon.svg",
    },
    TechnicalVisit: {
      iconPath: "../../src/assets/icons/programming/technicalVisitIcon.svg",
    },
  };
  return icons[typeEvent].iconPath;
}
