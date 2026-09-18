import { Header, Hero, FinalCta, Footer } from "@/components/site-shell";
import { ProductPreview } from "@/components/product-preview";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Help } from "@/components/help";
import { EntryProvider } from "@/components/entry-provider";

export default function Home() {
  return (
    <EntryProvider>
      <a className="skip-link" href="#main">
        ข้ามไปเนื้อหาหลัก
      </a>
      <Header />
      <main id="main">
        <div className="hero-scene">
          <Hero />
          <ProductPreview />
        </div>
        <Features />
        <Pricing />
        <Help />
        <FinalCta />
      </main>
      <Footer />
    </EntryProvider>
  );
}
