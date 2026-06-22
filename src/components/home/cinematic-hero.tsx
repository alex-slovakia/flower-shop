"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.16]);
  const contentY = useTransform(scrollYProgress, [0, .8], [0, reduce ? 0 : -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, .65], [1, reduce ? 1 : 0]);
  return <section ref={ref} className="hero"><motion.div className="hero-image" style={{ y: imageY, scale: imageScale }}><video className="hero-video" src="/media/hero-video.mp4" poster="/media/hero-poster.webp" autoPlay={!reduce} loop muted playsInline preload="auto" aria-hidden="true" /></motion.div><div className="hero-shade" /><motion.div className="hero-content shell" style={{ y: contentY, opacity: contentOpacity }}><p className="hero-kicker">Viazané ráno. V Bratislave ešte dnes.</p><h1 className="display">Kvety,<br />ktoré prídu <em>včas.</em></h1><div className="hero-actions"><Link className="button" href="/kytice">Vybrať kyticu <ArrowRight size={18} /></Link><Link className="text-link" href="/dorucenie-a-kontakt">Ako doručujeme</Link></div></motion.div></section>;
}
