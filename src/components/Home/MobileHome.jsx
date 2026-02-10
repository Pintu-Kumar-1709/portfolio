import { useState, useEffect, memo } from "react";
import TypeWriter from "./TypeWriter";
import { FaArrowRight, FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSpring,
  SiSpringsecurity,
} from "react-icons/si";

// Mobile-first Home component - no heavy animations or 3D models
const MobileHome = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const techStack = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: FaJava, name: "Java", color: "text-red-500" },
    { icon: SiSpring, name: "Spring", color: "text-green-500" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
  ];

  return (
    <main className="section-padding pt-20 pb-16 min-h-screen relative overflow-hidden">
      {/* Simple background - no heavy effects on mobile */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-transparent to-violet-600/5"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Header */}
          <div>
            <p className="text-blue-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Nguyen Tran Gia Si</span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 min-h-8">
              <TypeWriter
                words={[
                  "Full Stack Developer",
                  "Spring Boot Expert",
                  "React Enthusiast",
                  "Problem Solver",
                ]}
                delay={isMobile ? 100 : 80}
                deleteDelay={isMobile ? 50 : 30}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Passionate about creating robust backend systems with Spring Boot
            and intuitive frontend experiences with React. Always eager to learn
            and tackle new challenges in software development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Pintu-Kumar-1709"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pintu-kumar-12x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-8">
            <p className="text-slate-500 text-sm mb-4">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2"
                  >
                    <IconComponent className={`${tech.color} text-lg`} />
                    <span className="text-slate-300 text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

MobileHome.displayName = "MobileHome";

export default MobileHome;
