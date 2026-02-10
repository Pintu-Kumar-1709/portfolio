// /**
//  * Advanced PDF Data Extractor
//  * This utility extracts structured data from PDF files
//  * Currently uses mock data, but can be extended to parse actual PDFs
//  */

// import { pdfjs } from 'react-pdf'

// // Configuration for PDF text extraction
// const EXTRACTION_CONFIG = {
//   // Patterns to identify sections in PDF
//   SECTION_PATTERNS: {
//     personalInfo: /(?:personal\s+information|contact|profile)/i,
//     experience: /(?:experience|work\s+history|employment)/i,
//     education: /(?:education|academic|qualification)/i,
//     skills: /(?:skills|competencies|expertise)/i,
//     projects: /(?:projects|portfolio|work\s+samples)/i,
//     certifications: /(?:certifications?|certificates?|credentials?)/i
//   },
  
//   // Patterns to extract specific data
//   DATA_PATTERNS: {
//     email: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
//     phone: /(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g,
//     linkedin: /(?:linkedin\.com\/in\/)([\w-]+)/gi,
//     github: /(?:github\.com\/)([\w-]+)/gi,
//     dates: /(?:19|20)\d{2}(?:\s*[-–]\s*(?:19|20)\d{2}|\s*[-–]\s*(?:present|current))?/gi
//   }
// }

// /**
//  * Extract text from entire PDF document
//  */
// export const extractTextFromPDF = async (pdfFile) => {
//   try {
//     const pdf = await pdfjs.getDocument(pdfFile).promise
//     const textContent = []
    
//     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//       const page = await pdf.getPage(pageNum)
//       const textData = await page.getTextContent()
//       const pageText = textData.items.map(item => item.str).join(' ')
//       textContent.push({
//         page: pageNum,
//         text: pageText
//       })
//     }
    
//     return textContent
//   } catch (error) {
//     console.error('Error extracting text from PDF:', error)
//     return []
//   }
// }

// /**
//  * Parse extracted text into structured data
//  */
// export const parseResumeData = (textContent) => {
//   const fullText = textContent.map(page => page.text).join('\n')
  
//   // Extract basic information
//   const personalInfo = extractPersonalInfo(fullText)
//   const sections = identifySections(fullText)
//   const experience = extractExperience(sections.experience || '')
//   const education = extractEducation(sections.education || '')
//   const skills = extractSkills(sections.skills || '')
//   const projects = extractProjects(sections.projects || '')
//   const certifications = extractCertifications(sections.certifications || '')
  
//   return {
//     personalInfo,
//     experience,
//     education,
//     skills,
//     projects,
//     certifications,
//     rawText: fullText
//   }
// }

// /**
//  * Extract personal information
//  */
// const extractPersonalInfo = (text) => {
//   const safeText = typeof text === 'string' ? text : '';
//   const email = safeText.match(EXTRACTION_CONFIG.DATA_PATTERNS.email)?.[0] || '';
//   const phone = safeText.match(EXTRACTION_CONFIG.DATA_PATTERNS.phone)?.[0] || '';
//   const linkedin = safeText.match(EXTRACTION_CONFIG.DATA_PATTERNS.linkedin)?.[1] || '';
//   const github = safeText.match(EXTRACTION_CONFIG.DATA_PATTERNS.github)?.[1] || '';
//   // Extract name (usually in the first few lines)
//   const lines = safeText.split('\n').filter(line => line.trim().length > 0);
//   const name = lines[0] || 'Name not found';
//   return {
//     name,
//     email,
//     phone,
//     linkedin: linkedin ? `linkedin.com/in/${linkedin}` : '',
//     github: github ? `github.com/${github}` : '',
//     location: extractLocation(safeText)
//   };
// }

// /**
//  * Extract location information
//  */
// const extractLocation = (text) => {
//   // Simple location extraction - can be improved
//   const locationPatterns = [
//     /([A-Z][a-z\s]+,\s*[A-Z][a-z\s]+)/g, // City, State/Country
//     /([A-Z][a-z\s]+,\s*[A-Z]{2,3})/g     // City, State Abbreviation
//   ]
  
