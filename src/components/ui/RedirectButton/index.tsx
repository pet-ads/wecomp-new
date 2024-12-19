// Types
import { RedirectButtonProps } from "../../../types/RedirectButton.ts";

// Styles
import LinkButton from "./styles.ts";

export default function RedirectButton({
  link,
  children,
}: RedirectButtonProps) {
  const handleClick = () => {
    window.location.href = link;
  };

  return <LinkButton onClick={handleClick}>{children}</LinkButton>;
}
