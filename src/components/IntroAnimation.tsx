import { useEffect, useState } from "react";

export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fade-out" style={{ animationDelay: "2.5s" }}>
      <div className="relative overflow-hidden">
        <div className="ribbon-sweep" />
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider opacity-0 animate-reveal">
          RESUME
        </h1>
      </div>
      
      <style>{`
        .ribbon-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #E50914, transparent);
          animation: sweep 1.5s ease-in-out forwards;
          filter: blur(20px);
        }
        
        @keyframes sweep {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes reveal {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 30px rgba(229, 9, 20, 0.5);
          }
        }
        
        .animate-reveal {
          animation: reveal 2.5s ease-out forwards;
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
