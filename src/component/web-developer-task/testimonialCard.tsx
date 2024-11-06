import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  profileImage: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  text,
  profileImage,
  name,
  title,
}) => {
  return (
    <div className="relative p-12 testimonial rounded-lg text-white w-full max-w-[300px]">
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
        <div
          className="absolute top-0 left-0 h-0.5 w-44"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-0.5 h-44"
          style={{
            background: "linear-gradient(to bottom, white, transparent)",
          }}
        ></div>

        <div
          className="absolute bottom-0 right-0 h-0.5 w-44"
          style={{
            background: "linear-gradient(to left, white, transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-0.5 h-44"
          style={{
            background: "linear-gradient(to top, white, transparent)",
          }}
        ></div>
      </div>

      <div className="flex items-center mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>

      <p className="mb-4 text-lg font-medium text-left">"{text}"</p>

      <div className="flex items-center">
        <Image
          src={profileImage}
          alt={name}
          width={100}
          height={100}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="text-left">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
