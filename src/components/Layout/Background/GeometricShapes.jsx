import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const GeometricShapes = () => {
  const shapesRef = useRef([])

  const addToShapesRefs = (el) => {
    if (el && !shapesRef.current.includes(el)) {
      shapesRef.current.push(el)
    }
  }

  useEffect(() => {
    const shapes = shapesRef.current

    // Animate shapes
    shapes.forEach((shape, index) => {
      // Initial random position and rotation
      gsap.set(shape, {
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5
      })

      // Continuous animations
      gsap.to(shape, {
        rotation: '+=360',
        duration: 10 + index * 5,
        repeat: -1,
        ease: 'none'
      })

      // Floating animation
      gsap.to(shape, {
        y: '+=20',
        duration: 3 + index,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      })

      // Pulse animation
      gsap.to(shape, {
        scale: '+=0.2',
        duration: 4 + index * 0.5,
        yoyo: true,
        repeat: -1,
        ease: 'power2.inOut'
      })
    })
  }, [])

  return (
    <div className="geometric-shapes fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Purple Square */}
      <div
        ref={addToShapesRefs}
        className="absolute w-5 h-5 border-2 border-purple-500 right-[10%] bottom-[10%]"
      />

      {/* Pink Dots Grid */}
      <div
        ref={addToShapesRefs}
        className="absolute left-[3%] bottom-[20%] w-10 flex flex-wrap justify-between"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-pink-400 rounded-full mb-2 mr-1"
          />
        ))}
      </div>

      {/* Teal Triangle */}
      <div
        ref={addToShapesRefs}
        className="absolute left-[30%] top-[10%]"
        style={{
          width: 0,
          height: 0,
          borderTop: '25px solid transparent',
          borderLeft: '25px solid #14b8a6',
          borderBottom: '25px solid transparent'
        }}
      />

      {/* Blue Circle */}
      <div
        ref={addToShapesRefs}
        className="absolute right-[20%] top-[15%] w-8 h-8 rounded-full border-2 border-blue-400"
      />

      {/* Green Diamond */}
      <div
        ref={addToShapesRefs}
        className="absolute left-[70%] bottom-[30%] w-6 h-6 bg-emerald-400 transform rotate-45"
      />

      {/* Indigo Hexagon */}
      <div
        ref={addToShapesRefs}
        className="absolute right-[5%] top-[40%] w-8 h-8"
        style={{
          background: '#6366f1',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
        }}
      />

      {/* Orange Line */}
      <div
        ref={addToShapesRefs}
        className="absolute left-[15%] top-[60%] w-12 h-0.5 bg-orange-400 transform rotate-12"
      />

      {/* Violet Cross */}
      <div
        ref={addToShapesRefs}
        className="absolute right-[40%] bottom-[15%]"
      >
        <div className="w-6 h-1 bg-violet-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-1 h-6 bg-violet-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}

export default GeometricShapes
