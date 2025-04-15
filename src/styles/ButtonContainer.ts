import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 8rem;
  max-width: 8rem;

  min-height: 2.5rem;
  max-height: 2.5rem;

  padding: 0.5rem 1rem;

  100-white: var(--600-green);
  color: var(--200-white);

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;

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

export default ButtonContainer;