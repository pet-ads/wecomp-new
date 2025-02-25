// Types
import { CardProps } from "../../../types/Card";

type CardComponentProps =  CardProps;

// Styles
import {
  Container,
} from "./styles";

export default function Card({children}: CardComponentProps) {

  return (
    <Container>
      {children}
    </Container>
  );
}
