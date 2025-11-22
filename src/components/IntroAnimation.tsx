import { useEffect, useState } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [visible, setVisible] = useState(true);

  // Total duration of intro (ms)
  const INTRO_DURATION = 3200;

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
      <div className="nf-intro-overlay">
        <div className="nf-word-wrapper">
          <div className="nf-word">
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>U</span>
            <span>M</span>
            <span>E</span>
          </div>
        </div>
      </div>

      <style>{`
        .nf-intro-overlay {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
          animation: nf-overlay-fade 0.6s ease-out forwards;
          animation-delay: 2.6s; /* fade near the end */
        }

        .nf-word-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          animation: nf-zoom 2.2s ease-in-out forwards;
          animation-delay: 0.4s;
        }

        .nf-word {
          position: relative;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 900;
          font-size: clamp(2.8rem, 8vw, 5rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #e50914; /* Netflix red-ish */
          display: inline-flex;
          text-shadow:
            0 0 20px rgba(229, 9, 20, 0.9),
            0 0 36px rgba(229, 9, 20, 0.75),
            0 0 60px rgba(229, 9, 20, 0.5),
            0 14px 36px rgba(0, 0, 0, 0.95);
        }

        .nf-word::before {
          /* soft radial glow behind text */
          content: "";
          position: absolute;
          inset: 25%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(229, 9, 20, 0.5), transparent 70%);
          filter: blur(14px);
          z-index: -1;
        }

        .nf-word span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: nf-letter-in 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .nf-word span:nth-child(1) { animation-delay: 0.45s; }
        .nf-word span:nth-child(2) { animation-delay: 0.53s; }
        .nf-word span:nth-child(3) { animation-delay: 0.61s; }
        .nf-word span:nth-child(4) { animation-delay: 0.69s; }
        .nf-word span:nth-child(5) { animation-delay: 0.77s; }
        .nf-word span:nth-child(6) { animation-delay: 0.85s; }

        @keyframes nf-letter-in {
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

        @keyframes nf-zoom {
          0% {
            transform: scale(1) translateY(8px);
            filter: brightness(0.4);
          }
          40% {
            transform: scale(1.25) translateY(0);
            filter: brightness(1.6);
          }
          70% {
            transform: scale(0.97) translateY(0);
            filter: brightness(1.2);
          }
          100% {
            transform: scale(1) translateY(0);
            filter: brightness(1);
          }
        }

        @keyframes nf-overlay-fade {
          from { opacity: 1; }
          to   { opacity: 0; visibility: hidden; }
        }

        @media (max-width: 640px) {
          .nf-word {
            letter-spacing: 0.2em;
          }
        }
      `}</style>
    </div>
  );
};
