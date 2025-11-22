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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden intro-overlay animate-fade-out"
        style={{ animationDelay: "4.5s" }} // fade out near the end
      >
        {/* Light trails (Netflix-style ribbons) */}
        <div className="light-trail trail-1" />
        <div className="light-trail trail-2" />
        <div className="light-trail trail-3" />

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
        /* Background / vignette */
        .intro-overlay {
          background: radial-gradient(circle at top, #202020 0, #000 55%, #000 100%);
        }

        .intro-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, transparent 40%, #000 100%);
          opacity: 0.75;
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
            rgba(255, 0, 80, 0.1) 10%,
            rgba(255, 0, 80, 0.8) 40%,
            rgba(255, 70, 0, 0.9) 60%,
            rgba(255, 255, 255, 0.8) 75%,
            rgba(255, 0, 120, 0.4) 90%,
            rgba(0, 0, 0, 0) 100%
          );
          filter: blur(2px);
          opacity: 0;
          transform-origin: center;
          mix-blend-mode: screen;
          animation: sweep 2s ease-in-out forwards;
        }

        .trail-1 {
          top: 38%;
          transform: rotate(-12deg);
        }

        .trail-2 {
          top: 50%;
          transform: rotate(-4deg);
          animation-delay: 0.12s;
          filter: blur(3px);
        }

        .trail-3 {
          top: 62%;
          transform: rotate(6deg);
          animation-delay: 0.24s;
          filter: blur(4px);
        }

        @keyframes sweep {
          0% {
            transform: translateX(-40%) translateY(0) scaleX(1.1);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(40%) translateY(0) scaleX(1.1);
            opacity: 0;
          }
        }

        /* Glow behind logo */
        .logo-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 0, 80, 0.35), transparent 60%);
          opacity: 0;
          filter: blur(10px);
          animation: glowIn 1.3s ease-out forwards;
          animation-delay: 1.1s;
          pointer-events: none;
        }

        @keyframes glowIn {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        /* RESUME logo */
        .resume-logo {
          position: relative;
          z-index: 2;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          font-weight: 800;
          color: #ffffff;
          opacity: 0;
          transform: scale(1.08) translateY(8px);
          text-align: center;
          text-shadow: 
            0 0 20px rgba(229, 9, 20, 0.8),
            0 0 40px rgba(229, 9, 20, 0.6),
            0 0 60px rgba(229, 9, 20, 0.4),
            0 10px 30px rgba(0, 0, 0, 0.9);
          animation: logoReveal 1.4s cubic-bezier(0.87, 0, 0.13, 1) forwards;
          animation-delay: 1.3s;
        }

        .resume-logo span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterUp 0.7s ease-out forwards;
        }

        .resume-logo span:nth-child(1) { animation-delay: 1.35s; }
        .resume-logo span:nth-child(2) { animation-delay: 1.42s; }
        .resume-logo span:nth-child(3) { animation-delay: 1.49s; }
        .resume-logo span:nth-child(4) { animation-delay: 1.56s; }
        .resume-logo span:nth-child(5) { animation-delay: 1.63s; }
        .resume-logo span:nth-child(6) { animation-delay: 1.70s; }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.3);
            filter: brightness(0.5);
          }
          20% {
            opacity: 0;
            transform: scale(0.3);
            filter: brightness(0.5);
          }
          40% {
            opacity: 1;
            transform: scale(1.15);
            filter: brightness(1.6);
          }
          60% {
            opacity: 1;
            transform: scale(0.95);
            filter: brightness(1.2);
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
            transform: translateY(26px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade out for the whole overlay */
        .animate-fade-out {
          animation-name: fadeOut;
          animation-duration: 0.5s;
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
      `}</style>
    </div>
  );
};