//   for (const pattern of locationPatterns) {
//     const match = text.match(pattern)
//     if (match) {
//       return match[0]
//     }
//   }
  
//   return 'Location not specified'
// }

// /**
//  * Identify different sections in the resume
//  */
// const identifySections = (text) => {
//   const sections = {}
//   const lines = text.split('\n')
//   let currentSection = 'general'
  
//   lines.forEach(line => {
//     const lineText = line.trim().toLowerCase()
    
//     // Check if this line is a section header
//     Object.entries(EXTRACTION_CONFIG.SECTION_PATTERNS).forEach(([sectionName, pattern]) => {
//       if (pattern.test(lineText)) {
//         currentSection = sectionName
//         sections[sectionName] = sections[sectionName] || []
//         return
//       }
//     })
    
//     // Add content to current section
//     if (line.trim().length > 0) {
//       sections[currentSection] = sections[currentSection] || []
//       sections[currentSection].push(line.trim())
//     }
//   })
  
//   // Convert arrays to strings
//   Object.keys(sections).forEach(key => {
//     sections[key] = sections[key].join('\n')
//   })
  
//   return sections
// }

// /**
//  * Extract work experience
//  */
// const extractExperience = (experienceText) => {
//   if (!experienceText) return []
  
//   const experiences = []
//   const entries = experienceText.split(/\n\s*\n/) // Split by blank lines
  
//   entries.forEach((entry, index) => {
//     const lines = entry.split('\n').filter(line => line.trim())
//     if (lines.length < 2) return
    
//     const title = lines[0] || `Position ${index + 1}`
//     const company = lines[1] || 'Company not specified'
//     const dates = extractDatesFromText(entry)
//     const responsibilities = lines.slice(2).filter(line => 
//       !EXTRACTION_CONFIG.DATA_PATTERNS.dates.test(line)
//     )
    
//     experiences.push({
//       id: index + 1,
//       title: cleanText(title),
//       company: cleanText(company),
//       duration: dates.join(' - ') || 'Dates not specified',
//       location: 'Location not specified',
//       responsibilities: responsibilities.map(resp => cleanText(resp)),
//       technologies: [] // Could be extracted with more sophisticated parsing
//     })
//   })
  
//   return experiences
// }

// /**
//  * Extract education information
//  */
// const extractEducation = (educationText) => {
//   if (!educationText) return []
  
//   const education = []
//   const entries = educationText.split(/\n\s*\n/)
  
//   entries.forEach((entry, index) => {
//     const lines = entry.split('\n').filter(line => line.trim())
//     if (lines.length < 2) return
    
//     education.push({
//       id: index + 1,
//       degree: cleanText(lines[0]),
//       institution: cleanText(lines[1]),
//       duration: extractDatesFromText(entry).join(' - ') || 'Dates not specified',
//       gpa: extractGPA(entry),
//       achievements: lines.slice(2).map(line => cleanText(line))
//     })
//   })
  
//   return education
// }

// /**
//  * Extract skills information
//  */
// const extractSkills = (skillsText) => {
//   if (!skillsText) return { technical: [], soft: [] }
  
//   // This is a simplified skill extraction
//   // In practice, you'd want more sophisticated parsing
//   const lines = skillsText.split('\n').filter(line => line.trim())
  
//   const technical = []
//   const soft = []
  
//   lines.forEach(line => {
//     const cleanLine = cleanText(line)
//     if (cleanLine.length > 3) {
//       // Simple heuristic: technical skills often have specific formats
//       if (/\b(?:java|python|react|javascript|html|css|sql|aws|docker)\b/i.test(cleanLine)) {
//         technical.push({
//           name: cleanLine,
//           level: 80, // Default level, could be extracted from context
//           category: 'general'
//         })
//       } else {
//         soft.push(cleanLine)
//       }
//     }
//   })
  
//   return { technical, soft }
// }

