import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function PaymentSolutions() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 md:mb-4">
          You'll love our
          <br />
          powerful payments.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          We've got all your payments covered
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="bg-pink-50 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Scan & Go
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Transform your payment link into a QR code that customers can scan
            with their phone to pay.
          </p>
          <div className="relative h-32 md:h-48">
            <Image
              src="/asset/editedimg.png"
              alt="Payment terminal with QR code"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Easily Send Requests via email or SMS
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            ... or copy-paste the link
          </p>
          <div className="relative h-32 md:h-48">
            <Image
              src="/asset/send.png"
              alt="Email and SMS icons"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Online Billing &<br />
              Invoicing Payments.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Get paid faster with Online Invoicing and the Virtual Terminal.
            </p>
            <button className="inline-flex items-center text-base md:text-lg font-semibold">
              Explore Invoicing Tools
              <BsArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/asset/edimg.png"
              alt="Mobile phone showing invoice and product interface"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
