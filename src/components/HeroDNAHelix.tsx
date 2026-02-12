import { motion } from "framer-motion";
import { useState } from "react";

/**
 * About Page Hero – Animated DNA Double Helix
 * Two intertwined strands with base-pair rungs, hover triggers replication fork animation.
 */
const HeroDNAHelix = () => {
  const [hovered, setHovered] = useState(false);
  const strandCount = 12;
  const height = 280;

  return (
    <div
      className="relative w-64 mx-auto cursor-pointer select-none"
      style={{ height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rotating wrapper for the helix */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: hovered ? 30 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ perspective: 600, transformStyle: "preserve-3d" }}
      >
        {Array.from({ length: strandCount }).map((_, i) => {
          const y = (i / (strandCount - 1)) * (height - 20) + 10;
          const phase = (i / strandCount) * Math.PI * 2;
          const leftX = 80 + Math.sin(phase) * 50;
          const rightX = 80 + Math.sin(phase + Math.PI) * 50;
          const depth = Math.cos(phase);
          const depthRight = Math.cos(phase + Math.PI);

          return (
            <div key={i}>
              {/* Left strand node */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  left: leftX - 6,
                  top: y - 6,
                  zIndex: depth > 0 ? 10 : 1,
                  background: `hsl(160, ${60 + depth * 20}%, ${45 + depth * 10}%)`,
                }}
                animate={{
                  scale: hovered ? [1, 1.4, 1] : 1,
                  boxShadow: hovered
                    ? [
                        "0 0 0px hsla(160, 60%, 45%, 0)",
                        "0 0 18px hsla(160, 60%, 45%, 0.7)",
                        "0 0 0px hsla(160, 60%, 45%, 0)",
                      ]
                    : "0 0 6px hsla(160, 60%, 45%, 0.3)",
                }}
                transition={{
                  duration: 1.5,
                  repeat: hovered ? Infinity : 0,
                  delay: i * 0.1,
                }}
              />

              {/* Right strand node */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  left: rightX - 6,
                  top: y - 6,
                  zIndex: depthRight > 0 ? 10 : 1,
                  background: `hsl(180, ${55 + depthRight * 15}%, ${40 + depthRight * 10}%)`,
                }}
                animate={{
                  scale: hovered ? [1, 1.4, 1] : 1,
                  boxShadow: hovered
                    ? [
                        "0 0 0px hsla(180, 55%, 40%, 0)",
                        "0 0 18px hsla(180, 55%, 40%, 0.7)",
                        "0 0 0px hsla(180, 55%, 40%, 0)",
                      ]
                    : "0 0 6px hsla(180, 55%, 40%, 0.3)",
                }}
                transition={{
                  duration: 1.5,
                  repeat: hovered ? Infinity : 0,
                  delay: i * 0.1 + 0.05,
                }}
              />

              {/* Base pair rung */}
              <motion.div
                className="absolute"
                style={{
                  left: Math.min(leftX, rightX),
                  top: y - 1,
                  width: Math.abs(rightX - leftX),
                  height: 2,
                  zIndex: 0,
                }}
                animate={{
                  background: hovered
                    ? [
                        "hsla(160, 60%, 45%, 0.15)",
                        "hsla(160, 60%, 45%, 0.6)",
                        "hsla(160, 60%, 45%, 0.15)",
                      ]
                    : "hsla(160, 60%, 45%, 0.15)",
                  scaleY: hovered ? [1, 2.5, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: hovered ? Infinity : 0,
                  delay: i * 0.12,
                }}
              />
            </div>
          );
        })}

        {/* Central glow when hovered */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
          animate={{
            background: hovered
              ? "radial-gradient(circle, hsla(160, 60%, 45%, 0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, hsla(160, 60%, 45%, 0) 0%, transparent 70%)",
            scale: hovered ? 2 : 1,
          }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Idle rotation animation (continuous) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        {Array.from({ length: strandCount }).map((_, i) => {
          const y = (i / (strandCount - 1)) * (height - 20) + 10;
          const phase = (i / strandCount) * Math.PI * 2;
          const leftX = 80 + Math.sin(phase) * 50;
          const nextPhase = ((i + 1) / strandCount) * Math.PI * 2;
          const nextLeftX = 80 + Math.sin(nextPhase) * 50;
          const nextY = ((i + 1) / (strandCount - 1)) * (height - 20) + 10;

          if (i >= strandCount - 1) return null;

          return (
            <motion.line
              key={`strand-${i}`}
              x1={leftX}
              y1={y}
              x2={nextLeftX}
              y2={nextY}
              stroke="hsla(160, 60%, 45%, 0.2)"
              strokeWidth="1.5"
              animate={{
                stroke: hovered
                  ? ["hsla(160, 60%, 45%, 0.2)", "hsla(160, 60%, 45%, 0.5)", "hsla(160, 60%, 45%, 0.2)"]
                  : "hsla(160, 60%, 45%, 0.2)",
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Label */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs font-medium text-primary-foreground/60 tracking-widest uppercase">
          {hovered ? "Replicating Vision" : "DNA of Innovation"}
        </span>
      </motion.div>
    </div>
  );
};

export default HeroDNAHelix;
