import { useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * Animate an array of refs sequentially
 * @param {Array} refs - array of useRef objects
 * @param {Array} deps - optional dependency array
 * @param {number} staggerTime - overlap delay between animations
 */
const useAnimateSequence = (refs, deps = [], staggerTime = 1.0) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1.2 },
    });

    refs.forEach((ref, index) => {
      if (ref?.current) {
        tl.to(
          ref.current,
          { autoAlpha: 1, y: 0 },
          index === 0 ? undefined : `-=${staggerTime}`
        );
      }
    });
  }, deps); // make sure you pass unique dependencies for each page
};

export default useAnimateSequence;
