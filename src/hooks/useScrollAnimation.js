import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to a container element.
 * When that element enters the viewport, the class "scroll-visible" is added
 * to it and to every direct child that has the class "scroll-child".
 * Each scroll-child gets a staggered transitionDelay based on its index.
 */
const useScrollAnimation = (staggerMs = 100) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                el.classList.add("scroll-visible");

                const children = el.querySelectorAll(".scroll-child");
                children.forEach((child, i) => {
                    child.style.transitionDelay = `${i * staggerMs}ms`;
                    child.classList.add("scroll-visible");
                });

                observer.disconnect();
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [staggerMs]);

    return ref;
};

export default useScrollAnimation;
