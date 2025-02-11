// External library
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

// Type
import { SliderProps } from "../../types/Slider";

// Styles
import { SliderContainer } from "./styles";

export default function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      setSlidePerView(window.innerWidth < 1280 ? 1.2 : 2.5);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SliderContainer>
      <Swiper slidesPerView={slidePerView} spaceBetween={20}>
        {items.map((item, index) => (
          <SwiperSlide key={index} style={{ height: "auto" }}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}
