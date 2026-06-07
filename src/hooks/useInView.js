import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that triggers when element enters viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Intersection threshold (0–1)
 * @param {boolean} options.once - Only fire once
 */
export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

export default useInView;
