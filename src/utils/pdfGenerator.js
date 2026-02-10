// /**
//  * PDF File Generation Script
//  *
//  * Since we cannot create binary files directly, here are the instructions
//  * to create your PDF file manually:
//  *
//  * Method 1: Use the sample content provided
//  * Method 2: Download a sample PDF from online
//  * Method 3: Create your own PDF using any PDF creator
//  */

// // Sample PDF content that you can convert to PDF
// export const SAMPLE_RESUME_CONTENT = `
// NGUYEN TRAN GIA SI
// Full-Stack Developer

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// CONTACT INFORMATION
// 📧 Email: giasi@example.com
// 📱 Phone: +84 123 456 789
// 🔗 LinkedIn: linkedin.com/in/giasinguyen
// 💻 GitHub: github.com/giasinguyen
// 📍 Location: Ho Chi Minh City, Vietnam

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// PROFESSIONAL SUMMARY

// Passionate Full-Stack Developer with 3+ years of expertise in Java ecosystem, React, 
// and modern web technologies. Experienced in building scalable applications with Spring Boot, 
// microservices architecture, and cloud deployment. Strong background in both frontend and 
// backend development with a focus on clean code and best practices.

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// WORK EXPERIENCE

// 🏢 SENIOR FULL-STACK DEVELOPER
// Tech Innovation Co. | March 2023 - Present | Ho Chi Minh City, Vietnam

// • Led development of microservices architecture using Spring Boot and React
// • Implemented CI/CD pipelines reducing deployment time by 70%
// • Mentored 3 junior developers and conducted regular code reviews
// • Architected scalable solutions serving 100,000+ daily active users
// • Collaborated with cross-functional teams to deliver features on time

// Technologies: Java 17, Spring Boot, React, PostgreSQL, Docker, AWS, Jenkins

// 🏢 FRONTEND DEVELOPER
// Digital Solutions Ltd. | June 2021 - February 2023 | Ho Chi Minh City, Vietnam

// • Developed responsive web applications using React and TypeScript
// • Improved application performance by 40% through code optimization
// • Collaborated with UI/UX team to implement pixel-perfect designs
// • Integrated RESTful APIs and implemented efficient state management
// • Participated in agile development processes and sprint planning

// Technologies: React, TypeScript, Redux, TailwindCSS, Jest, Webpack

// 🏢 JUNIOR DEVELOPER
// StartupXYZ | January 2021 - May 2021 | Ho Chi Minh City, Vietnam

// • Contributed to full-stack development using MERN stack
// • Fixed bugs and implemented new features based on user feedback
// • Participated in daily standups and sprint retrospectives
// • Learned best practices for version control and collaborative development

// Technologies: MongoDB, Express.js, React, Node.js, JavaScript

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// EDUCATION

// 🎓 BACHELOR OF COMPUTER SCIENCE
// University of Technology | September 2018 - June 2022
// GPA: 3.8/4.0 | Ho Chi Minh City, Vietnam

// Achievements:
// • Graduated Magna Cum Laude
// • Best Final Year Project Award - "E-commerce Platform with AI Recommendations"
// • Dean's List for 6 consecutive semesters
// • Active member of Programming Club and Computer Science Society

// Relevant Coursework:
// • Data Structures and Algorithms
// • Database Management Systems
// • Software Engineering
// • Web Development
// • Computer Networks
// • Machine Learning Fundamentals

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// TECHNICAL SKILLS

// 💻 BACKEND DEVELOPMENT
// • Java (95%) - Spring Boot, Spring Security, JPA/Hibernate
// • Database (90%) - PostgreSQL, MongoDB, Redis
// • API Development (92%) - REST, GraphQL, Microservices

// 🎨 FRONTEND DEVELOPMENT  
// • React (88%) - Hooks, Context API, Redux
// • JavaScript/TypeScript (90%) - ES6+, Modern JS
// • CSS Frameworks (92%) - TailwindCSS, Bootstrap, Styled Components

// ☁️ DEVOPS & TOOLS
// • Cloud Platforms (75%) - AWS, Docker, Kubernetes
// • Version Control (95%) - Git, GitHub, GitLab
// • CI/CD (80%) - Jenkins, GitHub Actions, Docker

// 🛠️ SOFT SKILLS
// • Leadership & Team Management
// • Problem Solving & Critical Thinking
// • Effective Communication
// • Project Management
// • Mentoring & Knowledge Sharing

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// FEATURED PROJECTS

// 🚀 E-COMMERCE PLATFORM
// Full-stack e-commerce solution with microservices architecture

// Key Features:
// • Handles 10,000+ concurrent users with 99.9% uptime
// • Integrated payment gateway (Stripe, PayPal)
// • Real-time inventory management system
// • Advanced search and filtering capabilities
// • Admin dashboard with analytics and reporting

