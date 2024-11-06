import ContactForm from "@/component/web-developer-task/contactForm";
import FAQ from "@/component/web-developer-task/faq";
import Footer from "@/component/web-developer-task/footer";
import HeroStarted from "@/component/web-developer-task/hero-Started";
import PaymentMethods from "@/component/web-developer-task/paymentMethods";
import Services from "@/component/web-developer-task/services";
import GetStartedSection from "@/component/web-developer-task/started";
import Testimonials from "@/component/web-developer-task/testimonials";

function Page() {
  return (
    <div className="text-secondary-900">
      <HeroStarted />
      <div className="hidden lg:block">
        <PaymentMethods />
      </div>
      <Services />
      <GetStartedSection />
      <Testimonials />
      <FAQ />

      <Footer />
    </div>
  );
}

export default Page;
