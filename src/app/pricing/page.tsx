import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EntryProvider } from "@/components/entry-provider";
import { EntryButton } from "@/components/entry-button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PricingComparison } from "@/components/pricing-comparison";

export const metadata: Metadata = {
  title: "เปรียบเทียบแพ็กเกจ | MIX",
  description: "เปรียบเทียบราคาและความสามารถของแพ็กเกจ MIX",
};

export default function PricingPage() {
  return (
    <EntryProvider>
      <Header />
      <main className="pricing-details-page">
        <section className="pricing-details-hero">
          <Link href="/#pricing" className="pricing-back-link">
            <ArrowLeft aria-hidden="true" />
            กลับไปดูแพ็กเกจ
          </Link>
          <p>รายละเอียดแพ็กเกจ MIX</p>
          <h1>เปรียบเทียบให้ชัด ก่อนเลือกให้พอดี</h1>
          <span>ดูราคา จำนวนผู้ใช้งาน และความสามารถทั้งหมดของแต่ละแพ็กเกจ</span>
          <div className="pricing-details-actions">
            <EntryButton entry={{ kind: "trial" }}>
              เริ่มทดลองใช้ฟรี
              <ArrowRight data-icon="inline-end" />
            </EntryButton>
            <EntryButton variant="outline" entry={{ kind: "contact" }}>
              ติดต่อทีมงาน
            </EntryButton>
          </div>
        </section>
        <section
          className="pricing-comparison-section container"
          aria-labelledby="comparison-title"
        >
          <div className="pricing-comparison-heading">
            <h2 id="comparison-title">รายละเอียดทุกแพ็กเกจ</h2>
            <p>เลื่อนตารางในแนวนอนเพื่อดูข้อมูลทั้งหมดบนหน้าจอขนาดเล็ก</p>
          </div>
          <PricingComparison />
          <p className="section-note">
            รายละเอียดแพ็กเกจอ้างอิงจาก GOT BALANCE ·
            สอบถามทีมงานเพื่อยืนยันเงื่อนไขก่อนเริ่มใช้งาน
          </p>
        </section>
      </main>
      <Footer />
    </EntryProvider>
  );
}
