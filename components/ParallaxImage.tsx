"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  speed?: number;
};

export function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "100vw",
  speed = 0.28,
}: ParallaxImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const el = frame.current;
      const layer = inner.current;
      if (!el || !layer) return;
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const offset =
        ((rect.top + rect.height / 2 - view / 2) / view) * speed * 140;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={frame} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div ref={inner} className="absolute -inset-[16%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </div>
    </div>
  );
}
