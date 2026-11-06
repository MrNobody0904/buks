import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
export const $ = s => document.querySelector(s);
export const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
export const cl = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const sm = t => t * t * (3 - 2 * t);
export const state = { lenis: null };
export function initCore() {
  if (RM) return;
  const l = new Lenis();
  l.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => l.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  state.lenis = l;
}
