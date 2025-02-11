import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import { SliderContainer } from "./styles";


interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

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
