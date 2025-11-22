import { useEffect, useState } from "react";

export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fade-out" style={{ animationDelay: "4.5s" }}>
      <div className="relative">
        <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest netflix-logo">
          RESUME
        </h1>
      </div>
      
      <style>{`
        .netflix-logo {
          animation: netflixIntro 4s cubic-bezier(0.87, 0, 0.13, 1) forwards;
          text-shadow: 
            0 0 20px rgba(229, 9, 20, 0.8),
            0 0 40px rgba(229, 9, 20, 0.6),
            0 0 60px rgba(229, 9, 20, 0.4),
            0 10px 30px rgba(0, 0, 0, 0.8);
          transform-origin: center;
        }
        
        @keyframes netflixIntro {
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
            filter: brightness(1.5);
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
        
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
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
