"use client";
import dynamic from "next/dynamic";
import { FC } from "react";
import React, { useEffect, useState } from "react";
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
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
  {
    name: "Michael H.",
    title: "Founder & Leader",
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
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
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
  {
    name: "Michael H.",
    title: "Founder & Leader",
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
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
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
  {
    name: "Michael H.",
    title: "Founder & Leader",
    text: "Is it possible to love your credit card processor? With TeamForce, yes!",
    profileImage: "/asset/Avatar.png",
    rating: 5,
  },
];

const Testimonials: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );
  return (
    <section className="py-32 bg-general-pattern bg-secondary-100 bg-left bg-contain bg-no-repeat text-white text-center">
      <h2 className="text-5xl font-bold mb-10 max-w-md mx-auto">
        What people are saying about us
      </h2>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-3 justify-center md:flex-row  space-x-4 overflow-hidden transition-transform duration-500">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] ">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full border ${
                index === currentPage ? "bg-white" : "bg-transparent"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
