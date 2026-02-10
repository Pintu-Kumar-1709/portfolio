import { useState, useEffect, useRef } from 'react'

function TypeWriter({ texts = [], speed = 100, delay = 1500, deleteDelay = 50 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const cursorRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Simple cursor blinking without heavy animation
    if (cursorRef.current) {
      const interval = setInterval(() => {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Mobile-optimized typing speed
    const typingSpeed = isMobile ? Math.max(speed, 80) : speed;
    const deletingSpeed = isMobile ? Math.max(deleteDelay, 40) : deleteDelay;
    
    const timer = setTimeout(() => {
      const currentText = texts[index];
      
      if (isDeleting) {
        // Deleting text
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        // When deletion is complete
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        // Typing text
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        // When typing is complete
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [texts, index, charIndex, isDeleting, speed, delay, deleteDelay, isMobile]);

  return (
    <span className="typewriter">
      {displayedText}
      <span 
        ref={cursorRef} 
        className="cursor ml-1 text-blue-400 font-light"
        style={{ opacity: 1 }}
      >
        |
      </span>
    </span>
  )
}

export default TypeWriter
