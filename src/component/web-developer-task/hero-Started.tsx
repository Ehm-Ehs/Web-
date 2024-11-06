"use client";
import React, { useRef } from "react";
import HeroSection from "./hero";
import PaymentSolutions from "./payment";

function HeroStarted() {
  const scrollToRef = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-secondary-100 text-white px-6 md:px-10 lg:px-28 relative">
        <HeroSection />
        <div className="absolute bottom-[-45px] right-[50%] transform translate-x-1/2 text-center">
          <button
            onClick={handleScrollDown}
            className="py-4 px-5 text-xs md:text-sm text-gray-700 hover:text-gray-800 bg-white border border-transparent rounded-full"
          >
            Scroll Down
            <span className="block mt-2 animate-bounce">⬇️</span>
          </button>
        </div>
      </div>
      <section ref={scrollToRef} className="pt-8 md:pt-12 bg-white">
        <PaymentSolutions />
      </section>
    </div>
  );
}

export default HeroStarted;