// /**
//  * Extract projects information
//  */
// const extractProjects = (projectsText) => {
//   if (!projectsText) return []
  
//   const projects = []
//   const entries = projectsText.split(/\n\s*\n/)
  
//   entries.forEach((entry, index) => {
//     const lines = entry.split('\n').filter(line => line.trim())
//     if (lines.length < 2) return
    
//     projects.push({
//       id: index + 1,
//       name: cleanText(lines[0]),
//       description: cleanText(lines[1]) || 'No description provided',
//       technologies: extractTechnologies(entry),
//       url: extractURL(entry) || '#',
//       highlights: lines.slice(2).map(line => cleanText(line))
//     })
//   })
  
//   return projects
// }

// /**
//  * Extract certifications
//  */
// const extractCertifications = (certificationsText) => {
//   if (!certificationsText) return []
  
//   const certifications = []
//   const entries = certificationsText.split(/\n\s*\n/)
  
//   entries.forEach((entry, index) => {
//     const lines = entry.split('\n').filter(line => line.trim())
//     if (lines.length < 1) return
    
//     certifications.push({
//       id: index + 1,
//       name: cleanText(lines[0]),
//       issuer: cleanText(lines[1]) || 'Issuer not specified',
//       date: extractDatesFromText(entry)[0] || 'Date not specified',
//       credentialId: extractCredentialId(entry) || 'N/A'
//     })
//   })
  
//   return certifications
// }

// /**
//  * Helper functions
//  */

// const extractDatesFromText = (text) => {
//   const matches = text.match(EXTRACTION_CONFIG.DATA_PATTERNS.dates) || []
//   return matches.map(date => date.trim())
// }

// const extractGPA = (text) => {
//   const gpaMatch = text.match(/gpa:?\s*([0-9.]+)/i)
//   return gpaMatch ? gpaMatch[1] : 'N/A'
// }

// const extractURL = (text) => {
//   const urlMatch = text.match(/(https?:\/\/[^\s]+)/i)
//   return urlMatch ? urlMatch[1] : null
// }

// const extractCredentialId = (text) => {
//   const credMatch = text.match(/(?:credential|id|certificate)\s*:?\s*([a-zA-Z0-9-]+)/i)
//   return credMatch ? credMatch[1] : null
// }

// const extractTechnologies = (text) => {
//   // Simple tech extraction - could be much more sophisticated
//   const techKeywords = [
//     'java', 'javascript', 'python', 'react', 'angular', 'vue', 'node',
//     'spring', 'express', 'django', 'flask', 'mongodb', 'postgresql',
//     'mysql', 'redis', 'docker', 'kubernetes', 'aws', 'azure', 'gcp'
//   ]
  
//   const technologies = []
//   const lowerText = text.toLowerCase()
  
//   techKeywords.forEach(tech => {
//     if (lowerText.includes(tech)) {
//       technologies.push(tech.charAt(0).toUpperCase() + tech.slice(1))
//     }
//   })
  
//   return [...new Set(technologies)] // Remove duplicates
// }

// const cleanText = (text) => {
//   return text.replace(/[•\-*]\s*/, '').trim()
// }

// /**
//  * Main extraction function
//  */
// export const extractResumeFromPDF = async (pdfFile) => {
//   try {
//     console.log('Starting PDF extraction...')
//     const textContent = await extractTextFromPDF(pdfFile)
    
//     if (textContent.length === 0) {
//       throw new Error('No text content extracted from PDF')
//     }
    
//     console.log('Parsing extracted text...')
//     const resumeData = parseResumeData(textContent)
    
//     console.log('PDF extraction completed successfully')
//     return {
//       success: true,
//       data: resumeData,
//       pages: textContent.length
//     }
//   } catch (error) {
//     console.error('PDF extraction failed:', error)
//     return {
//       success: false,
//       error: error.message,
//       data: null
//     }
//   }
// }

// // Export utility functions for external use
// export {
//   extractPersonalInfo,
//   extractExperience,
//   extractEducation,
//   extractSkills,
//   extractProjects,
//   extractCertifications
// }
