import { motion } from "framer-motion";
import { useState } from "react";
import { Sprout, MessageSquare, TrendingUp, CreditCard, Building } from "lucide-react";

/**
 * Products Page Hero – Honeycomb Hexagonal Grid
 * Hexagonal cells reveal product icons on hover with ripple-glow propagation.
 */

const hexProducts = [
  { icon: Sprout, label: "Precision", color: "160, 60%, 45%" },
  { icon: MessageSquare, label: "Advisory", color: "180, 55%, 40%" },
  { icon: TrendingUp, label: "Supply Chain", color: "170, 50%, 42%" },
  { icon: CreditCard, label: "Fintech", color: "155, 65%, 38%" },
  { icon: Building, label: "Enterprise", color: "165, 58%, 44%" },
];

const HeroHexGrid = () => {
  const [activeHex, setActiveHex] = useState<number | null>(null);
  const hexSize = 52;
  const gap = 6;

  // Honeycomb layout positions (3-2 pattern centered)
  const positions = [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 1, col: 0.5 },
    { row: 1, col: 1.5 },
  ];

  const getHexPosition = (row: number, col: number) => {
    const width = hexSize * 2 + gap;
    const x = col * width;
    const y = row * (hexSize * 1.75 + gap);
    return { x, y };
  };

  return (
    <div className="relative mx-auto select-none" style={{ width: 340, height: 240 }}>
      <svg
        viewBox="-10 -10 340 240"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {positions.map((pos, i) => {
          const { x, y } = getHexPosition(pos.row, pos.col);
          const cx = x + hexSize;
          const cy = y + hexSize;
          const Icon = hexProducts[i].icon;
          const isActive = activeHex === i;
          const isNeighbor =
            activeHex !== null && Math.abs(activeHex - i) <= 1 && activeHex !== i;

          // Hexagon points
          const points = Array.from({ length: 6 })
            .map((_, j) => {
              const angle = (Math.PI / 3) * j - Math.PI / 6;
              return `${cx + hexSize * Math.cos(angle)},${cy + hexSize * Math.sin(angle)}`;
            })
            .join(" ");

          return (
            <g
              key={i}
              onMouseEnter={() => setActiveHex(i)}
              onMouseLeave={() => setActiveHex(null)}
              className="cursor-pointer"
            >
              {/* Outer glow */}
              <motion.polygon
                points={points}
                fill="none"
                stroke={`hsla(${hexProducts[i].color.split(",")[0]}, 60%, 45%, 0.15)`}
                strokeWidth="1.5"
                animate={{
                  stroke: isActive
                    ? `hsla(${hexProducts[i].color}, 0.8)`
                    : isNeighbor
                    ? `hsla(${hexProducts[i].color}, 0.4)`
                    : `hsla(${hexProducts[i].color}, 0.15)`,
                  filter: isActive ? "drop-shadow(0 0 12px hsla(160, 60%, 45%, 0.5))" : "none",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Fill */}
              <motion.polygon
                points={points}
                stroke="none"
                animate={{
                  fill: isActive
                    ? `hsla(${hexProducts[i].color}, 0.2)`
                    : isNeighbor
                    ? `hsla(${hexProducts[i].color}, 0.08)`
                    : `hsla(${hexProducts[i].color}, 0.03)`,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Pulsing ring when active */}
              {isActive && (
                <motion.polygon
                  points={points}
                  fill="none"
                  stroke={`hsla(${hexProducts[i].color}, 0.4)`}
                  strokeWidth="2"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.15, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              )}

              {/* Icon placeholder (foreignObject for React icons) */}
              <foreignObject x={cx - 16} y={cy - 22} width={32} height={32}>
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{
                    scale: isActive ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: isActive
                        ? `hsl(${hexProducts[i].color})`
                        : "hsla(160, 60%, 60%, 0.6)",
                    }}
                  />
                </motion.div>
              </foreignObject>

              {/* Label */}
              <motion.text
                x={cx}
                y={cy + 20}
                textAnchor="middle"
                className="text-[10px] font-medium fill-current"
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  fill: isActive ? "hsl(160, 60%, 70%)" : "hsla(160, 20%, 70%, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                {hexProducts[i].label}
              </motion.text>
            </g>
          );
        })}

        {/* Connecting lines between hexagons */}
        {[
          [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4],
        ].map(([a, b], idx) => {
          const posA = getHexPosition(positions[a].row, positions[a].col);
          const posB = getHexPosition(positions[b].row, positions[b].col);
          return (
            <motion.line
              key={`line-${idx}`}
              x1={posA.x + hexSize}
              y1={posA.y + hexSize}
              x2={posB.x + hexSize}
              y2={posB.y + hexSize}
              strokeWidth="1"
              animate={{
                stroke:
                  activeHex === a || activeHex === b
                    ? "hsla(160, 60%, 45%, 0.4)"
                    : "hsla(160, 60%, 45%, 0.08)",
              }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
      </svg>

      {/* Bottom label */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
        animate={{ opacity: activeHex !== null ? 1 : 0.5 }}
      >
        <span className="text-xs font-medium text-primary-foreground/60 tracking-widest uppercase">
          {activeHex !== null ? hexProducts[activeHex].label : "Hover to Explore"}
        </span>
      </motion.div>
    </div>
  );
};

export default HeroHexGrid;
