import facepaint from "facepaint";

const breakpoints = [
  320, 375, 414, 480, 600, 768, 900, 1024, 1280, 1440, 1600, 1920,
];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (max-width: ${bp}px)`)
);
