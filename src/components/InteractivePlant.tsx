import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PlantPhase = "idle" | "anticipating" | "feeding" | "growing";

const stemPath = "M 200 350 Q 198 300 200 250 Q 202 200 200 150 Q 199 120 198 80";

const branches = [
  "M 200 280 Q 175 265 145 270",
  "M 200 230 Q 230 215 260 220",
  "M 200 180 Q 170 165 140 170",
  "M 200 140 Q 235 125 265 130",
  "M 200 110 Q 185 100 170 105",
];

const leaves = [
  { cx: 145, cy: 270, angle: -15, size: 1 },
  { cx: 260, cy: 220, angle: 20, size: 0.95 },
  { cx: 140, cy: 170, angle: -25, size: 1.1 },
  { cx: 265, cy: 130, angle: 15, size: 0.9 },
  { cx: 170, cy: 105, angle: -10, size: 0.75 },
  { cx: 198, cy: 75, angle: 0, size: 1.15 },
];

const roots = [
  "M 200 350 Q 180 380 160 420 Q 150 440 140 460",
  "M 200 350 Q 190 385 185 420 Q 182 445 175 470",
  "M 200 350 Q 200 390 200 430 Q 200 450 200 480",
  "M 200 350 Q 215 385 220 420 Q 225 445 230 465",
  "M 200 350 Q 225 380 240 410 Q 250 435 260 455",
];

const mycorrhizal = [
  { path: "M 140 460 Q 130 470 115 475", end: [115, 475] },
  { path: "M 140 460 Q 145 475 135 485", end: [135, 485] },
  { path: "M 175 470 Q 165 480 155 490", end: [155, 490] },
  { path: "M 200 480 Q 190 490 180 495", end: [180, 495] },
  { path: "M 200 480 Q 210 490 220 495", end: [220, 495] },
  { path: "M 230 465 Q 240 475 250 480", end: [250, 480] },
  { path: "M 260 455 Q 270 465 280 470", end: [280, 470] },
  { path: "M 260 455 Q 255 470 260 480", end: [260, 480] },
];

const tessellationLines = [
  [-8, -10, -3, -14],
  [3, -14, 8, -10],
  [-12, -3, -6, -7],
  [6, -7, 12, -3],
  [-10, 4, -5, 0],
  [5, 0, 10, 4],
  [-7, 10, -3, 6],
  [3, 6, 7, 10],
];

const metrics = [
  { label: "Growth Rate", value: "+23%", color: "hsla(160, 60%, 45%, 1)" },
  { label: "Photosynthesis", value: "94%", color: "hsla(175, 50%, 40%, 1)" },
  { label: "Yield Forecast", value: "+47%", color: "hsla(42, 80%, 55%, 1)" },
];

