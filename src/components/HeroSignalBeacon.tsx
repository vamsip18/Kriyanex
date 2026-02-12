import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

/**
 * Contact Page Hero – Signal Beacon / Communication Tower
 * Antenna emitting expanding signal waves with floating contact method icons.
 */

const contactMethods = [
  { icon: Mail, label: "Email", angle: -60 },
  { icon: Phone, label: "Phone", angle: -20 },
  { icon: MapPin, label: "Location", angle: 20 },
  { icon: MessageCircle, label: "Chat", angle: 60 },
];

const HeroSignalBeacon = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);

  return (
    <div
      className="relative mx-auto select-none cursor-pointer"
      style={{ width: 320, height: 300 }}
      onMouseEnter={() => setIsTransmitting(true)}
      onMouseLeave={() => setIsTransmitting(false)}
    >
      <svg
        viewBox="0 0 320 300"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Tower base */}
        <motion.path
          d="M145 280 L155 180 L165 280 Z"
          fill="hsla(160, 60%, 45%, 0.15)"
          stroke="hsla(160, 60%, 45%, 0.3)"
          strokeWidth="1.5"
          animate={{
            fill: isTransmitting
              ? "hsla(160, 60%, 45%, 0.25)"
              : "hsla(160, 60%, 45%, 0.15)",
          }}
        />

        {/* Tower mid section */}
        <motion.path
          d="M140 200 L160 130 L170 200 Z"
          fill="hsla(160, 60%, 45%, 0.12)"
          stroke="hsla(160, 60%, 45%, 0.25)"
          strokeWidth="1.5"
        />

        {/* Cross braces */}
        <line x1="147" y1="210" x2="163" y2="240" stroke="hsla(160, 60%, 45%, 0.2)" strokeWidth="1" />
        <line x1="163" y1="210" x2="147" y2="240" stroke="hsla(160, 60%, 45%, 0.2)" strokeWidth="1" />
        <line x1="150" y1="170" x2="160" y2="190" stroke="hsla(160, 60%, 45%, 0.2)" strokeWidth="1" />
        <line x1="160" y1="170" x2="150" y2="190" stroke="hsla(160, 60%, 45%, 0.2)" strokeWidth="1" />

        {/* Antenna top */}
        <motion.line
          x1="155"
          y1="130"
          x2="155"
          y2="90"
          stroke="hsla(160, 60%, 45%, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            stroke: isTransmitting
              ? "hsla(160, 60%, 60%, 0.8)"
              : "hsla(160, 60%, 45%, 0.5)",
          }}
        />

        {/* Antenna tip glow */}
        <motion.circle
          cx={155}
          cy={85}
          r={5}
          fill="hsl(160, 60%, 50%)"
          animate={{
            r: isTransmitting ? [5, 8, 5] : 5,
            filter: isTransmitting
              ? [
                  "drop-shadow(0 0 4px hsla(160, 60%, 45%, 0.4))",
                  "drop-shadow(0 0 16px hsla(160, 60%, 45%, 0.9))",
                  "drop-shadow(0 0 4px hsla(160, 60%, 45%, 0.4))",
                ]
              : "drop-shadow(0 0 4px hsla(160, 60%, 45%, 0.4))",
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Signal waves */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M${155 - 30 - i * 25},${85} Q${155},${60 - i * 8} ${155 + 30 + i * 25},${85}`}
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              stroke: isTransmitting
                ? [
                    "hsla(160, 60%, 45%, 0)",
                    "hsla(160, 60%, 45%, 0.5)",
                    "hsla(160, 60%, 45%, 0)",
                  ]
                : "hsla(160, 60%, 45%, 0.05)",
              pathLength: isTransmitting ? [0, 1] : 0.5,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Downward signal waves */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`wave-down-${i}`}
            d={`M${155 - 20 - i * 18},${85} Q${155},${105 + i * 8} ${155 + 20 + i * 18},${85}`}
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            animate={{
              stroke: isTransmitting
                ? [
                    "hsla(180, 55%, 40%, 0)",
                    "hsla(180, 55%, 40%, 0.3)",
                    "hsla(180, 55%, 40%, 0)",
                  ]
                : "hsla(180, 55%, 40%, 0.03)",
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4 + 0.2,
            }}
          />
        ))}

        {/* Ground base */}
        <motion.line
          x1="120"
          y1="280"
          x2="190"
          y2="280"
          stroke="hsla(160, 60%, 45%, 0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating contact method icons */}
      {contactMethods.map((method, i) => {
        const Icon = method.icon;
        const angleRad = (method.angle * Math.PI) / 180;
        const orbitRadius = isTransmitting ? 130 : 100;
        const centerX = 155;
        const centerY = 85;
        const x = centerX + Math.sin(angleRad) * orbitRadius;
        const y = centerY - Math.cos(angleRad) * orbitRadius * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: x - 16,
              top: y - 16,
            }}
            animate={{
              opacity: isTransmitting ? 1 : 0.3,
              scale: isTransmitting ? 1 : 0.7,
              x: isTransmitting ? [0, 3, -3, 0] : 0,
            }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.1 },
              scale: { duration: 0.5, delay: i * 0.1 },
              x: { duration: 3, repeat: Infinity, delay: i * 0.3 },
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: isTransmitting
                  ? "hsla(160, 60%, 45%, 0.2)"
                  : "hsla(160, 60%, 45%, 0.05)",
                border: `1px solid hsla(160, 60%, 45%, ${isTransmitting ? 0.4 : 0.1})`,
              }}
            >
              <Icon
                className="w-4 h-4"
                style={{
                  color: isTransmitting
                    ? "hsl(160, 60%, 60%)"
                    : "hsla(160, 40%, 55%, 0.5)",
                }}
              />
            </div>
            <motion.span
              className="text-[9px] font-medium whitespace-nowrap"
              style={{ color: "hsla(160, 40%, 65%, 0.7)" }}
              animate={{ opacity: isTransmitting ? 1 : 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {method.label}
            </motion.span>
          </motion.div>
        );
      })}

      {/* Bottom label */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
        animate={{ opacity: isTransmitting ? 1 : 0.5 }}
      >
        <span className="text-xs font-medium text-primary-foreground/60 tracking-widest uppercase">
          {isTransmitting ? "Transmitting..." : "Hover to Connect"}
        </span>
      </motion.div>
    </div>
  );
};

export default HeroSignalBeacon;
