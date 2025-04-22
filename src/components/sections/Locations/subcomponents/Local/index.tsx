import { LocationProps } from "../../types";
import {
  Container,
  MapFrame,
  DetailsOfLocal,
  InformationSpan,
  ComplementSpan,
} from "./styles";

export default function Local({ address, alt, name, url }: LocationProps) {
  return (
    <Container>
      <MapFrame src={url} aria-label={alt} />

      <DetailsOfLocal>
        <InformationSpan>{name}</InformationSpan>
        <ComplementSpan>{address}</ComplementSpan>
      </DetailsOfLocal>
    </Container>
  );
}