const InteractivePlant = () => {
  const [phase, setPhase] = useState<PlantPhase>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; sx: number; sy: number }>>([]);

  const handleEnter = useCallback(() => {
    setPhase("anticipating");
    timerRef.current = setTimeout(() => {
      setPhase("feeding");
      setParticles(
        Array.from({ length: 16 }, (_, i) => ({
          id: Date.now() + i,
          sx: Math.random() * 400,
          sy: Math.random() > 0.5 ? Math.random() * 60 : 380 + Math.random() * 100,
        }))
      );
      feedTimerRef.current = setTimeout(() => setPhase("growing"), 2000);
    }, 1500);
  }, []);

  const handleLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (feedTimerRef.current) clearTimeout(feedTimerRef.current);
    setPhase("idle");
    setParticles([]);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (feedTimerRef.current) clearTimeout(feedTimerRef.current);
    };
  }, []);

  const isFeeding = phase === "feeding" || phase === "growing";
  const isGrowing = phase === "growing";
  const isActive = phase !== "idle";

  return (
    <div
      className="relative w-full max-w-md mx-auto cursor-pointer select-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <svg viewBox="0 0 400 500" className="w-full h-auto" style={{ filter: "drop-shadow(0 0 20px hsla(160, 60%, 45%, 0.1))" }}>
        <defs>
          <radialGradient id="groundGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsla(30, 30%, 25%, 0.4)" />
            <stop offset="100%" stopColor="hsla(30, 30%, 25%, 0)" />
          </radialGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(152, 60%, 35%)" />
            <stop offset="100%" stopColor="hsl(160, 55%, 40%)" />
          </linearGradient>
          <linearGradient id="leafGrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(152, 70%, 45%)" />
            <stop offset="100%" stopColor="hsl(160, 65%, 50%)" />
          </linearGradient>
          <filter id="plantGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="200" cy="355" rx="180" ry="12" fill="url(#groundGrad)" />

        {/* === ROOT SYSTEM === */}
        <g>
          {roots.map((d, i) => (
            <motion.path
              key={`root-${i}`}
              d={d}
              stroke="hsla(30, 35%, 30%, 0.5)"
              strokeWidth={3 - i * 0.3}
              fill="none"
              strokeLinecap="round"
              animate={{
                pathLength: isGrowing ? 1 : 0.6,
                stroke: isGrowing ? "hsla(30, 40%, 35%, 0.8)" : "hsla(30, 35%, 30%, 0.5)",
              }}
              transition={{ duration: 1.2, delay: i * 0.12 }}
            />
          ))}

          {/* Mycorrhizal network */}
          <AnimatePresence>
            {isGrowing &&
              mycorrhizal.map((m, i) => (
                <motion.path
                  key={`myco-${i}`}
                  d={m.path}
                  stroke="hsla(160, 50%, 45%, 0.5)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                />
              ))}
          </AnimatePresence>

          {/* Mycorrhizal glow nodes */}
          <AnimatePresence>
            {isGrowing &&
              mycorrhizal.map((m, i) => (
                <motion.circle
                  key={`myco-n-${i}`}
                  cx={m.end[0]}
                  cy={m.end[1]}
                  r="2.5"
                  fill="hsla(160, 60%, 50%, 0.9)"
                  filter="url(#plantGlow)"
                  initial={{ opacity: 0, r: 0 }}
                  animate={{ opacity: [0, 1, 0.7], r: [0, 3, 2] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.08 }}
                />
              ))}
          </AnimatePresence>
        </g>

        {/* === MAIN STEM === */}
        <motion.path
          d={stemPath}
          stroke="hsla(152, 45%, 28%, 0.9)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          animate={{ strokeWidth: isActive ? 6 : 5 }}
          transition={{ duration: 0.4 }}
        />

        {/* Vascular flow overlay */}
        <AnimatePresence>
          {isFeeding && (
            <motion.path
              d={stemPath}
              stroke="hsla(160, 60%, 50%, 0.7)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              filter="url(#plantGlow)"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* === BRANCHES === */}
        {branches.map((d, i) => (
          <motion.path
            key={`br-${i}`}
            d={d}
            stroke="hsla(152, 45%, 28%, 0.7)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{
              stroke: isGrowing ? "hsla(152, 55%, 35%, 0.9)" : "hsla(152, 45%, 28%, 0.7)",
            }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Branch vascular flow */}
        <AnimatePresence>
          {isFeeding &&
            branches.map((d, i) => (
              <motion.path
                key={`br-flow-${i}`}
                d={d}
                stroke="hsla(160, 60%, 50%, 0.5)"
                strokeWidth="1"
                fill="none"
                filter="url(#plantGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              />
            ))}
        </AnimatePresence>

        {/* === LEAVES === */}
        {leaves.map((leaf, i) => (
          <g key={`leaf-${i}`} transform={`translate(${leaf.cx}, ${leaf.cy}) rotate(${leaf.angle}) scale(${leaf.size})`}>
            {/* Leaf body */}
            <motion.path
              d="M 0 -22 C 18 -18 28 -5 0 22 C -28 -5 -18 -18 0 -22"
              fill={isGrowing ? "url(#leafGrowGrad)" : "url(#leafGrad)"}
              stroke="hsla(152, 60%, 40%, 0.3)"
              strokeWidth="0.5"
              animate={{
                scale: phase === "anticipating" ? 1.05 : phase === "growing" ? 1.3 : 1,
                opacity: isActive ? 1 : 0.85,
              }}
              transition={{
                duration: phase === "anticipating" ? 0.4 : 0.8,
                delay: i * 0.08,
                ease: [0.25, 0.9, 0.35, 1.1],
              }}
            />

            {/* Leaf veins */}
            <line x1="0" y1="-14" x2="0" y2="16" stroke="hsla(152, 70%, 50%, 0.3)" strokeWidth="0.5" />
            <line x1="0" y1="-8" x2="10" y2="-13" stroke="hsla(152, 70%, 50%, 0.2)" strokeWidth="0.3" />
            <line x1="0" y1="-3" x2="-10" y2="-8" stroke="hsla(152, 70%, 50%, 0.2)" strokeWidth="0.3" />
            <line x1="0" y1="3" x2="10" y2="-2" stroke="hsla(152, 70%, 50%, 0.2)" strokeWidth="0.3" />
            <line x1="0" y1="8" x2="-10" y2="3" stroke="hsla(152, 70%, 50%, 0.2)" strokeWidth="0.3" />

            {/* Cellular tessellation overlay */}
            <AnimatePresence>
              {isGrowing && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  {tessellationLines.map(([x1, y1, x2, y2], j) => (
                    <motion.line
                      key={j}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="hsla(160, 70%, 55%, 0.6)"
                      strokeWidth="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: j * 0.04 }}
                    />
                  ))}
                </motion.g>
              )}
            </AnimatePresence>

            {/* Stomatal breathing pulse */}
            <motion.circle
              cx="0"
              cy="0"
              r="1.5"
              fill="hsla(160, 60%, 50%, 0.25)"
              animate={{
                r: [1.5, 2.8, 1.5],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* === NUTRIENT PARTICLES === */}
        <AnimatePresence>
          {particles.map((p) => (
            <motion.circle
              key={p.id}
              r="3"
              fill="hsla(160, 60%, 55%, 0.9)"
              filter="url(#plantGlow)"
              initial={{ cx: p.sx, cy: p.sy, opacity: 0 }}
              animate={{
                cx: [p.sx, 200],
                cy: [p.sy, 250],
                opacity: [0, 0.9, 0],
                r: [2, 4, 1],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.9, 0.35, 1.1],
              }}
            />
          ))}
        </AnimatePresence>

        {/* Photosynthesis efficiency overlay ring */}
        <AnimatePresence>
          {isGrowing && (
            <motion.circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="hsla(160, 60%, 50%, 0.15)"
              strokeWidth="1"
              strokeDasharray="6 3"
              initial={{ opacity: 0, r: 80 }}
              animate={{ opacity: 1, r: 120, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "linear", rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
            />
          )}
        </AnimatePresence>
      </svg>

      {/* === GROWTH METRICS PANEL === */}
      <AnimatePresence>
        {isGrowing && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-0 top-1/4 space-y-2"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-microscope rounded-lg px-3 py-2 text-right"
              >
                <div className="text-[10px] text-primary-foreground/50 font-medium tracking-wide uppercase">
                  {m.label}
                </div>
                <motion.div
                  className="text-base font-display font-bold"
                  style={{ color: m.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                >
                  {m.value}
                </motion.div>
                {/* Mini progress bar */}
                <div className="w-full h-0.5 rounded-full mt-1" style={{ background: "hsla(0,0%,100%,0.1)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: m.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${parseInt(m.value.replace(/[^0-9]/g, ""))}%` }}
                    transition={{ duration: 1, delay: 0.9 + i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover hint */}
      <AnimatePresence>
        {phase === "idle" && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-primary-foreground/30 whitespace-nowrap tracking-wider uppercase"
          >
            Hover to nurture
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractivePlant;
