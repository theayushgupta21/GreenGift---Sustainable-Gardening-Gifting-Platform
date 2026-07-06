
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/home/hero-section";
import CategorySection from "@/components/home/category-section";
import FeaturedProducts from "@/components/home/featured-products";
import HowToOrder from "@/components/home/how-to-order";
import TrustBadges from "@/components/home/trust-badges";

export default function Home() {
  return (
    <>
      <main>

        <Navbar />

        <HeroSection />

        <CategorySection />

        <FeaturedProducts />

        <HowToOrder />

        <TrustBadges />

        <Footer />

      </main>

    </>
  );
}
