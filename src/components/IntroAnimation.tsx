import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500); // Total duration: 3.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="intro-overlay" aria-label="Portfolio intro animation">
      {/* Light ribbons */}
      <div className="light-ribbon ribbon-1"></div>
      <div className="light-ribbon ribbon-2"></div>
      <div className="light-ribbon ribbon-3"></div>
      <div className="light-ribbon ribbon-4"></div>
      <div className="light-ribbon ribbon-5"></div>

      {/* RESUME logo */}
      <h1 className="resume-logo">
        <span>R</span>
        <span>E</span>
        <span>S</span>
        <span>U</span>
        <span>M</span>
        <span>E</span>
      </h1>

      <style jsx>{`
        .intro-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at center, #000 0%, #111 50%, #000 100%);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: fadeOut 0.5s ease-out 3s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .light-ribbon {
          position: absolute;
          width: 150%;
          height: 8px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(229, 9, 20, 0.8) 20%,
            rgba(229, 9, 20, 1) 50%,
            rgba(138, 43, 226, 0.6) 70%, /* Subtle purple accent */
            rgba(0, 191, 255, 0.4) 90%, /* Subtle blue accent */
            transparent 100%
          );
          filter: blur(2px);
          opacity: 0;
          transform: translateX(-100%) rotate(-10deg);
          animation: sweep 1.5s ease-in-out forwards;
        }

        .ribbon-1 { top: 30%; animation-delay: 0.2s; }
        .ribbon-2 { top: 40%; animation-delay: 0.4s; transform: translateX(-100%) rotate(-5deg); }
        .ribbon-3 { top: 50%; animation-delay: 0.6s; transform: translateX(-100%) rotate(0deg); }
        .ribbon-4 { top: 60%; animation-delay: 0.8s; transform: translateX(-100%) rotate(5deg); }
        .ribbon-5 { top: 70%; animation-delay: 1s; transform: translateX(-100%) rotate(10deg); }

        @keyframes sweep {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotate(var(--rotation, 0deg));
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100%) rotate(var(--rotation, 0deg));
          }
        }

        .resume-logo {
          font-family: Arial, sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          text-transform: uppercase;
          color: #e50914;
          text-shadow:
            2px 2px 0px rgba(0, 0, 0, 0.8), /* 3D depth */
            0 0 10px rgba(229, 9, 20, 0.8), /* Glow */
            0 0 20px rgba(229, 9, 20, 0.6),
            0 4px 8px rgba(0, 0, 0, 0.9); /* Shadow */
          letter-spacing: 0.2em;
          opacity: 0;
          transform: scale(0.8);
          animation: logoReveal 1s ease-out 1.5s forwards;
        }

        .resume-logo span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.5s ease-out forwards;
        }

        .resume-logo span:nth-child(1) { animation-delay: 1.6s; }
        .resume-logo span:nth-child(2) { animation-delay: 1.7s; }
        .resume-logo span:nth-child(3) { animation-delay: 1.8s; }
        .resume-logo span:nth-child(4) { animation-delay: 1.9s; }
        .resume-logo span:nth-child(5) { animation-delay: 2s; }
        .resume-logo span:nth-child(6) { animation-delay: 2.1s; }

        @keyframes logoReveal {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes letterReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .light-ribbon {
            height: 6px;
          }
          .resume-logo {
            font-size: clamp(2.5rem, 10vw, 5rem);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .light-ribbon, .resume-logo, .resume-logo span {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .intro-overlay {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;

