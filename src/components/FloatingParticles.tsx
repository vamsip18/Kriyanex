import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "leaf" | "dot" | "hex";
  rotation: number;
  rotationSpeed: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles = ({ count = 30, className = "" }: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 0.3 - 0.1,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.1,
      type: (["leaf", "dot", "hex"] as const)[Math.floor(Math.random() * 3)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));

    const drawLeaf = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = `hsla(152, 60%, 45%, ${p.opacity})`;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.quadraticCurveTo(p.size * 1.5, -p.size * 0.5, 0, p.size);
      ctx.quadraticCurveTo(-p.size * 1.5, -p.size * 0.5, 0, -p.size);
      ctx.fill();
      ctx.restore();
    };

    const drawDot = (p: Particle) => {
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = `hsla(160, 60%, 50%, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
      ctx.fill();

      // Glow
      ctx.fillStyle = `hsla(160, 60%, 50%, ${p.opacity * 0.3})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawHex = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity * 0.5;
      ctx.strokeStyle = `hsla(175, 50%, 40%, ${p.opacity})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = Math.cos(angle) * p.size;
        const y = Math.sin(angle) * p.size;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.vx += (Math.random() - 0.5) * 0.01;

        // Wrap around
        if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        if (p.type === "leaf") drawLeaf(p);
        else if (p.type === "dot") drawDot(p);
        else drawHex(p);
      });

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = "hsla(152, 60%, 45%, 0.3)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.globalAlpha = 0.05 * (1 - dist / 150);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default FloatingParticles;
