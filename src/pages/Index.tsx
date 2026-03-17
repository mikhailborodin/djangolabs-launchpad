import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import BookingSection from "@/components/BookingSection";
import LeadForm from "@/components/LeadForm";
import AboutSection from "@/components/AboutSection";
import SiteFooter from "@/components/SiteFooter";
import StickyBookCTA from "@/components/StickyBookCTA";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <ProductsSection />
    <ServicesSection />
    <HowWeWork />
    <CaseStudies />
    <BookingSection />
    <LeadForm />
    <AboutSection />
    <SiteFooter />
    <StickyBookCTA />
  </div>
);

export default Index;
