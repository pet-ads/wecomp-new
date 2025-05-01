import ArrowButton from "../../toolkit/ArrowButton";
import { SectionProps } from "./types";
import { Container, Content } from "./styles";
import SubTitle from "../../toolkit/SubTitle";
import Footer from "../Footer";

export const Section = ({
  title,
  children,
  backgroundColor = "var(--gray-200)",
  currentSectionId,
  nextSectionId,
  isLastSection,
}: SectionProps) => {
  return (
    <Container
      id={currentSectionId}
      backgroundColor={backgroundColor}
      $isLast={isLastSection}
    >
      <Content>
        {title ? <SubTitle children={title} /> : null}
        {children}
      </Content>
      {isLastSection ? <Footer /> : null}
      {nextSectionId ? <ArrowButton sectionId={nextSectionId} /> : null}
    </Container>
  );
};
