import { useEffect, useRef } from "react";

interface TrailDot {
  x: number;
  y: number;
  age: number;
  size: number;
  hue: number;
}

const CursorNutrientTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<TrailDot[]>([]);
  const rafRef = useRef(0);
  const lastPosRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only add if inside container
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      // Throttle: only add if moved enough
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      if (Math.hypot(dx, dy) < 4) return;
      lastPosRef.current = { x, y };

      trailsRef.current.push({
        x,
        y,
        age: 0,
        size: Math.random() * 3 + 1.5,
        hue: 150 + Math.random() * 30,
      });

      if (trailsRef.current.length > 60) {
        trailsRef.current.splice(0, trailsRef.current.length - 60);
      }
    };

    const animate = () => {
      const w = parent.getBoundingClientRect().width;
      const h = parent.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);

      trailsRef.current = trailsRef.current.filter((t) => t.age < 1);

      trailsRef.current.forEach((t) => {
        t.age += 0.015;
        const alpha = (1 - t.age) * 0.5;
        const radius = t.size * (1 + t.age * 3);

        // Outer glow
        ctx.globalAlpha = alpha * 0.2;
        ctx.fillStyle = `hsla(${t.hue}, 60%, 50%, 1)`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner dot
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsla(${t.hue}, 60%, 55%, 1)`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Core bright spot
        ctx.globalAlpha = alpha * 1.5;
        ctx.fillStyle = `hsla(${t.hue}, 70%, 70%, 1)`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[15]"
    />
  );
};

export default CursorNutrientTrail;
