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
    }, 3500); // total intro time

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="nf-intro">
        <div className="nf-letter-wrapper">
          <span className="nf-letter">R</span>
          {/* diagonal light / shadow for “Netflix vibe” */}
          <div className="nf-diagonal" />
          <div className="nf-glow" />
        </div>
      </div>

      <style>{`
        .nf-intro {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
        }

        .nf-letter-wrapper {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          animation: nf-zoom-in 2.8s ease-in forwards;
          animation-delay: 0.3s;
        }

        .nf-letter {
          position: relative;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 900;
          font-size: 220px;
          line-height: 1;
          color: #e50914;
          text-shadow:
            0 0 24px rgba(229, 9, 20, 0.9),
            0 0 44px rgba(229, 9, 20, 0.75),
            0 0 64px rgba(229, 9, 20, 0.55),
            0 14px 36px rgba(0, 0, 0, 0.95);
          z-index: 2;
        }

        /* Diagonal overlay to mimic Netflix’s beveled look */
        .nf-diagonal {
          position: absolute;
          inset: 0;
          transform-origin: top right;
          transform: skewX(-18deg) translateX(8%);
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.8)
          );
          mix-blend-mode: multiply;
          z-index: 3;
          pointer-events: none;
        }

        /* Soft radial glow behind the R */
        .nf-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(229, 9, 20, 0.55), transparent 60%);
          filter: blur(10px);
          opacity: 0;
          animation: nf-glow-in 1.8s ease-out forwards;
          animation-delay: 0.6s;
          z-index: 1;
        }

        @keyframes nf-zoom-in {
          0% {
            transform: scale(1) translateY(10px);
            opacity: 0;
            filter: brightness(0.4);
          }
          30% {
            transform: scale(1.3) translateY(0);
            opacity: 1;
            filter: brightness(1.6);
          }
          60% {
            transform: scale(0.95) translateY(0);
            filter: brightness(1.2);
          }
          100% {
            transform: scale(1) translateY(0);
            filter: brightness(1);
          }
        }

        @keyframes nf-glow-in {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          60% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        /* Fade the whole overlay out at the end */
        .fixed.inset-0.z-50 > .nf-intro {
          animation: nf-fade-out 0.5s ease-out forwards;
          animation-delay: 3s;
        }

        @keyframes nf-fade-out {
          from { opacity: 1; }
          to   { opacity: 0; visibility: hidden; }
        }

        @media (max-width: 640px) {
          .nf-letter-wrapper {
            width: 200px;
            height: 200px;
          }
          .nf-letter {
            font-size: 170px;
          }
          .nf-glow {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
};
