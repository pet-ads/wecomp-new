import { useEffect, useRef, useState } from "react";

import { CarouselItem, CarouselTrack, SliderWrapper } from "./styles";

import { SliderProps } from "./types";

export default function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const updateCarouselWidth = () => {
    if (carouselContainerRef.current) {
      setCarouselWidth(
        carouselContainerRef.current.scrollWidth -
          carouselContainerRef.current.offsetWidth
      );
    }
  };

  useEffect(() => {
    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);
  }, []);

  return (
    <SliderWrapper>
      <CarouselTrack
        ref={carouselContainerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>{renderItem(item)}</CarouselItem>
        ))}
      </CarouselTrack>
    </SliderWrapper>
  );
}
