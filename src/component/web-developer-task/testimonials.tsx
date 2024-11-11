"use client";
import CardAnimation from "./cardAnimation";

const Testimonials = () => {
  return (
    <section className="py-32 bg-general-pattern bg-secondary-100 bg-left bg-contain bg-no-repeat text-white text-center">
      <h2 className="text-5xl font-bold mb-10 max-w-md mx-auto">
        What people are saying about us
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        <CardAnimation />
      </div>
    </section>
  );
};

export default Testimonials;
