import styled from "styled-components";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export const ArrowContainerBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0.1rem;

  z-index: 2;

  width: 3rem;
  height: 3rem;

  cursor: pointer;
`;

export const WrapperIcon = styled(IoIosArrowDown)`
  font-size: 2rem;

  color: black;

  cursor: pointer;
`;
