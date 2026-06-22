"use client";

import { useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef } from "react";

const films = [
  { src: "/media/flower-to-bouquet.mp4", poster: "/media/flower-to-bouquet-poster.webp" },
  { src: "/media/binding-bouquet.mp4", poster: "/media/binding-bouquet-poster.webp" },
  { src: "/media/delivery.mp4", poster: "/media/delivery-poster.webp" },
];

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smoothstep = (start: number, end: number, value: number) => {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

export function ScrollFilmSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const frameRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reducedMotion) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const position = progress * films.length;
      const fade = 0.16;
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        const enter = index === 0 ? 1 : smoothstep(index - fade, index + fade, position);
        const leave = index === films.length - 1 ? 1 : 1 - smoothstep(index + 1 - fade, index + 1 + fade, position);
        video.style.opacity = String(enter * leave);
        if (video.readyState >= 1 && Number.isFinite(video.duration)) {
          const targetTime = clamp(position - index) * Math.max(0, video.duration - 0.04);
          if (Math.abs(video.currentTime - targetTime) > 0.025) video.currentTime = targetTime;
        }
      });
    });
  });

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  return <section ref={sectionRef} className="scroll-film" aria-label="Cesta kytice od viazania po doručenie"><div className="scroll-film-sticky">{films.map((film, index) => <video key={film.src} ref={(node) => { videoRefs.current[index] = node; }} className="scroll-film-video" style={{ opacity: index === 0 ? 1 : 0 }} src={film.src} poster={film.poster} muted playsInline preload="auto" aria-hidden="true" />)}<div className="scroll-film-vignette" /></div></section>;
}
