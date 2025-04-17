import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

export const SandWichIcon = styled.div`
  display: none;

  position: absolute;
  top: 0.5rem;
  right: 0;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

    padding: 0 0.5rem;
  }
`;

export const WrapperIcon = styled(IoMenuOutline)`
  font-size: 2.5rem;

  color: white;

  cursor: pointer;
`;
