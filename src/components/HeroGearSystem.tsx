import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Code, Layers, Wrench, GraduationCap, Building2 } from "lucide-react";

/**
 * Services Page Hero – Interlocking Gear System
 * Rotating gears that represent different services, hover accelerates + highlights.
 */

const gears = [
  { icon: Brain, label: "AI Consulting", teeth: 10, radius: 48 },
  { icon: Code, label: "Development", teeth: 14, radius: 60 },
  { icon: Layers, label: "Integration", teeth: 8, radius: 40 },
  { icon: Wrench, label: "R&D", teeth: 12, radius: 50 },
  { icon: GraduationCap, label: "Training", teeth: 10, radius: 44 },
  { icon: Building2, label: "Franchise", teeth: 8, radius: 38 },
];

const gearPositions = [
  { x: 140, y: 60 },
  { x: 260, y: 90 },
  { x: 70, y: 140 },
  { x: 200, y: 170 },
  { x: 330, y: 160 },
  { x: 130, y: 230 },
];

const createGearPath = (cx: number, cy: number, teeth: number, outerR: number) => {
  const innerR = outerR * 0.72;
  const points: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i / (teeth * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${points.join("L")}Z`;
};

const HeroGearSystem = () => {
  const [hoveredGear, setHoveredGear] = useState<number | null>(null);

  return (
    <div className="relative mx-auto select-none" style={{ width: 400, height: 300 }}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Connection shafts between gears */}
        {[
          [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [2, 5], [3, 5],
        ].map(([a, b], idx) => (
          <motion.line
            key={`shaft-${idx}`}
            x1={gearPositions[a].x}
            y1={gearPositions[a].y}
            x2={gearPositions[b].x}
            y2={gearPositions[b].y}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={{
              stroke:
                hoveredGear === a || hoveredGear === b
                  ? "hsla(160, 60%, 45%, 0.5)"
                  : "hsla(160, 60%, 45%, 0.1)",
              strokeDashoffset: [0, -8],
            }}
            transition={{
              stroke: { duration: 0.3 },
              strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}

        {gears.map((gear, i) => {
          const pos = gearPositions[i];
          const isHovered = hoveredGear === i;
          const isConnected =
            hoveredGear !== null &&
            [[0,1],[0,2],[1,3],[2,3],[3,4],[2,5],[3,5]].some(
              ([a, b]) =>
                (a === hoveredGear && b === i) || (b === hoveredGear && a === i)
            );
          const direction = i % 2 === 0 ? 1 : -1;
          const Icon = gear.icon;

          return (
            <g
              key={i}
              onMouseEnter={() => setHoveredGear(i)}
              onMouseLeave={() => setHoveredGear(null)}
              className="cursor-pointer"
            >
              {/* Gear glow */}
              {isHovered && (
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={gear.radius + 10}
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  stroke="hsla(160, 60%, 45%, 0.3)"
                  strokeWidth="2"
                />
              )}

              {/* Gear shape */}
              <motion.path
                d={createGearPath(pos.x, pos.y, gear.teeth, gear.radius)}
                strokeWidth="1.5"
                animate={{
                  rotate: [0, 360 * direction],
                  fill: isHovered
                    ? "hsla(160, 60%, 45%, 0.15)"
                    : isConnected
                    ? "hsla(160, 60%, 45%, 0.08)"
                    : "hsla(160, 60%, 45%, 0.03)",
                  stroke: isHovered
                    ? "hsla(160, 60%, 45%, 0.7)"
                    : isConnected
                    ? "hsla(160, 60%, 45%, 0.35)"
                    : "hsla(160, 60%, 45%, 0.15)",
                }}
                transition={{
                  rotate: {
                    duration: isHovered ? 4 : isConnected ? 6 : 12,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  fill: { duration: 0.4 },
                  stroke: { duration: 0.4 },
                }}
                style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              />

              {/* Center hub */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={gear.radius * 0.35}
                animate={{
                  fill: isHovered
                    ? "hsla(160, 60%, 45%, 0.3)"
                    : "hsla(160, 60%, 45%, 0.08)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <foreignObject
                x={pos.x - 12}
                y={pos.y - 12}
                width={24}
                height={24}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{
                      color: isHovered
                        ? "hsl(160, 60%, 60%)"
                        : "hsla(160, 40%, 60%, 0.6)",
                    }}
                  />
                </motion.div>
              </foreignObject>

              {/* Label */}
              <motion.text
                x={pos.x}
                y={pos.y + gear.radius + 16}
                textAnchor="middle"
                className="text-[9px] font-medium"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  fill: "hsl(160, 60%, 70%)",
                }}
                transition={{ duration: 0.3 }}
              >
                {gear.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Bottom label */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
        animate={{ opacity: hoveredGear !== null ? 1 : 0.5 }}
      >
        <span className="text-xs font-medium text-primary-foreground/60 tracking-widest uppercase">
          {hoveredGear !== null ? "Services in Sync" : "Interconnected Services"}
        </span>
      </motion.div>
    </div>
  );
};

export default HeroGearSystem;
