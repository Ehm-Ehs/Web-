import React, { useEffect, useState, useRef } from "react";
import TestimonialCard from "./testimonialCard";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  profileImage: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Lana Rey",
    title: "Founder & Leader",
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
  {
    name: "J. McGhee",
    title: "Founder & Leader",
    text: "I’ve never experienced such seamless transactions before. Amazing!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
  {
    name: "Michael H.",
    title: "Founder & Leader",
    text: "TeamForce has been transformative for our business!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
];

function CardAnimation() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimationStarted(true);
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="flex flex-col items-center gap-3 justify-center md:flex-row space-x-4 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${animationStarted ? "slide-in" : ""}`}
            style={{
              animationDelay: `${index * 1.5}s`,
            }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {/* Pagination can be added here */}
      </div>
    </div>
  );
}

export default CardAnimation;
