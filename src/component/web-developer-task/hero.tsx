import React from "react";
import Header from "./header";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse py-8 md:py-16 md:flex-row items-center justify-center md:justify-between min-h-fit">
        <div className="px-4 flex flex-col justify-center items-center md:block text-center md:text-left md:px-0 max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            The next generation payment ways.
          </h1>
          <button className="bg-custom-green-gradient px-4 py-3 rounded text-sm font-semibold mt-4">
            Get Started For Free
          </button>
          <p className="mt-12 md:mt-24 text-xs md:text-sm opacity-80">
            Over <span className="font-semibold">50k+ Clients</span> all over
            the world
          </p>
          <div className="flex space-x-2 mt-2   ">
            {[...Array(4)].map((_, idx) => (
              <Image
                key={idx}
                src="/asset/Avatar.png"
                alt={`Client ${idx + 1}`}
                className="w-4 h-4 md:w-10 md:h-10 rounded-full"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>

        <div className="mb-10 md:mt-16 w-full max-w-xs md:max-w-xl lg:max-w-3xl">
          <Image src="/asset/hand.png" width={700} height={700} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
