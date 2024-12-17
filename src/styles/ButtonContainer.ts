import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 8rem;
  max-width: 8rem;

  min-height: 2.5rem;
  max-height: 2.5rem;

  padding: .5rem 1rem;

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

`;

export default ButtonContainer;