import { RedirectButtonProps } from "./types.ts";

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
