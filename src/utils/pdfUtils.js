/**
 * PDF Utilities for handling PDF files in the portfolio
 * Supports PDF viewing, text extraction, and data integration
 */

// PDF configuration
export const PDF_CONFIG = {
  // Default PDF files paths
  RESUME_PATH: "/documents/kumarrR.pdf",
  PORTFOLIO_PATH: "/documents/kumarrR.pdf",
  CERTIFICATES_PATH: "/documents/certificates/",

  // PDF viewer options
  VIEWER_OPTIONS: {
    scale: 1.2,
    page: 1,
    rotation: 0,
    textLayerMode: 1, // Enable text selection
    annotationMode: 1, // Enable annotations
  },
};

// Mock PDF data - Replace with actual extracted data
export const PDF_DATA = {
  resume: {
    personalInfo: {
      name: "Pintu Kumar",
      email: "mrkumarrr12@gmail.com",
      phone: "+91 8084 01 6480",
      location: "Bhopal , Madhya Pradesh",
      linkedin: "linkedin.com/in/giasinguyen",
      github: "github.com/giasinguyen",
    },

    summary: `Passionate Full-Stack Developer with expertise in Next.js ecosystem, React, and modern web technologies. 
              Experienced in building scalable applications with Node.js,Express.js, microservices architecture, and cloud deployment.`,

    
    education: [
      {
        id: 1,
        degree: "Bachelor of Computer Science",
        institution:
          "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
        duration: "2022 - 2026",
        gpa: "7.44/10",
        achievements: [
          "Social Welfare Activities",
          "Debate Activities",
          "Awarded for secured top position among 20 students in the University for Full Stack Web Development Projects & PPT Presentation.",
          "Awarded for secured top position among 15 students in the University Web Development Projects.",
        ],
      },
    ],

    skills: {
      technical: [
        { name: "Next.js", level: 95, category: "full Stack" },
        { name: "Node.js ", level: 92, category: "backend" },
        { name: "React", level: 88, category: "frontend" },
        { name: "TypeScript", level: 85, category: "frontend" },
        { name: "Express.js", level: 78, category: "backend" },
        { name: "MongoDB", level: 82, category: "database" },
        { name: "Git/Github", level: 75, category: "cloud" },
      ],
      soft: [
        "Leadership",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Communication",
      ],
    },

    projects: [
      {
        id: 1,
        name: "Frontend Developer ( Food Website Project )",
        description:
          "Frontend Development Project, A visually stunning and high-performance food platform built with JavaScript and Framer Motion, featuring smooth interactive sliders and a fully responsive modern UI.",
        technologies: [
          "HTML",
          "CSS",
          "javaScript",
          "Scroll-Trigger",
          "Framer Motion",
          "Swiper.JS"
        ],
        url: "https://food-seven-roan.vercel.app/",
        highlights: [
          "Handles 10K+ concurrent users",
          "99.9% uptime achieved",
          "Integrated better UI-UX Experiences",
          "Real-time eye catching visualizing",
        ],
      },
      {
        id: 2,
        name: "RadiAntiX Job Search",
        description:
          "Collaborative project management tool with real-time updates",
        technologies: ["React", "Node.js", "Redux Toolkit", "MongoDB", "Cloudinary"],
        url: "https://job-portal-project-q2jt.onrender.com/",
        highlights: [
          "Real-time collaboration",
          "Drag-and-drop interface",
          "File sharing capabilities",
          "Advanced reporting",
        ],
      },
    ],

    certifications: [
      {
        id: 1,
        name: "C & C++",
        issuer: "Excellence Academics Coaching Center",
        date: "2023",
        credentialId: "EAC-2023",
      },
      {
        id: 2,
        name: "Full Stack Development",
        issuer: "Apna College",
        date: "2025",
        credentialId: "AC-SK-2025",
      },
    ],

    languages: [
      { name: "Khortha & Nagpuri", level: "Native" },
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Hindi", level: "Basic Conversational" },
    ],
  },
};

/**
 * Utility functions for PDF handling
 */

// Check if PDF file exists
export const checkPDFExists = async (pdfPath) => {
  try {
    const response = await fetch(pdfPath, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    console.warn(`PDF not found: ${pdfPath}`);
    console.log(error);
    return false;
  }
};

// Get PDF metadata
export const getPDFInfo = (pdfDocument) => {
  return {
    numPages: pdfDocument.numPages,
    info: pdfDocument.getMetadata(),
    fingerprint: pdfDocument.fingerprint,
  };
};

// Extract text from PDF page
export const extractTextFromPage = async (page) => {
  try {
    const textContent = await page.getTextContent();
    return textContent.items.map((item) => item.str).join(" ");
  } catch (error) {
    console.error("Error extracting text from PDF page:", error);
    return "";
  }
};

// Format resume data for display
export const formatResumeSection = (sectionData, sectionType) => {
  switch (sectionType) {
    case "experience":
      return sectionData.map((exp) => ({
        ...exp,
        formattedDuration: exp.duration,
        formattedResponsibilities: exp.responsibilities.join("\n• "),
      }));

    case "skills":
      return {
        ...sectionData,
        categorized: sectionData.technical.reduce((acc, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {}),
      };

    case "projects":
      return sectionData.map((project) => ({
        ...project,
        formattedTech: project.technologies.join(" • "),
        formattedHighlights: project.highlights.join("\n• "),
      }));

    default:
      return sectionData;
  }
};

// Generate dynamic resume data based on PDF content
export const generateDynamicResume = (extractedText) => {
  // This would parse the extracted text and create structured data
  // For now, return the static data
  console.log(extractedText);
  return PDF_DATA.resume;
};

export default {
  PDF_CONFIG,
  PDF_DATA,
  checkPDFExists,
  getPDFInfo,
  extractTextFromPage,
  formatResumeSection,
  generateDynamicResume,
};
