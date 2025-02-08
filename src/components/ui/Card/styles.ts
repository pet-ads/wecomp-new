// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  min-width: 50vw;
  max-width: 50vw;

  height: fit-content;
  min-height: 50vh;
  max-height: 50vh;

  padding: 1rem 2rem;

  gap: 1rem;

  border-radius: 1rem;

  background-color: var(--primary-text-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled.h2`
  
`;

export const Description = styled.p`
  
`;

export const InfoContainer = styled.div`
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: auto;
`;

export const LinkButtonContainer = styled.a`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 8rem;
  max-width: 8rem;

  min-height: 2.5rem;
  max-height: 2.5rem;

  padding: 0.5rem 1rem;

  background-color: var(--primary-color);
  color: var(--primary-text-color);

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  transition: opacity 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }

  &:focus {
    outline: 3px solid var(--focus-outline-color);
    outline-offset: 2px;
  }

  @media (max-width: 380px) {
    min-width: 6rem;
    max-width: 6rem;

    min-height: 2rem;
    max-height: 2rem;


    font-size: .75rem;

    white-space: nowrap;
  }
`;