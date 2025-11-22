import { useEffect, useState } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [show, setShow] = useState(true);

  // how long the intro should stay on screen (ms)
  const INTRO_DURATION = 4000;

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
        {/* We use data-letter="R" and map it to the N-style shape in CSS */}
        <div className="netflixintro" data-letter="R">
          <div className="helper-1">
            <div className="effect-brush">
              <span className="fur-31" />
              <span className="fur-30" />
              <span className="fur-29" />
              <span className="fur-28" />
              <span className="fur-27" />
              <span className="fur-26" />
              <span className="fur-25" />
              <span className="fur-24" />
              <span className="fur-23" />
              <span className="fur-22" />
              <span className="fur-21" />
              <span className="fur-20" />
              <span className="fur-19" />
              <span className="fur-18" />
              <span className="fur-17" />
              <span className="fur-16" />
              <span className="fur-15" />
              <span className="fur-14" />
              <span className="fur-13" />
              <span className="fur-12" />
              <span className="fur-11" />
              <span className="fur-10" />
              <span className="fur-9" />
              <span className="fur-8" />
              <span className="fur-7" />
              <span className="fur-6" />
              <span className="fur-5" />
              <span className="fur-4" />
              <span className="fur-3" />
              <span className="fur-2" />
              <span className="fur-1" />
            </div>
          </div>

          <div className="helper-2">
            <div className="effect-brush">
              <span className="fur-31" />
              <span className="fur-30" />
              <span className="fur-29" />
              <span className="fur-28" />
              <span className="fur-27" />
              <span className="fur-26" />
              <span className="fur-25" />
              <span className="fur-24" />
              <span className="fur-23" />
              <span className="fur-22" />
              <span className="fur-21" />
              <span className="fur-20" />
              <span className="fur-19" />
              <span className="fur-18" />
              <span className="fur-17" />
              <span className="fur-16" />
              <span className="fur-15" />
              <span className="fur-14" />
              <span className="fur-13" />
              <span className="fur-12" />
              <span className="fur-11" />
              <span className="fur-10" />
              <span className="fur-9" />
              <span className="fur-8" />
              <span className="fur-7" />
              <span className="fur-6" />
              <span className="fur-5" />
              <span className="fur-4" />
              <span className="fur-3" />
              <span className="fur-2" />
              <span className="fur-1" />
            </div>
          </div>

          <div className="helper-3">
            <div className="effect-brush">
              <span className="fur-31" />
              <span className="fur-30" />
              <span className="fur-29" />
              <span className="fur-28" />
              <span className="fur-27" />
              <span className="fur-26" />
              <span className="fur-25" />
              <span className="fur-24" />
              <span className="fur-23" />
              <span className="fur-22" />
              <span className="fur-21" />
              <span className="fur-20" />
              <span className="fur-19" />
              <span className="fur-18" />
              <span className="fur-17" />
              <span className="fur-16" />
              <span className="fur-15" />
              <span className="fur-14" />
              <span className="fur-13" />
              <span className="fur-12" />
              <span className="fur-11" />
              <span className="fur-10" />
              <span className="fur-9" />
              <span className="fur-8" />
              <span className="fur-7" />
              <span className="fur-6" />
              <span className="fur-5" />
              <span className="fur-4" />
              <span className="fur-3" />
              <span className="fur-2" />
              <span className="fur-1" />
            </div>
          </div>

          <div className="helper-4">
            <div className="effect-brush">
              <span className="fur-31" />
              <span className="fur-30" />
              <span className="fur-29" />
              <span className="fur-28" />
              <span className="fur-27" />
              <span className="fur-26" />
              <span className="fur-25" />
              <span className="fur-24" />
              <span className="fur-23" />
              <span className="fur-22" />
              <span className="fur-21" />
              <span className="fur-20" />
              <span className="fur-19" />
              <span className="fur-18" />
              <span className="fur-17" />
              <span className="fur-16" />
              <span className="fur-15" />
              <span className="fur-14" />
              <span className="fur-13" />
              <span className="fur-12" />
              <span className="fur-11" />
              <span className="fur-10" />
              <span className="fur-9" />
              <span className="fur-8" />
              <span className="fur-7" />
              <span className="fur-6" />
              <span className="fur-5" />
              <span className="fur-4" />
              <span className="fur-3" />
              <span className="fur-2" />
              <span className="fur-1" />
            </div>
          </div>
        </div>
      </div>

      {/* LOCAL CSS – pure CSS version of your Sass, trimmed & cleaned */}
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

        /* Use the "N-style" layout for letter R */
        .netflixintro[data-letter="R"] {
          transform-origin: 30% center;
        }

        .netflixintro[data-letter="R"] .helper-1 {
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

        .netflixintro[data-letter="R"] .helper-3 {
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

        .netflixintro[data-letter="R"] .helper-2 {
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

        /* Generic helper + brush styling */
        .netflixintro [class*="helper-"] {
          position: absolute;
        }

        .netflixintro [class*="helper-"] .effect-brush {
          position: absolute;
          width: 100%;
          height: 300%;
          top: 0;
          overflow: hidden;
        }

        .netflixintro [class*="helper-"] .effect-brush::before {
          display: block;
          content: "";
          position: absolute;
          background-color: #e40913;
          width: 100%;
          height: 70%;
          box-shadow: 0px 0px 29px 24px #e40913;
        }

        .netflixintro [class*="helper-"] .effect-brush [class*="fur-"] {
          display: block;
          position: absolute;
          bottom: 10%;
          height: 30%;
          background: linear-gradient(to bottom, #e40913 0%, #e40913 30%, rgba(0, 0, 0, 0) 100%);
        }

        /* Position + width of each "fur" slice */
        .netflixintro .fur-1  { left: 0%;    width: 3.8%; }
        .netflixintro .fur-2  { left: 3.8%;  width: 2.8%; }
        .netflixintro .fur-3  { left: 6.6%;  width: 4.8%; }
        .netflixintro .fur-4  { left: 11.4%; width: 4%;   }
        .netflixintro .fur-5  { left: 15.4%; width: 4%;   }
        .netflixintro .fur-6  { left: 19.4%; width: 2.5%; }
        .netflixintro .fur-7  { left: 21.9%; width: 4%;   }
        .netflixintro .fur-8  { left: 25.9%; width: 2%;   }
        .netflixintro .fur-9  { left: 27.9%; width: 4%;   }
        .netflixintro .fur-10 { left: 31.9%; width: 3.5%; }
        .netflixintro .fur-11 { left: 35.4%; width: 2%;   }
        .netflixintro .fur-12 { left: 37.4%; width: 2.6%; }
        .netflixintro .fur-13 { left: 40%;   width: 6%;   }
        .netflixintro .fur-14 { left: 46%;   width: 2%;   }
        .netflixintro .fur-15 { left: 48%;   width: 5.5%; }
        .netflixintro .fur-16 { left: 53.5%; width: 3%;   }
        .netflixintro .fur-17 { left: 56.5%; width: 4.1%; }
        .netflixintro .fur-18 { left: 60.6%; width: 2.4%; }
        .netflixintro .fur-19 { left: 63%;   width: 4%;   }
        .netflixintro .fur-20 { left: 67%;   width: 1.5%; }
        .netflixintro .fur-21 { left: 68.5%; width: 2.8%; }
        .netflixintro .fur-22 { left: 71.3%; width: 2.3%; }
        .netflixintro .fur-23 { left: 73.6%; width: 2.2%; }
        .netflixintro .fur-24 { left: 75.8%; width: 1%;   }
        .netflixintro .fur-25 { left: 76.8%; width: 2.1%; }
        .netflixintro .fur-26 { left: 78.9%; width: 4.1%; }
        .netflixintro .fur-27 { left: 83%;   width: 2.5%; }
        .netflixintro .fur-28 { left: 85.5%; width: 4.5%; }
        .netflixintro .fur-29 { left: 90%;   width: 2.8%; }
        .netflixintro .fur-30 { left: 92.8%; width: 3.5%; }
        .netflixintro .fur-31 { left: 96.3%; width: 3.7%; }

        @keyframes brush-moving {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes zoom-in {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(15);
          }
        }

        @keyframes fading-lumieres-box {
          0% {
            background-color: rgba(228, 9, 19, 0.5);
          }
          100% {
            background-color: rgba(228, 9, 19, 0);
          }
        }
      `}</style>
    </div>
  );
};
