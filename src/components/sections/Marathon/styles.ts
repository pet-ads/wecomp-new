import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const MarathonSection = styled(SectionContainer)``;

export const MarathonWrapper = styled(SectionContent)`
  padding: 1rem 0;
  display: flex;
  flex-direction: row; /* Para telas menores, o conteúdo será empilhado verticalmente */
  flex-wrap: wrap; /* Para garantir que o conteúdo se ajuste bem em telas menores */
  justify-content: center; /* Para distribuir o espaço entre texto e imagem */
`;

export const MarathonText = styled.div`
  width: 100%; /* 100% de largura em telas pequenas */
  margin: 1rem 0;
  text-align: justify;
  font-size: 12.5pt;

  @media (min-width: 768px) {
    width: 60%; /* Ocupa 60% da largura em telas maiores */
    font-size: 15pt;
  }
`;

export const MarathonImageWrapper = styled.div`
  width: 100%;
  height: auto; /* 100% de largura em telas pequenas */
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 40%;
    height: auto; /* Ocupa 35% da largura em telas maiores */
  }

  img {
    width: 100%; /* A imagem ocupa toda a largura do wrapper */
    height: auto; /* Mantém a proporção da imagem */
  }
`;


export const MarathonSubtitle = styled.h2`
`;
