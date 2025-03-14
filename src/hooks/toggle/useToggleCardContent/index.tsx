import { useState } from "react";

export default function useToggleCardContent(
  description: string,
  bio: string,
  labelButtonText: string
) {
  const [labelButton, setLabelButton] = useState<string>(labelButtonText);
  const [cardText, setCardText] = useState<string>(description);

  const handleChangeCardText = () => {
    setCardText((prev) => (prev === description ? bio : description));
    setLabelButton((prev) =>
      prev === "Ver biografia" ? "Ver descrição" : "Ver biografia"
    );
  };

  return {
    labelButton,
    cardText,
    handleChangeCardText,
  };
}
