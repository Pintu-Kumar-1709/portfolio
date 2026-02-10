import { motion } from "framer-motion";

function HeroModel() {
  return (
    <div className="relative w-125 h-125 flex items-center justify-center">
      {/* Main Geometric Shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute w-80 h-80 rounded-full border-2 border-blue-500/30"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-violet-500/40"
          animate={{
            rotate: -360,
            scale: [1, 0.95, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Inner Core */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-linear-to-r from-blue-500/20 to-violet-500/20 backdrop-blur-sm"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Floating Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-linear-to-r from-blue-400 to-violet-400"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: `${120 + i * 20}px 0px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              rotate: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              },
              scale: {
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              },
              opacity: {
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              },
            }}
          />
        ))}

        {/* Geometric Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-40 bg-linear-to-t from-transparent via-blue-400/30 to-transparent"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "0 200px",
                transform: `rotate(${i * 60}deg) translateX(-0.5px)`,
              }}
              animate={{
                scaleY: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* Pulsing Background */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-linear-to-r from-blue-600/5 to-violet-600/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Interactive Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, hsl(${200 + i * 10}, 70%, 60%), hsl(${260 + i * 8}, 70%, 60%))`,
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Central Glow */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-violet-500 opacity-20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hexagon Shape */}
        <motion.div
          className="absolute w-48 h-48"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full relative">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`hex-${i}`}
                className="absolute w-1 h-20 bg-linear-to-t from-transparent via-violet-400/20 to-transparent"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 96px",
                  transform: `rotate(${i * 60}deg) translateX(-0.5px)`,
                }}
                animate={{
                  scaleY: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Responsive adjustments for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-model {
            transform: scale(0.7);
          }
        }
      `}</style>
    </div>
  );
}

export default HeroModel;
