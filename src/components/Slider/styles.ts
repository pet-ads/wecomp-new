import styled from "styled-components";

export const SliderContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 100%;

  object-fit: cover;

  .swiper-pagination-bullet {
    background: rgb(255, 255, 255);
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: var(--primary-color);
    opacity: 1;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    list-style: none;
    overflow: visible;
  }
`;
