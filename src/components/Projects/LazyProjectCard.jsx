import { memo, useState, useRef, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Optimized Project Card with lazy image loading
const LazyProjectCard = memo(({ project, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef(null);

  // Handle image loading with performance optimization
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      className="group glass-effect rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-800/50">
        {!imageError ? (
          <>
            {/* Image skeleton while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-800 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
                </div>
              </div>
            )}

            <motion.img
              ref={imageRef}
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              variants={imageVariants}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
            />
          </>
        ) : (
          // Fallback for broken images
          <div className="w-full h-full bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-slate-600/50 flex items-center justify-center">
                <FaGithub className="text-2xl" />
              </div>
              <p className="text-sm">Preview not available</p>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-lg" />
            </motion.a>

            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-lg" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
        >
          {project.tags?.slice(0, 4).map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/30 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}

          {project.tags?.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-slate-700/30 text-slate-400 rounded-full">
              +{(project.tags?.length || 0) - 4} more
            </span>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
});

LazyProjectCard.displayName = "LazyProjectCard";

export default LazyProjectCard;
