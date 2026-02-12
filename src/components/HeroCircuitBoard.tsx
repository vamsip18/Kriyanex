import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Eye, Satellite, Cpu, Cloud, LinkIcon, Smartphone } from "lucide-react";

/**
 * Technology Page Hero – Circuit Board with Pulsing Data Paths
 * Nodes connected by circuit traces with flowing data pulses.
 */

const techNodes = [
  { icon: Brain, label: "AI/ML", x: 60, y: 40 },
  { icon: Eye, label: "Vision", x: 200, y: 30 },
  { icon: Satellite, label: "Satellite", x: 340, y: 50 },
  { icon: Cpu, label: "IoT", x: 100, y: 150 },
  { icon: Cloud, label: "Cloud", x: 250, y: 140 },
  { icon: LinkIcon, label: "Blockchain", x: 380, y: 160 },
  { icon: Smartphone, label: "Mobile", x: 180, y: 240 },
];

const traces = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6],
];

const HeroCircuitBoard = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const getTracePath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    const midX = (from.x + to.x) / 2;
    // Right-angle circuit trace path
    if (Math.abs(from.y - to.y) < 40) {
      return `M${from.x},${from.y} L${to.x},${to.y}`;
    }
    return `M${from.x},${from.y} L${midX},${from.y} L${midX},${to.y} L${to.x},${to.y}`;
  };

  return (
    <div className="relative mx-auto select-none" style={{ width: 440, height: 290 }}>
      <svg
        viewBox="0 0 440 290"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Data flow gradient */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsla(160, 60%, 45%, 0)" />
            <stop offset="50%" stopColor="hsla(160, 60%, 45%, 0.8)" />
            <stop offset="100%" stopColor="hsla(160, 60%, 45%, 0)" />
          </linearGradient>
        </defs>

        {/* Grid background pattern */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`vgrid-${i}`}
            x1={i * 40}
            y1={0}
            x2={i * 40}
            y2={290}
            stroke="hsla(160, 40%, 45%, 0.04)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`hgrid-${i}`}
            x1={0}
            y1={i * 40}
            x2={440}
            y2={i * 40}
            stroke="hsla(160, 40%, 45%, 0.04)"
            strokeWidth="1"
          />
        ))}

        {/* Circuit traces */}
        {traces.map(([a, b], idx) => {
          const from = techNodes[a];
          const to = techNodes[b];
          const path = getTracePath(from, to);
          const isActive =
            activeNode === a || activeNode === b;

          return (
            <g key={`trace-${idx}`}>
              {/* Base trace */}
              <motion.path
                d={path}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  stroke: isActive
                    ? "hsla(160, 60%, 45%, 0.5)"
                    : "hsla(160, 60%, 45%, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Data pulse along trace */}
              <motion.circle
                r="3"
                fill="hsl(160, 60%, 55%)"
                animate={{
                  opacity: isActive ? [0, 1, 1, 0] : 0,
                  filter: isActive
                    ? "drop-shadow(0 0 6px hsla(160, 60%, 45%, 0.8))"
                    : "none",
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
              >
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  path={path}
                  begin={`${idx * 0.2}s`}
                />
              </motion.circle>

              {/* Solder points at bends */}
              {Math.abs(from.y - to.y) >= 40 && (
                <>
                  <circle
                    cx={(from.x + to.x) / 2}
                    cy={from.y}
                    r="2"
                    fill="hsla(160, 60%, 45%, 0.3)"
                  />
                  <circle
                    cx={(from.x + to.x) / 2}
                    cy={to.y}
                    r="2"
                    fill="hsla(160, 60%, 45%, 0.3)"
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {techNodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = activeNode === i;

          return (
            <g
              key={i}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer"
            >
              {/* Node glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={24}
                fill="none"
                animate={{
                  stroke: isActive
                    ? "hsla(160, 60%, 45%, 0.6)"
                    : "hsla(160, 60%, 45%, 0.12)",
                  r: isActive ? 28 : 24,
                }}
                strokeWidth={isActive ? 2 : 1}
                transition={{ duration: 0.3 }}
              />

              {/* Pulsing outer ring */}
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  fill="none"
                  stroke="hsla(160, 60%, 45%, 0.3)"
                  strokeWidth="1.5"
                  initial={{ r: 24, opacity: 0.6 }}
                  animate={{ r: 40, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              )}

              {/* Node background */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={22}
                animate={{
                  fill: isActive
                    ? "hsla(160, 60%, 45%, 0.2)"
                    : "hsla(200, 40%, 12%, 0.6)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <foreignObject
                x={node.x - 10}
                y={node.y - 10}
                width={20}
                height={20}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{
                      color: isActive
                        ? "hsl(160, 70%, 60%)"
                        : "hsla(160, 40%, 55%, 0.6)",
                    }}
                  />
                </motion.div>
              </foreignObject>

              {/* Label */}
              <motion.text
                x={node.x}
                y={node.y + 36}
                textAnchor="middle"
                className="text-[10px] font-semibold"
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  fill: isActive ? "hsl(160, 60%, 70%)" : "hsla(160, 20%, 60%, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-kriyanex-emerald/20 rounded-tl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-kriyanex-emerald/20 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-kriyanex-emerald/20 rounded-bl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-kriyanex-emerald/20 rounded-br" />
    </div>
  );
};

export default HeroCircuitBoard;
