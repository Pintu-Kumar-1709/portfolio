 
import { motion } from "framer-motion";

// Animations variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

// Transition settings
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-container"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
