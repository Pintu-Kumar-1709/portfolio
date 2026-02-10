import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Particles3D() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate particles based on screen size
  const particleCount = Math.min(50, Math.floor(windowSize.width / 30));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 100, 0],
            y: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 100, 0],
            opacity: [0, 0.8, 0.4, 0],
            scale: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + i * 8}%`,
          }}
        >
          {i % 3 === 0 && (
            <motion.div
              className="w-8 h-8 border border-blue-400/30 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          )}

          {i % 3 === 1 && (
            <motion.div
              className="w-6 h-6 border border-violet-400/30 transform rotate-45"
              animate={{
                rotate: [45, 405],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          )}

          {i % 3 === 2 && (
            <motion.div className="relative">
              {Array.from({ length: 3 }).map((_, j) => (
                <motion.div
                  key={j}
                  className="absolute w-4 h-0.5 bg-linear-to-r from-blue-400/40 to-violet-400/40"
                  style={{
                    transformOrigin: "0 0",
                    transform: `rotate(${j * 60}deg)`,
                  }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4 + j,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i + j) * 0.2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Flowing Lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute opacity-10"
          style={{
            width: "2px",
            height: "100vh",
            left: `${20 + i * 30}%`,
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(59, 130, 246, 0.3) 30%, 
              rgba(139, 92, 246, 0.3) 70%, 
              transparent 100%)`,
          }}
          animate={{
            y: ["-100vh", "100vh"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Constellation Effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-blue-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Mesh Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl opacity-20"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.1, 0.3, 0.1, 0.2],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}

export default Particles3D;
