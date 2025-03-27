import styled from "styled-components";

export const SoonCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20rem;
  height: 20rem;

  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;

  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const SoonText = styled.span`
  padding-bottom: 0.5rem;

  color: var(--secondary-text-color);
  border-bottom: 5px solid black;

  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
