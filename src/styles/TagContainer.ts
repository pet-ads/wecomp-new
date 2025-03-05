// External libraires
import styled from "styled-components";

export const TagContainer = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.backgroundColor || `var(--primary-text-color)`};
  color: ${(props) => props.textColor || `var(--secundary-text-color)`};

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
