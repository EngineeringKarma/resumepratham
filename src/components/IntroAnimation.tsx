import { useEffect, useState } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [visible, setVisible] = useState(true);

  // Total duration of intro (ms)
  const INTRO_DURATION = 2600;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, INTRO_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="resume-intro">
        <div className="resume-intro-text">
          <span>R</span>
          <span>E</span>
          <span>S</span>
          <span>U</span>
          <span>M</span>
          <span>E</span>
        </div>
      </div>

      <style>{`
        .resume-intro {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          animation: intro-overlay-fade 2.6s ease-out forwards;
        }

        .resume-intro-text {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 8vw, 5rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #ffffff;
          display: inline-flex;
          position: relative;
        }

        .resume-intro-text::after {
          /* soft glow behind the word */
          content: "";
          position: absolute;
          inset: 30%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 70%);
          filter: blur(12px);
          z-index: -1;
        }

        .resume-intro-text span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: letter-in 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .resume-intro-text span:nth-child(1) { animation-delay: 0.1s; }
        .resume-intro-text span:nth-child(2) { animation-delay: 0.18s; }
        .resume-intro-text span:nth-child(3) { animation-delay: 0.26s; }
        .resume-intro-text span:nth-child(4) { animation-delay: 0.34s; }
        .resume-intro-text span:nth-child(5) { animation-delay: 0.42s; }
        .resume-intro-text span:nth-child(6) { animation-delay: 0.5s; }

        @keyframes letter-in {
          0% {
            opacity: 0;
            transform: translateY(26px) scale(0.9);
            filter: blur(6px);
          }
          60% {
            opacity: 1;
            transform: translateY(0) scale(1.05);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes intro-overlay-fade {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        @media (max-width: 640px) {
          .resume-intro-text {
            letter-spacing: 0.2em;
          }
        }
      `}</style>
    </div>
  );
};
