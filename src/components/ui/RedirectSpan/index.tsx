import { RedirectSpanProps } from "./types";
import { RedirectLinkSpan } from "./styles";

export default function RedirectSpan({ link, children }: RedirectSpanProps) {
  return <RedirectLinkSpan href={link}>{children}</RedirectLinkSpan>;
}
