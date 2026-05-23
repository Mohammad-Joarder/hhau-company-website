import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustSection from "@/components/TrustSection";
import ProductShowcase from "@/components/ProductShowcase";
import TechnologySection from "@/components/TechnologySection";
import AppDownloadSection from "@/components/AppDownloadSection";
import LegalSection from "@/components/LegalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#111111] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <EcosystemSection />
        <FeaturesSection />
        <TrustSection />
        <ProductShowcase />
        <TechnologySection />
        <AppDownloadSection />
        <LegalSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </>
  );
}
