"use client";

import { animate, createScope, createSpring, Scope } from "animejs";
import { useEffect, useRef, useState } from "react";

export default function WeddingInvitation() {
  const [isRSVPButtonHovered, setIsRSVPButtonHovered] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope | null>(null);

  useEffect(() => {
    // Set initial state - make elements invisible
    scope.current = createScope({ root }).add((self) => {
      animate(["#an-and-son"], {
        opacity: [{ to: 1, duration: 800 }],
        scale: [
          { to: 2, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        rotate: [
          { to: 20, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        delay: 200,
        easing: "easeOutElastic(1, .8)",
      });

      animate(["#cartoon-characters", "#bride-groom"], {
        opacity: [{ to: 1, duration: 800 }],
        scale: [
          { to: 2, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        rotate: [
          { to: -12, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        delay: 400,
        easing: "easeOutElastic(1, .8)",
      });

      animate(["#stars"], {
        opacity: [{ to: 1, duration: 800 }],
        scale: [
          { to: 1, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        rotate: [
          { to: 28, duration: 800, ease: createSpring({ stiffness: 300 }) },
        ],
        delay: 1000,
        easing: "easeOutElastic(1, .8)",
      });

      // Register function methods to be used outside the useEffect
      self?.add("wiggleRSVPButton", () => {
        animate("#rsvp-button", {
          rotate: [
            { to: 3, ease: "inOut(3)", duration: 100 },
            { to: -3, duration: 100, ease: "inOut(3)" },
            { to: 3, ease: "inOut(3)", duration: 100 },
            { to: -3, duration: 100, ease: "inOut(3)" },
            { to: 0, duration: 200, ease: createSpring({ stiffness: 300 }) },
          ],
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current?.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scope.current?.methods.wiggleRSVPButton();
    }, 5000);

    if (isRSVPButtonHovered) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRSVPButtonHovered]);

  const handleRSVPButtonClick = () => {
    console.log("RSVP button clicked");
    window.open("https://tally.so/r/mKRZ0M", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={root}>
      {/* Grid paper background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="relative max-w-4xl mx-auto w-fit sm:scale-150">
          {/* Main photo and name collage */}
          <div className="relative">
            {/* Stars decoration - top left */}
            <div
              id="stars"
              className="absolute opacity-0 bottom-8 -left-7 sm:bottom-12 sm:-left-12 w-12 h-16 sm:w-20 sm:h-24 z-20 rotate-[28deg]"
            >
              <img
                src="/images/stars.png"
                alt="Decorative stars"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              id="bride-groom"
              className="relative z-10 opacity-0 scale-50 origin-bottom-left mx-auto w-60 h-48 sm:w-72 sm:h-64 overflow-hidden rotate-[15deg] translate-x-4 sm:translate-x-10"
            >
              <img
                src="/images/bride-groom.png"
                alt="Bride and groom photo"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 7%" }}
              />
            </div>

            {/* Cartoon characters - positioned over the photo */}
            <div
              id="cartoon-characters"
              className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 w-24 h-18 sm:w-32 sm:h-24 z-20 -rotate-12 opacity-0 scale-50 origin-bottom-left"
            >
              <div className="-translate-x-8 sm:-translate-x-14">
                <img
                  src="/images/cartoon-characters.png"
                  alt="Cartoon bride and groom"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Name collage - positioned over the photo */}
            <div
              id="an-and-son"
              className="absolute opacity-0 scale-50 origin-bottom -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-72 sm:w-96 h-auto z-20 -rotate-[20deg]"
            >
              <div className="translate-x-4 sm:translate-x-9">
                <img
                  src="/images/an-and-son.png"
                  alt="An & Son"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Getting married banner */}
          <div className="relative -top-3 sm:-top-5 z-999">
            <img
              src="/images/getting-married.png"
              alt="Getting Married"
              className="w-48 sm:w-64 h-auto mx-auto object-contain hover:rotate-1 transition-transform duration-100"
            />

            {/* Hearts decoration - positioned near getting married */}
            <div className="absolute -right-5 top-3 sm:top-5 w-8 h-10 sm:w-10 sm:h-14 rotate-[24deg]">
              <img
                src="/images/hearts.png"
                alt="Decorative hearts"
                className="w-full h-full object-contain"
              />
            </div>

            {/* You're invited text */}
            <div>
              <img
                src="/images/you-are-invited.png"
                alt="+ You're Invited!"
                className="w-48 sm:w-64 h-auto mx-auto object-contain"
              />
            </div>

            {/* Invitation coming soon text */}
            <div>
              <img
                src="/images/invitation-coming-soon.png"
                alt="(invitation coming soon)"
                className="w-44 sm:w-56 h-auto mx-auto object-cover object-center"
              />
            </div>

            {/* RSVP Button */}
            <div className="text-center">
              <button
                className="relative group cursor-pointer"
                id="rsvp-button"
                onMouseEnter={() => setIsRSVPButtonHovered(true)}
                onMouseLeave={() => setIsRSVPButtonHovered(false)}
                onClick={handleRSVPButtonClick}
              >
                <img
                  src="/images/rsvp-button.png"
                  alt="Click to RSVP!"
                  className="w-56 h-24 sm:w-72 sm:h-32 mx-auto object-center object-cover transition-transform group-hover:scale-105"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
