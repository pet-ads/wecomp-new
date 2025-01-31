export const MARQUEE = (isHovered: boolean, xValue: number) => ({
  animate: isHovered ? { x: xValue } : { x: ["-1.5%", "-100%"] },
  transition: isHovered
    ? {}
    : {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
});
