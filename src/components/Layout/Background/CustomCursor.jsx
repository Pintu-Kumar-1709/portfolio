import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Check if device supports touch
    isTouch.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Hide custom cursor on touch devices
    if (isTouch.current) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [role="button"], .cursor-pointer')) {
        cursor.classList.add("cursor-grow");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-grow");
    };

    // Event listeners
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Special handling for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer, .project-card, .tech-tag',
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("cursor-grow"),
      );
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("cursor-grow"),
      );
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () =>
          cursor.classList.add("cursor-grow"),
        );
        el.removeEventListener("mouseleave", () =>
          cursor.classList.remove("cursor-grow"),
        );
      });
    };
  }, []);

  // Don't render on touch devices
  if (isTouch.current) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed w-10 h-10 rounded-full pointer-events-none z-9999 transition-all duration-300 ease-out mix-blend-difference bg-white opacity-80"
      style={{
        transform: "translate(-50%, -50%)",
        backdropFilter: "invert(1)",
      }}
    />
  );
};

export default CustomCursor;
