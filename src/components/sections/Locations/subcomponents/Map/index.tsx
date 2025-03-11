import { LocationProps } from "../../../../../types/Locations";
import { Container, MapFrame, DetailsOfLocal, InformationSpan } from "./styles";

export default function Map({ address, alt, localName, url }: LocationProps) {
  return (
    <Container>
      <MapFrame src={url} aria-label={alt} />
      <DetailsOfLocal>
        <InformationSpan>{localName}</InformationSpan>
        <InformationSpan>{address}</InformationSpan>
      </DetailsOfLocal>
    </Container>
  );
}
