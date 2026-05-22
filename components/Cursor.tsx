"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        position: "fixed", width: 10, height: 10,
        background: "var(--gold)", borderRadius: "50%",
        pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "width 0.3s ease, height 0.3s ease",
      }} />
      <div ref={ringRef} style={{
        position: "fixed", width: 36, height: 36,
        border: "1px solid rgba(200,169,110,0.5)",
        borderRadius: "50%", pointerEvents: "none",
        zIndex: 9998, transform: "translate(-50%, -50%)",
        transition: "width 0.3s ease, height 0.3s ease",
      }} />
    </>
  );
}