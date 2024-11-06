"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to change banks?",
    answer:
      "The TeamForce hub plugs right into your account dashboard and is accessible immediately after signing up.",
  },
  {
    question: "How can I order equipment?",
    answer:
      "To order equipment, simply go to our shop page and select the items you need.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes, we offer volume discounts for bulk orders. Contact us for more information.",
  },
  {
    question: "How does signing up work?",
    answer:
      "Signing up is easy! Just click 'Open an Account' and fill out the necessary information.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:pt-20 py-10 md:pb-64 px-6 sm:px-12 lg:px-24 bg-gray-50 md:flex md:space-x-16">
      <div>
        <p className=" text-gray-600">Support</p>

        <h2 className="text-6xl text-3xl font-bold mb-4 max-w-[500px]">
          Frequently Asked Questions
        </h2>

        <p className="mb-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisic
        </p>
        <button className="mb-8 px-8 py-2 bg-custom-green-gradient text-white rounded-lg">
          Get in Touch
        </button>
      </div>
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg sm:text-xl font-semibold">
                  {faq.question}
                </span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 max-w-sm text-left text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