// Technologies: Java, Spring Boot, React, PostgreSQL, Redis, Docker, AWS
// GitHub: github.com/giasinguyen/ecommerce-platform

// 🚀 TASK MANAGEMENT SYSTEM
// Collaborative project management tool with real-time updates

// Key Features:
// • Real-time collaboration using WebSocket
// • Drag-and-drop Kanban interface
// • File sharing and commenting system
// • Advanced reporting and analytics
// • Team management and role-based permissions

// Technologies: React, Node.js, Socket.io, MongoDB, Express.js
// GitHub: github.com/giasinguyen/task-manager

// 🚀 PERSONAL PORTFOLIO
// Modern portfolio website with 3D elements and animations

// Key Features:
// • Interactive 3D background using Three.js
// • Dark/Light mode with smooth transitions
// • Blog system with markdown support
// • PDF integration for resume viewing
// • Responsive design for all devices

// Technologies: React, Three.js, TailwindCSS, Vite, GSAP
// GitHub: github.com/giasinguyen/giasi-dev-portfolio

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// CERTIFICATIONS

// 🏆 AWS CERTIFIED DEVELOPER - ASSOCIATE
// Amazon Web Services | Issued: March 2023
// Credential ID: AWS-DEV-2023-001
// Skills: AWS Lambda, EC2, S3, RDS, CloudFormation

// 🏆 ORACLE CERTIFIED PROFESSIONAL, JAVA SE DEVELOPER  
// Oracle | Issued: September 2022
// Credential ID: OCP-JAVA-2022-001
// Skills: Java SE, OOP, Collections, Streams, Concurrency

// 🏆 REACT DEVELOPER CERTIFICATION
// Meta (Facebook) | Issued: January 2023
// Skills: React Hooks, State Management, Performance Optimization

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// LANGUAGES

// 🌐 Vietnamese: Native
// 🌐 English: Professional Working Proficiency (IELTS 7.0)
// 🌐 Japanese: Basic Conversational (JLPT N4)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// INTERESTS & ACTIVITIES

// • Open Source Contributor - Contributing to React and Spring Boot communities
// • Technical Blog Writer - Writing about web development on Dev.to and Medium
// • Photography & Videography - Creating content for tech tutorials
// • Gaming & Game Development - Hobby game development using Unity
// • Traveling & Cultural Exchange - Exploring new cultures and technologies

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// REFERENCES

// Available upon request

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Generated by GiaSi Dev Portfolio - Professional Resume Template
// Visit: https://giasi-dev-portfolio.com | Contact: giasi@example.com
// `;

// // Function to download the sample content as text file
// export const downloadSampleResume = () => {
//   const blob = new Blob([SAMPLE_RESUME_CONTENT], {
//     type: "text/plain;charset=utf-8",
//   });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "GiaSi_Resume_Sample.txt";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   URL.revokeObjectURL(url);
// };

// // Instructions for creating the PDF
// export const PDF_CREATION_INSTRUCTIONS = [
//   {
//     step: 1,
//     title: "Download Sample Content",
//     description: "Download the sample resume content as a text file",
//     action: "Click the download button to get the sample text file",
//   },
//   {
//     step: 2,
//     title: "Convert to PDF",
//     description: "Use any of these online tools to convert the text to PDF:",
//     options: [
//       {
//         name: "SmallPDF",
//         url: "https://smallpdf.com/txt-to-pdf",
//         description: "Simple and clean converter",
//       },
//       {
//         name: "ILovePDF",
//         url: "https://www.ilovepdf.com/txt_to_pdf",
//         description: "Professional PDF tools",
//       },
//       {
//         name: "PDF24",
//         url: "https://tools.pdf24.org/en/txt-to-pdf",
//         description: "Free online converter",
//       },
//       {
//         name: "ConvertIO",
//         url: "https://convertio.co/txt-pdf/",
//         description: "Advanced conversion options",
//       },
//     ],
//   },
//   {
//     step: 3,
//     title: "Customize Your PDF",
//     description: "Before converting, you can:",
//     actions: [
//       "Update personal information with your details",
//       "Add or modify work experience sections",
//       "Update skills and certifications",
//       "Add your actual contact information",
//       "Customize the design and formatting",
//     ],
//   },
//   {
//     step: 4,
//     title: "Save as GiaSi_Resume.pdf",
//     description: "Save the generated PDF with the exact filename",
//     important: "File must be named exactly: GiaSi_Resume.pdf",
//   },
//   {
//     step: 5,
//     title: "Place in Public Folder",
//     description: "Move the PDF to the correct location",
//     path: "public/documents/GiaSi_Resume.pdf",
//     note: "This path is required for the PDF viewer to work correctly",
//   },
// ];
