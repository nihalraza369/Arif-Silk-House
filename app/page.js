import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopSection from "@/components/ShopSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main>
      <CartDrawer />
      <Header />
      <Hero />
      <ShopSection />
      <About />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
