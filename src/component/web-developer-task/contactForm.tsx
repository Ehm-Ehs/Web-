"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <div className="bg-general-pattern bg-secondary-100 w-full bg-left bg-contain bg-no-repeat mx-auto xl:mx-[15%] lg:mx-[5%] py-8 px-6 md:px-16 lg:px-32 lg:rounded-2xl shadow-lg flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full md:w-3/4 lg:w-1/2"
      >
        <input
          type="text"
          placeholder="Full name"
          {...register("name")}
          className="w-full p-3 rounded-full bg-purple-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email address"
          {...register("email")}
          className="w-full p-3 rounded-full bg-purple-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone")}
          className="w-full p-3 rounded-full bg-purple-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Enter your message"
          {...register("message")}
          className="w-full p-3 rounded-3xl bg-purple-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="p-3 mt-4 bg-custom-green-gradient text-white font-semibold rounded transition duration-200 md:w-auto"
          >
            Get Started Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
