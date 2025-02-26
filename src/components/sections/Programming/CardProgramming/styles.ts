// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  min-width: 90%;
  max-width: 90%;

  height: fit-content;
  min-height: 100%;
  max-height: 100%;

  margin: 5%;
  padding: 2rem;
  gap: 1rem;
  border-radius: 1rem;
  border: 2px solid black;
  background-color: var(--primary-text-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  /* aspect-ratio: 16 / 9; */

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 1rem;
    aspect-ratio: auto;
  }
`;

