import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const IntroOverlay = ({ onComplete }) => {
  const introRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const fadeOut = () => {
    const tl = gsap.timeline({ onComplete });

    // Button fade out
    tl.to(buttonRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
    });

    // Text slide up
    tl.to(
      textRefs.current,
      {
        y: "-100%",
        duration: 1,
        stagger: 0.1,
      },
      "-=0.5",
    );

    // First slider
    tl.to(
      slider1Ref.current,
      {
        y: "-100%",
        duration: 2,
        ease: "expo.inOut",
      },
      "+=1",
    );

    // Second slider
    tl.to(
      slider2Ref.current,
      {
        y: "-100%",
        duration: 2,
        ease: "expo.inOut",
      },
      "-=1.5",
    );

    // Hide intro
    tl.set(introRef.current, {
      display: "none",
    });
  };

  useEffect(() => {
    // Initial animations
    gsap.set(textRefs.current, { y: "100%" });
    gsap.set([slider1Ref.current, slider2Ref.current], { y: "100%" });

    // Animate text in
    gsap.to(textRefs.current, {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5,
    });

    // Animate button in
    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 bg-slate-900 dark:bg-black flex items-center justify-center flex-col z-1000"
    >
      {/* Intro Text */}
      <div className="text-center text-slate-600 dark:text-slate-300 font-light text-2xl md:text-4xl mb-8">
        <h2 className="overflow-hidden mb-2">
          <span ref={addToTextRefs} className="inline-block">
            Creating innovations
          </span>
        </h2>
        <h2 className="overflow-hidden mb-2">
          <span ref={addToTextRefs} className="inline-block">
            For Everyday
          </span>
        </h2>
        <h2 className="overflow-hidden mb-2">
          <span ref={addToTextRefs} className="inline-block">
            developers.
          </span>
        </h2>
      </div>

      {/* Explore Button */}
      <button
        ref={buttonRef}
        onClick={fadeOut}
        className="intro-btn px-6 py-4 font-bold text-xs tracking-[6px] text-white border border-white bg-transparent hover:text-slate-900 hover:bg-white transition-all duration-300 opacity-0 translate-y-8 relative overflow-hidden group"
      >
        <span className="relative z-10">EXPLORE</span>
        <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      </button>

      {/* Animated Sliders */}
      <div
        ref={slider1Ref}
        className="fixed inset-0 bg-linear-to-r from-emerald-400 to-teal-400 translate-y-full"
      ></div>
      <div
        ref={slider2Ref}
        className="fixed inset-0 bg-linear-to-r from-purple-500 to-violet-500 translate-y-full"
      ></div>
    </div>
  );
};

export default IntroOverlay;
