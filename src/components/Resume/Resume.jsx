import { useState, useCallback, useMemo } from "react";
import {
  FaDownload,
  FaEye,
  FaFilePdf,
  FaSpinner,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaAward,
} from "react-icons/fa";
import SEOHead from "../SEO/SEOHead";
import { SEO_CONFIGS } from "../SEO/seoConfigs";
import { motion, AnimatePresence } from "framer-motion";

function Resume() {
  const [showPDF, setShowPDF] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // Use useCallback to prevent unnecessary re-renders
  const handleViewPDF = useCallback(() => {
    setIsLoading(true);
    setPdfError(false);
    // Reduced loading time for better UX
    setTimeout(() => {
      setIsLoading(false);
      setShowPDF(true);
    }, 500);
  }, []);

  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/documents/kumarrR.pdf";
    link.download = "kumarrR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Memoize static data for performance - Updated with real resume content
  const experiences = useMemo(
    () => [
      {
        title: "Frontend Developer ( Food Website Project )",
        company: "Personal Project",
        period: "January 2024 - february  2024",
        location: "Bhopal, Madhya Pradesh",
        achievements: [
          "Developed a high-performance food website using HTML5, CSS3, and JavaScript with a focus on modern UI/UX.",
          "Implemented smooth, scroll-triggered animations and reveal effects using Framer Motion for an interactive user experience.",
          "Integrated SwiperJS to create responsive, touch-enabled hero and category sliders for seamless navigation.",
          "Optimized website performance and load times by ensuring clean code structure and efficient asset management.",
          "Designed a fully responsive layout with modern CSS techniques like Flexbox and Grid for all screen sizes.",
        ],
      },
      {
        title: "Backend Developer ( Quora Post Project )",
        company: "Personal Project",
        period: "May 2024 - May 2024",
        location: "Bhopal, Madhya Pradesh",
        achievements: [
          "Architected a robust server-side application using Node.js and Express.js framework.",
          "Developed dynamic web pages using EJS template engine to render data efficiently from the server.",
          "Implemented RESTful API endpoints for seamless data flow and business logic handling.",
          "Integrated middleware for request parsing, error handling, and security best practices.",
          "Managed server-side state and logic to ensure smooth user flow without heavy client-side reliance.",
        ],
      },
      {
        title: "Full-Stack Developer ( VibeStream - Music Platform )",
        company: "Personal Project",
        period: "December 2024 - January 2025",
        location: "Bhopal, Madhya Pradesh",
        achievements: [
          "Architected a high-performance music streaming platform using Next.js (App Router) for optimized server-side rendering and routing.",
          "Crafted a visually stunning and immersive UI using Aceternity UI and Tailwind CSS, focusing on modern aesthetics and dark-themed components.",
          "Integrated Framer Motion to create fluid interface transitions, including smooth hover effects and interactive player animations.",
          "Implemented responsive music playback controls and dynamic song categorization for a seamless user experience across devices.",
          "Leveraged Next.js API routes for efficient data fetching and state management to handle real-time UI updates during music playback.",
        ],
      },
      {
        title: "Full-Stack MERN Developer ( RadiAntiX Job Search )",
        company: "Personal Project",
        period: "September 2025 - December 2025 ",
        location: "Bhopal, Madhya Pradesh",
        achievements: [
          "Engineered a full-stack web application using React.js and Node.js/Express with a focus on scalable architecture.",
          "Implemented secure User Authentication using JSON Web Tokens (JWT) and Bcryptjs for password hashing.",
          "Integrated Cloudinary, Multer, and DataURI for seamless image upload and cloud-based media management.",
          "Designed a modern UI using Tailwind CSS and Shadcn UI, managing global state efficiently with Redux Toolkit.",
          "Architected a robust database schema with MongoDB and Mongoose, ensuring data integrity and optimized query performance.",
          "Utilized Cookie-parser for secure session handling and CORS for cross-origin resource sharing management.",
        ],
      },
    ],
    [],
  );

  // Education data - also memoized with real information
  const education = useMemo(
    () => [
      {
        degree: "Bachelor of Software Engineering",
        institution:
          "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
        period: "August 2022 - Present",
        location: "Bhopal, Madhya Pradesh",
        gpa: "7.44/10",
        details:
          "Final-year Software Engineering student with solid experience in Mern Full Stack development. Passionate about backend development, database design, and building scalable applications.",
      },
    ],
    [],
  );

  // Certifications - memoized with real project-based accomplishments
  const certifications = useMemo(
    () => [
      {
        name: "Full Stack Development",
        issuer: "Apna College",
        year: "2024-2025",
        details:
          "React 19, TailwindCSS, Modern JavaScript Redux & Next.js RESTful APIs development expertise demonstrated through multiple projects",
      },

      {
        name: "C & C++",
        issuer: "Excellence Academics Coaching Center",
        year: "2023",
        details: "C & C++ using through CodeHub and NatureGrain projects",
      },
    ],
    [],
  );

  // Awards & Scholarships - memoized with actual achievements
  const awards = useMemo(
    () => [
      {
        title: "Social Welfare Activities",
        issuer: "Bishnugarh Inter College of Science, Hazaribagh (Jharkhand)",
        year: "2022",
        type: "Welfare Scheme",
        achievement: "Recognizes the Best Student in College",
        description:
          "Led a team for Social Welfare Activities during Inter College organizing and managing communities initiatives",
      },
      {
        title: "Debate Activities",
        issuer:
          "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
        year: "2024",
        type: "Debate Competition",
        achievement: "₹ 15,000/",
        description:
          "Second-year excellence recognition in Debate Competition program",
      },
      {
        title: "Web Development",
        issuer:
          "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
        year: "2025",
        type: "Website Building",
        achievement: "Secured 1st position",
        description:
          "Awarded for secured top position among 15 students in the University Web Development Projects.",
      },
      {
        title: "Full Stack Web Development",
        issuer:
          "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
        year: "2026",
        type: "Website Building",
        achievement: "Secured 2nd position",
        description:
          "Awarded for secured top position among 20 students in the University for Full Stack Web Development Projects & PPT Presentation.",
      },
    ],
    [],
  );

  return (
    <>
      <SEOHead {...SEO_CONFIGS.resume} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaFilePdf className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-semibold text-neutral-300">
                Professional Resume
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Resume</span>
            </motion.h1>

            <motion.div
              className="w-24 h-1.5 bg-linear-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p
              className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download my complete resume or view it online to learn more about
              my professional experience, skills, and achievements.
            </motion.p>
          </div>

          {/* PDF Viewer */}
          <AnimatePresence>
            {showPDF && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-neutral-700/50">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-100">
                        Resume Preview
                      </h3>
                      <p className="text-neutral-400 text-sm mt-1">
                        kumarrR.pdf
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setShowPDF(false)}
                      className="text-neutral-400 hover:text-neutral-200 text-2xl p-2 hover:bg-neutral-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  <div className="bg-neutral-800/50 rounded-xl p-4">
                    <iframe
                      src="/documents/kumarrR.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
                      className="w-full h-150 rounded-lg border border-neutral-700/30"
                      title="Resume PDF"
                      loading="lazy"
                      onError={() => setPdfError(true)}
                      onLoad={() => setPdfError(false)}
                    />

                    {/* Fallback for browsers that don't support PDF viewing */}
                    <div
                      className={`text-center mt-4 p-4 bg-neutral-700/30 rounded-lg ${
                        pdfError ? "bg-red-900/20 border border-red-500/30" : ""
                      }`}
                    >
                      <p className="text-neutral-400 text-sm mb-3">
                        {pdfError
                          ? "PDF failed to load, but you can still access it!"
                          : "Can't see the PDF? No problem!"}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="/documents/kumarrR.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaEye className="text-sm" />
                          View in Browser
                        </a>
                        <button
                          onClick={handleDownloadPDF}
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaDownload className="text-sm" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-6">
                <FaBriefcase className="w-5 h-5 text-amber-400" />
                <span className="text-lg font-semibold text-neutral-300">
                  Work Experience
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Professional Journey
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-neutral-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-amber-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-neutral-400 text-sm mt-2 md:mt-0 text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-neutral-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education, Certifications & Awards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Education */}
            <div className="min-h-150 flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaGraduationCap className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-semibold text-neutral-300">
                    Education
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Academic Background
                </h2>
              </div>

              <div className="flex-1">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-2xl p-6 border border-neutral-700/50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h3 className="text-lg font-bold text-neutral-100 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-amber-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center text-neutral-400 text-sm mb-2">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-neutral-300 font-semibold mb-3">
                      GPA: {edu.gpa}
                    </p>
                    {edu.details && (
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="min-h-150 flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaCertificate className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-semibold text-neutral-300">
                    Certifications
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Professional Certifications
                </h2>
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="glass-effect rounded-xl p-6 border border-neutral-700/50"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <FaAward className="text-amber-400" />
                        <h3 className="font-bold text-neutral-100">
                          {cert.name}
                        </h3>
                      </div>
                      <p className="text-neutral-400 text-sm mb-2">
                        {cert.issuer} • {cert.year}
                      </p>
                      {cert.details && (
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {cert.details}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards & Scholarships */}
            <div className="min-h-150 flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-4">
                  <FaAward className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-semibold text-neutral-300">
                    Awards & Scholarships
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Awards & Recognition
                </h2>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-neutral-700/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Award background gradient */}
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-yellow-500/5 rounded-xl"></div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-linear-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <FaAward className="text-white text-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-neutral-100 text-lg">
                              {award.title}
                            </h3>
                            <p className="text-amber-400 text-sm font-medium">
                              {award.type}
                            </p>
                          </div>
                        </div>
                        <span className="text-neutral-400 text-sm font-medium bg-neutral-800/50 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                      </div>

                      <div className="mb-3">
                        <p className="text-neutral-300 text-sm mb-1">
                          <span className="font-medium">Institution:</span>{" "}
                          {award.issuer}
                        </p>
                        <p className="text-amber-400 text-sm font-medium">
                          <span className="text-neutral-300">Achievement:</span>{" "}
                          {award.achievement}
                        </p>
                      </div>

                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center glass-effect rounded-3xl p-12 border border-neutral-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-linear-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaDownload className="text-neutral-900 text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-neutral-100 mb-4">
              Ready to collaborate?
            </h3>

            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
              Download my full resume for detailed information about my
              experience, projects, and technical skills. Let's build something
              amazing together!
            </p>

            <motion.button
              onClick={handleDownloadPDF}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <FaDownload />
              Get My Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Resume;
