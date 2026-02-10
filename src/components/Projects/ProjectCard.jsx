import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";

function ProjectCard({ project, isVisible, delay = 0 }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: delay / 1000, // Convert ms to seconds for GSAP
          ease: "power3.out",
        },
      );

      // Create hover animations
      const card = cardRef.current;

      // GSAP context for cleanup
      const ctx = gsap.context(() => {
        // Create a timeline for hovering effects
        const tl = gsap.timeline({ paused: true });

        tl.to(
          imageRef.current,
          {
            scale: 1.08,
            duration: 0.5,
            ease: "power2.out",
          },
          0,
        );

        tl.to(
          card.querySelector(".card-overlay"),
          {
            opacity: 1,
            duration: 0.4,
          },
          0,
        );

        tl.to(
          card.querySelectorAll(".card-tag"),
          {
            y: -5,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        );

        // Add mouse events
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      }, cardRef);

      // Cleanup function
      return () => ctx.revert();
    }
  }, [isVisible, delay]);

  return (
    <div
      ref={cardRef}
      className="group rounded-xl overflow-hidden shadow-xl bg-transparent transition-all duration-300"
      style={{ opacity: 0 }}
    >
      <div className="card h-full flex flex-col hover-lift">
        {/* Project Image */}
        <div className="overflow-hidden relative">
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="card-overlay absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end justify-between">
            <div className="p-4 w-full flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-sky-400 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-sky-400 transition-colors"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 blue-gradient-text">
            {project.title}
          </h3>
          <p className="text-slate-400 mb-4 grow">{project.description}</p>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="card-tag px-2 py-1 text-xs bg-slate-700 text-sky-400 rounded-full transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links - Mobile Friendly Bottom Bar */}
        <div className="md:hidden flex justify-between items-center border-t border-slate-700 p-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-slate-300 hover:text-sky-400 transition-colors"
          >
            <FaGithub className="mr-2" /> Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-slate-300 hover:text-sky-400 transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  isVisible: PropTypes.bool,
  delay: PropTypes.number,
};

export default ProjectCard;
