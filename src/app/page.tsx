import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { BusinessSize } from "@/components/landing/business-size";
import { FinalCta } from "@/components/landing/final-cta";
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
      <main id="main" tabIndex={-1}>
        <div className="hero-scene">
          <Hero />
          <BusinessSize />
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
