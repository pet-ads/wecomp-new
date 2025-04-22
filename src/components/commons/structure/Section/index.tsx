import ArrowButton from "../../toolkit/ArrowButton";
import { SectionProps } from "./types";
import { Container, Content } from "./styles";
import SubTitle from "../../toolkit/SubTitle";

export const Section = ({
  title,
  children,
  backgroundColor = "var(--gray-200)",
  currentSectionId,
  nextSectionId,
}: SectionProps) => {
  return (
    <Container id={currentSectionId} backgroundColor={backgroundColor}>
      <Content>
        {title ? <SubTitle children={title} /> : null}
        {children}
      </Content>

      {nextSectionId ? <ArrowButton sectionId={nextSectionId} /> : null}
    </Container>
  );
};
