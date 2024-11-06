import Image from "next/image";
import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <section className="py-28 bg-white flex flex-col md:flex-row items-center gap-10">
      <div className="flex items-center justify-center mt-10 md:mt-0">
        <Image
          src="/asset/images.png"
          alt="User"
          width={600}
          height={600}
          className=" rounded-full"
        />
      </div>
      <div className="flex flex-col items-center md:items-start px-4 md:px-10">
        <p className="underline-green">Open an account</p>
        <h2 className="text-5xl font-bold mb-6">Let's get started</h2>
        <ol className="text-gray-700 space-y-4 text-xl">
          <li className="py-5 flex gap-5 items-center">
            <p className="font-semibold text-3xl">01</p> Sign up in a few
            minutes
          </li>
          <li className="py-5 flex gap-5 items-center">
            <p className="font-semibold text-3xl">02</p> Let us verify your
            identity
          </li>
          <li className="py-5 max-w-sm flex gap-5 items-center">
            <p className="font-semibold text-3xl">03</p> Your account is open;
            you can send your first payment
          </li>
        </ol>
        <button className="bg-custom-green-gradient px-6 py-3 mt-6 rounded text-lg font-semibold text-white">
          Open An Account in Minutes
        </button>
        <p className="mt-2 text-xs text-gray-500">
          Try it for 30 days. For free. No obligations.
        </p>
      </div>
    </section>
  );
};

export default GetStartedSection;
