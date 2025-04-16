import styled from "styled-components";

import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 100%;
  max-width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;

`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>``;
