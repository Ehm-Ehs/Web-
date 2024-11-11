import { PiGlobeSimpleDuotone } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsIncognito } from "react-icons/bs";
import { BiSolidKeyboard } from "react-icons/bi";

const Services = () => {
  return (
    <section className="p-24 bg-gray-100 mx-auto  ">
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            We provide the best service for you
          </h1>
          <p className="text-xl text-muted-foreground">
            We've got all your payments covered
          </p>
        </div>
        <div className="flex-1 flex flex-wrap justify-end gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">3.5m</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">240+</div>
            <div className="text-sm text-muted-foreground">
              Trusted Companies
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">78k</div>
            <div className="text-sm text-muted-foreground">Customer care</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-sky-100 rounded-3xl rotate-[-10deg]  transition-transform duration-300 group-hover:rotate-0"></div>
          <div className="relative info p-6 rounded-3xl border-0 flex flex-col gap-32">
            <PiGlobeSimpleDuotone size={30} />
            <h3 className="text-xl font-semibold mb-2">Online</h3>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#b1f143] rounded-3xl rotate-[-10deg]  transition-transform duration-300 group-hover:rotate-0"></div>
          <div className="relative info p-6 rounded-3xl border-0 flex flex-col gap-32">
            <HiBuildingOffice2 size={30} />
            <h3 className="text-xl font-semibold mb-2">Bank Transfers</h3>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-100 rounded-3xl rotate-[-10deg] transition-transform duration-300 group-hover:rotate-0"></div>
          <div className="relative info p-6 rounded-3xl border-0 flex flex-col gap-32">
            <BiSolidKeyboard size={30} />
            <h3 className="text-xl font-semibold mb-2">Keyed</h3>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-purple-100 rounded-3xl rotate-[-10deg]  transition-transform duration-300 group-hover:rotate-0"></div>
          <div className="relative info p-6 rounded-3xl border-0 flex flex-col gap-32">
            <BsIncognito size={30} />
            <h3 className="text-xl font-semibold mb-2">In-Person</h3>
          </div>
        </div>
      </div>
      <div className="bg-secondary-50 mt-28 rounded-3xl p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          More free tools than you can handle
        </h2>
        <div className="flex flex-wrap gap-6">
          <ul className="space-y-2 flex-1 max-w-[250px] list-disc">
            <li>Invoicing</li>
            <li>Idiv Vault</li>
            <li>Recurring Plans</li>
          </ul>
          <ul className="space-y-2 flex-1 max-w-[250px] list-disc">
            <li>Online Checkout</li>
            <li>Customer Portal</li>
            <li>Payment Links</li>
          </ul>
          <ul className="space-y-2 flex-1 max-w-[250px] list-disc">
            <li>Point-of-Sale</li>
            <li>Inventory</li>
            <li>SMS Payments</li>
          </ul>
          <ul className="space-y-2 flex-1 max-w-[250px] list-disc">
            <li>Online Food Ordering</li>
            <li>Virtual Terminal</li>
            <li>QR Codes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
