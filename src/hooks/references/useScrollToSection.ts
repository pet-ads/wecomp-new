export default function useScrollToSection() {
  const smoothScrollToTarget = (elementId: string) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return smoothScrollToTarget;
}
