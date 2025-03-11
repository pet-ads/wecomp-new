import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { SliderProps } from "../../types/Slider";

import { SliderContainer } from "./styles";

export default function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      setSlidePerView(window.innerWidth < 1080 ? 2.5 : 1.8);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SliderContainer>
      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={80}
        centeredSlides={false}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}
