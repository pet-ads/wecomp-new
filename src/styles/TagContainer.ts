import styled from "styled-components";

export const TagContainer = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7rem;

  height: 2rem;

  padding: 0 0.75rem;

  white-space: nowrap;

  background-color: ${(props) => props.backgroundColor || `var(--white-100)`};
  color: ${(props) => props.textColor || `var(--gray-1000)`};

  border-radius: 1rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  font-weight: bold;
`;
