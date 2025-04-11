import { LocationProps } from "../../types";
import { Container, MapFrame, DetailsOfLocal, InformationSpan } from "./styles";

export default function Map({ address, alt, name, url }: LocationProps) {
  return (
    <Container>
      <MapFrame src={url} aria-label={alt} />
      <DetailsOfLocal>
        <InformationSpan>{name}</InformationSpan>
        <InformationSpan>{address}</InformationSpan>
      </DetailsOfLocal>
    </Container>
  );
}
