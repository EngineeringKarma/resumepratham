import React, { useEffect, useState } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const INTRO_DURATION = 4000; // 4s

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, INTRO_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div id="nf-container">
        {/* Netflix-style brush letter, using R (we reuse the N layout geometry) */}
        <div className="netflixintro" data-letter="R">
          <div className="helper-1">
            <div className="effect-brush">
              {Array.from({ length: 31 }).map((_, i) => (
                <span key={`h1-${i}`} className={`fur-${31 - i}`} />
              ))}
            </div>
            {/* optional light beams */}
            <div className="effect-lumieres">
              <span className="lamp-1" />
              <span className="lamp-2" />
              <span className="lamp-3" />
              <span className="lamp-4" />
              <span className="lamp-5" />
              <span className="lamp-6" />
              <span className="lamp-7" />
              <span className="lamp-8" />
            </div>
          </div>

          <div className="helper-2">
            <div className="effect-brush">
              {Array.from({ length: 31 }).map((_, i) => (
                <span key={`h2-${i}`} className={`fur-${31 - i}`} />
              ))}
            </div>
          </div>

          <div className="helper-3">
            <div className="effect-brush">
              {Array.from({ length: 31 }).map((_, i) => (
                <span key={`h3-${i}`} className={`fur-${31 - i}`} />
              ))}
            </div>
          </div>

          <div className="helper-4">
            <div className="effect-brush">
              {Array.from({ length: 31 }).map((_, i) => (
                <span key={`h4-${i}`} className={`fur-${31 - i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local CSS translated from your Sass, simplified + locked to letter R */}
      <style>{`
        #nf-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: #000000;
          overflow: hidden;
        }

        .netflixintro {
          display: block;
          position: relative;
          width: 300px;
          height: 300px;
          overflow: hidden;
          animation-name: zoom-in;
          animation-delay: 0.5s;
          animation-duration: 3.5s;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          background-size: 4000px;
          background-position: -1950px 0;
        }

        .netflixintro::before {
          content: "";
          position: absolute;
          display: block;
          background-color: #000000;
          width: 150%;
          height: 30%;
          left: -25%;
          bottom: -27%;
          border-radius: 50%;
          z-index: 5;
          transform-origin: left center;
          background-size: 4000px;
          background-position: -1950px 0;
        }

        /* R layout (re-using the original N geometry) */
        .netflixintro[data-letter="R"] {
          transform-origin: 30% center;
        }

        .netflixintro[data-letter="R"] .helper-1 {
          position: absolute;
          width: 19.5%;
          height: 100%;
          background-color: rgba(228, 9, 19, 0.5);
          left: 22.4%;
          top: 0;
          transform: rotate(180deg);
          animation-name: fading-lumieres-box;
          animation-duration: 2s;
          animation-delay: 0.6s;
          animation-fill-mode: forwards;
        }

        .netflixintro[data-letter="R"] .helper-1 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2.5s;
          animation-fill-mode: forwards;
          animation-delay: 1.2s;
        }

        .netflixintro[data-letter="R"] .helper-1 .effect-brush [class*="fur-"] {
          bottom: 0;
          height: 40%;
        }

        .netflixintro[data-letter="R"] .helper-2 {
          position: absolute;
          width: 19.5%;
          height: 100%;
          left: 57.8%;
          top: 0;
          transform: rotate(180deg);
          overflow: hidden;
        }

        .netflixintro[data-letter="R"] .helper-2 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-delay: 0.5s;
        }

        .netflixintro[data-letter="R"] .helper-3 {
          position: absolute;
          width: 19%;
          height: 150%;
          left: 40.5%;
          top: -25%;
          transform: rotate(-19.5deg);
          box-shadow: 0px 0px 35px -12px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .netflixintro[data-letter="R"] .helper-3 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-delay: 0.8s;
        }

        .netflixintro[data-letter="R"] .helper-4 {
          position: absolute;
          width: 19.5%;
          height: 100%;
          left: 0;
          top: 0;
          overflow: hidden;
        }

        .netflixintro[data-letter="R"] .helper-4 .effect-brush {
          animation-name: brush-moving;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }

        /* Brush core */
        .effect-brush {
          position: absolute;
          width: 100%;
          height: 300%;
          top: 0;
          overflow: hidden;
        }

        .effect-brush::before {
          display: block;
          content: "";
          position: absolute;
          background-color: #e40913;
          width: 100%;
          height: 70%;
          box-shadow: 0px 0px 29px 24px #e40913;
        }

        .effect-brush [class*="fur-"] {
          display: block;
          position: absolute;
          bottom: 10%;
          height: 30%;
          background: linear-gradient(to bottom, #e40913 0%, #e40913 30%, rgba(0, 0, 0, 0) 100%);
        }

        /* Fur slice widths/positions */
        .fur-1  { left: 0%;    width: 3.8%; }
        .fur-2  { left: 3.8%;  width: 2.8%; }
        .fur-3  { left: 6.6%;  width: 4.8%; }
        .fur-4  { left: 11.4%; width: 4%;   }
        .fur-5  { left: 15.4%; width: 4%;   }
        .fur-6  { left: 19.4%; width: 2.5%; }
        .fur-7  { left: 21.9%; width: 4%;   }
        .fur-8  { left: 25.9%; width: 2%;   }
        .fur-9  { left: 27.9%; width: 4%;   }
        .fur-10 { left: 31.9%; width: 3.5%; }
        .fur-11 { left: 35.4%; width: 2%;   }
        .fur-12 { left: 37.4%; width: 2.6%; }
        .fur-13 { left: 40%;   width: 6%;   }
        .fur-14 { left: 46%;   width: 2%;   }
        .fur-15 { left: 48%;   width: 5.5%; }
        .fur-16 { left: 53.5%; width: 3%;   }
        .fur-17 { left: 56.5%; width: 4.1%; }
        .fur-18 { left: 60.6%; width: 2.4%; }
        .fur-19 { left: 63%;   width: 4%;   }
        .fur-20 { left: 67%;   width: 1.5%; }
        .fur-21 { left: 68.5%; width: 2.8%; }
        .fur-22 { left: 71.3%; width: 2.3%; }
        .fur-23 { left: 73.6%; width: 2.2%; }
        .fur-24 { left: 75.8%; width: 1%;   }
        .fur-25 { left: 76.8%; width: 2.1%; }
        .fur-26 { left: 78.9%; width: 4.1%; }
        .fur-27 { left: 83%;   width: 2.5%; }
        .fur-28 { left: 85.5%; width: 4.5%; }
        .fur-29 { left: 90%;   width: 2.8%; }
        .fur-30 { left: 92.8%; width: 3.5%; }
        .fur-31 { left: 96.3%; width: 3.7%; }

        /* Lumieres (simplified version of yours) */
        .effect-lumieres {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation-name: showing-lumieres;
          animation-duration: 2s;
          animation-delay: 1.6s;
          animation-fill-mode: forwards;
          pointer-events: none;
        }

        .effect-lumieres [class*="lamp-"] {
          position: absolute;
          display: block;
          height: 100%;
          box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
        }

        .effect-lumieres .lamp-1 { left: 2%;  width: 1%;  background: #ff0100; animation: lumieres-moving-left 5s forwards; }
        .effect-lumieres .lamp-2 { left: 6%;  width: 1.4%;background: #ffde01; animation: lumieres-moving-right 5s forwards; }
        .effect-lumieres .lamp-3 { left: 12%; width: 2%;  background: #ff00cc; animation: lumieres-moving-left 5s forwards; }
        .effect-lumieres .lamp-4 { left: 20%; width: 2.5%;background: #04fd8f; animation: lumieres-moving-right 5s forwards; }
        .effect-lumieres .lamp-5 { left: 32%; width: 3%;  background: #ffc601; animation: lumieres-moving-left 5s forwards; }
        .effect-lumieres .lamp-6 { left: 46%; width: 2.2%;background: #fd0100; animation: lumieres-moving-right 5s forwards; }
        .effect-lumieres .lamp-7 { left: 60%; width: 2.8%;background: #0078fe; animation: lumieres-moving-left 5s forwards; }
        .effect-lumieres .lamp-8 { left: 78%; width: 2.4%;background: #ff0036; animation: lumieres-moving-right 5s forwards; }

        @keyframes brush-moving {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes zoom-in {
          0%   { transform: scale(1); }
          100% { transform: scale(15); }
        }

        @keyframes fading-lumieres-box {
          0%   { background-color: rgba(228, 9, 19, 0.5); }
          100% { background-color: rgba(228, 9, 19, 0); }
        }

        @keyframes showing-lumieres {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes lumieres-moving-left {
          0%   { transform: translateX(0) scaleX(1); }
          50%  { transform: translateX(40px) scaleX(1.3); }
          100% { transform: translateX(80px) scaleX(1.8); }
        }

        @keyframes lumieres-moving-right {
          0%   { transform: translateX(0) scaleX(1); }
          50%  { transform: translateX(-40px) scaleX(1.3); }
          100% { transform: translateX(-80px) scaleX(1.8); }
        }
      `}</style>
    </div>
  );
};
