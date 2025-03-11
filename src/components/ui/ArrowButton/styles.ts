import styled from "styled-components";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export const ArrowContainerBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 12rem;

  width: 3rem;
  height: 3rem;

  cursor: pointer;

  @media (max-width: 1080px) {
    top: 6.5rem;
  }
`;

export const WrapperIcon = styled(IoIosArrowDown)`
  font-size: 2rem;

  color: black;

  cursor: pointer;
`;
