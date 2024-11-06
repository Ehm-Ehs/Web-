import Image from "next/image";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter, FaVimeoV, FaInstagram } from "react-icons/fa";
import ContactForm from "./contactForm";

const Footer = () => {
  return (
    <div className="relative">
      <div className="lg:absolute lg:bottom-[310px]  ">
        <ContactForm />
      </div>

      <footer className="pt-5 lg:pt-72 pb-5 bg-white">
        <div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-8 md:mb-0">
                <Image
                  src=""
                  alt="TeamForce Logo"
                  width={50}
                  height={20}
                  className="w-20 mb-4"
                />
                <p>Lorem Ipsum Lorem Ipsum</p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-1">
                    <PiPhoneCallFill />
                    <Link
                      href="tel:+999999999"
                      className="hover:text-gray-800 text-2xl"
                    >
                      +999999999
                    </Link>
                  </p>
                  <p className="flex items-center gap-1">
                    <BiMessageRoundedDetail />
                    <Link
                      href="mailto:teamforce@loremipsum.com"
                      className="hover:text-gray-800"
                    >
                      teamforce@loremipsum.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Solutions</h3>
                <ul className="list-disc text-gray-600 pl-4">
                  {[
                    "Payments",
                    "Advances",
                    "Online Checkout",
                    "Get Started",
                  ].map((item) => (
                    <li className="py-2" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Other Pages</h3>
                <ul className="list-disc text-gray-600 pl-4">
                  {["About", "Terms & Conditions", "Blog", "Contact"].map(
                    (page) => (
                      <li className="py-2" key={page}>
                        {page}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Download App</h4>
                <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8">
                  <Image
                    src="/asset/qrcode.png"
                    alt="QR Code"
                    width={150}
                    height={150}
                    className="w-20 mb-4 border border-transparent rounded-xl shadow-sm"
                  />
                  <div>
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      className="flex gap-1 items-center w-fit px-4 py-2 bg-blue-900 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition-transform"
                    >
                      <BsApple color="white" /> App Store
                    </a>
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      className="flex gap-1 items-center px-4 py-2 mt-3 bg-white border border-gray-300 rounded-lg text-gray-800 font-semibold shadow-md hover:scale-105 transition-transform"
                    >
                      <BiLogoPlayStore /> Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-2">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                {[
                  <BiLogoFacebook />,
                  <FaTwitter />,
                  <FaVimeoV />,
                  <FaInstagram />,
                ].map((Icon, index) => (
                  <div key={index} className="p-1 border rounded shadow">
                    {Icon}
                  </div>
                ))}
              </div>
              <p className="text-center md:text-left">
                Full Copyright & Design By TeamForce – 2024
              </p>
              <select className="mt-4 md:mt-0 border border-gray-300 rounded-lg p-2 bg-white text-gray-600">
                <option>English (US)</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
