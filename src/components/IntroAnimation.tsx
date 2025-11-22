import { useEffect, useState } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 5000); // total intro duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" aria-label="Resume intro animation">
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden intro-overlay animate-fade-out"
        style={{ animationDelay: "4.5s" }} // fade out near the end
      >
        {/* Starfield background for resume theme */}
        <div className="starfield" />

        {/* Light trails (enhanced Netflix-style ribbons) */}
        <div className="light-trail trail-1" />
        <div className="light-trail trail-2" />
        <div className="light-trail trail-3" />
        <div className="light-trail trail-4" />
        <div className="light-trail trail-5" />

        {/* Floating particles */}
        <div className="particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="particle" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>

        {/* Glow behind the logo */}
        <div className="logo-glow" />

        {/* RESUME logo, animated letter by letter */}
        <h1 className="resume-logo">
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>U</span>
          <span>M</span>
          <span>E</span>
        </h1>
      </div>

      <style>{`
        /* Background / vignette with starfield */
        .intro-overlay {
          background: radial-gradient(circle at top, #1a1a2e 0, #000 55%, #000 100%);
        }

        .intro-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, transparent 40%, #000 100%);
          opacity: 0.75;
        }

        .starfield {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
                            radial-gradient(1px 1px at 90px 40px, #bbb, transparent),
                            radial-gradient(1px 1px at 130px 80px, #ddd, transparent),
                            radial-gradient(2px 2px at 160px 30px, #aaa, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* Light trails */
        .light-trail {
          position: absolute;
          width: 140%;
          height: 16%;
          left: -20%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(220, 20, 60, 0.1) 10%,
            rgba(255, 20, 80, 0.8) 40%,
            rgba(255, 70, 20, 0.9) 60%,
            rgba(255, 255, 255, 0.8) 75%,
            rgba(255, 20, 120, 0.4) 90%,
            rgba(0, 0, 0, 0) 100%
          );
          filter: blur(2px);
          opacity: 0;
          transform-origin: center;
          mix-blend-mode: screen;
          animation: sweep 2.5s ease-in-out forwards;
        }

        .trail-1 {
          top: 35%;
          transform: rotate(-15deg);
        }

        .trail-2 {
          top: 45%;
          transform: rotate(-6deg);
          animation-delay: 0.15s;
          filter: blur(3px);
        }

        .trail-3 {
          top: 55%;
          transform: rotate(0deg);
          animation-delay: 0.3s;
          filter: blur(2px);
        }

        .trail-4 {
          top: 65%;
          transform: rotate(6deg);
          animation-delay: 0.45s;
          filter: blur(4px);
        }

        .trail-5 {
          top: 75%;
          transform: rotate(12deg);
          animation-delay: 0.6s;
          filter: blur(3px);
        }

        @keyframes sweep {
          0% {
            transform: translateX(-50%) translateY(0) scaleX(1.2);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(50%) translateY(0) scaleX(1.2);
            opacity: 0;
          }
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 20, 80, 0.6);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
          top: 50%;
          left: 50%;
        }

        @keyframes float {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }

        /* Glow behind logo */
        .logo-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 20, 80, 0.4), transparent 70%);
          opacity: 0;
          filter: blur(15px);
          animation: glowIn 1.5s ease-out forwards;
          animation-delay: 1.2s;
          pointer-events: none;
        }

        @keyframes glowIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        /* RESUME logo */
        .resume-logo {
          position: relative;
          z-index: 2;
          font-size: clamp(3rem, 7vw, 5rem);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          font-weight: 900;
          color: #ffffff;
          opacity: 0;
          transform: scale(1.1) translateY(10px);
          text-align: center;
          text-shadow: 
            0 0 25px rgba(220, 20, 60, 0.9),
            0 0 50px rgba(220, 20, 60, 0.7),
            0 0 75px rgba(220, 20, 60, 0.5),
            0 12px 35px rgba(0, 0, 0, 0.9);
          animation: logoReveal 1.6s cubic-bezier(0.87, 0, 0.13, 1) forwards;
          animation-delay: 1.4s;
        }

        .resume-logo span {
          display: inline-block;
          opacity: 0;
          transform: translateY(25px);
          animation: letterUp 0.8s ease-out forwards;
        }

        .resume-logo span:nth-child(1) { animation-delay: 1.45s; }
        .resume-logo span:nth-child(2) { animation-delay: 1.53s; }
        .resume-logo span:nth-child(3) { animation-delay: 1.61s; }
        .resume-logo span:nth-child(4) { animation-delay: 1.69s; }
        .resume-logo span:nth-child(5) { animation-delay: 1.77s; }
        .resume-logo span:nth-child(6) { animation-delay: 1.85s; }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.2);
            filter: brightness(0.4);
          }
          20% {
            opacity: 0;
            transform: scale(0.2);
            filter: brightness(0.4);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
            filter: brightness(1.7);
          }
          60% {
            opacity: 1;
            transform: scale(0.95);
            filter: brightness(1.3);
          }
          80% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
        }

        @keyframes letterUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade out for the whole overlay */
        .animate-fade-out {
          animation-name: fadeOut;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Media queries for responsiveness */
        @media (max-width: 768px) {
          .light-trail {
            height: 12%;
          }
          .logo-glow {
            width: 250px;
            height: 250px;
          }
          .resume-logo {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .light-trail, .logo-glow, .resume-logo span, .particles, .starfield {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

