import AboutSection from "../component/AboutSection";
import ArticlesSection from "../component/ArticlesSection";
import ContactForm from "../component/ContactForm";
import HeroSection from "../component/HeroSection";
import ServicesSection from "../component/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
      {/* <AppointmentSection /> */}
      <ArticlesSection />
    </>
  );
}
