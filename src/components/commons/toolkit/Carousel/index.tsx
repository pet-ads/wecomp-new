import { useEffect, useRef, useState } from "react";
import {
  CarouselContainer,
  LogoList,
  LogoItem,
  LogoFigure,
  LogoImage,
  LogoCaption,
} from "./styles";

interface CarouselProps {
  items: Array<{ logoPath: string; name: string; link: string; width: string }>;
  visibleItems: number;
}

export default function Carousel({ items, visibleItems }: CarouselProps) {
  const [index, setIndex] = useState(items.length);
  const [currentVisibleItems, setCurrentVisibleItems] = useState(visibleItems);
  const loopedItems = [...items, ...items, ...items];
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setCurrentVisibleItems(window.innerWidth < 768 ? 3 : visibleItems);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setIndex((prev) => (prev + 1) % loopedItems.length);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [loopedItems.length]);

  const getTranslate = () => {
    const offset = Math.floor(currentVisibleItems / 2);
    const shift = (100 / loopedItems.length) * (index - offset);
    return `translateX(-${shift}%)`;
  };

  useEffect(() => {
    if (index >= items.length * 2) {
      setTimeout(() => setIndex(items.length), 0);
    }
  }, [index, items.length]);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX.current =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const currentX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = currentX - startX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIndex(
          (prev) => (prev - 1 + loopedItems.length) % loopedItems.length
        );
      } else {
        setIndex((prev) => (prev + 1) % loopedItems.length);
      }
      isDragging.current = false;
      startX.current = null;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <CarouselContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <LogoList
        style={{
          transform: getTranslate(),
          width: `${(100 * loopedItems.length) / currentVisibleItems}%`,
        }}
      >
        {loopedItems.map((item, i) => {
          const isCenter = i === index;
          return (
            <LogoItem key={i} style={{ width: `${100 / loopedItems.length}%` }}>
              <LogoFigure
                isCenter={isCenter}
                onClick={() => window.open(item.link, "_blank")}
              >
                <LogoImage
                  src={item.logoPath}
                  alt={item.name}
                  width={item.width}
                />
                <LogoCaption>{item.name}</LogoCaption>
              </LogoFigure>
            </LogoItem>
          );
        })}
      </LogoList>
    </CarouselContainer>
  );
}
