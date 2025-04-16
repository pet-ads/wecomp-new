import styled from "styled-components";

export const SoonCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20rem;

  background-color: var(--white-100);

  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
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
