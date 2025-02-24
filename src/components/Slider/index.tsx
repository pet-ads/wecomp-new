// External library
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";


// Type
import { SliderProps } from "../../types/Slider";

// Styles
import { SliderContainer } from "./styles";

export default function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      setSlidePerView(window.innerWidth < 1080 ? 1.2 : 2.5);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SliderContainer>
      <Swiper slidesPerView={slidePerView} spaceBetween={20}>
        {items.map((item, index) => (
            
          <SwiperSlide key={index} style={{ height: "auto", padding: "10px"}}>
            
                {renderItem(item)}
            
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}
