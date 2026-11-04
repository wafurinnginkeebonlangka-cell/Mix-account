import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { EntryProvider } from "@/components/entry-provider";
import { ProductPreview } from "@/components/product-preview";
import { HeroAnimationPreview } from "./preview";
import "./preview.css";

export const metadata: Metadata = {
  title: "MIX — ทดลอง animation โลโก้",
  robots: { index: false, follow: false },
};

export default function HeroAnimationPage() {
  return (
    <EntryProvider>
      <Header />
      <main>
        <HeroAnimationPreview />
        <ProductPreview />
      </main>
    </EntryProvider>
  );
}
