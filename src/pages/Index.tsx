import { useState, useEffect } from "react";
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
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handler = () => setBookingOpen(true);
    window.addEventListener("open-booking-modal", handler);
    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onBookClick={() => setBookingOpen(true)} />
      <HeroSection />
      <SocialProof />
      <ProductsSection />
      <ServicesSection />
      <HowWeWork />
      <CaseStudies />
      <BookingSection onBookClick={() => setBookingOpen(true)} />
      <LeadForm />
      <AboutSection />
      <SiteFooter />
      <StickyBookCTA onBookClick={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
