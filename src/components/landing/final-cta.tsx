import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EntryButton } from "@/components/entry-button";
export function FinalCta() {
  return (
    <section className="container" aria-labelledby="start-title">
      <div className="final-cta">
        <h2 id="start-title">ให้เรื่องบัญชีง่ายขึ้น ตั้งแต่วันนี้</h2>
        <p>เริ่มต้นด้วย MIX แล้วให้เวลากับการเติบโตของธุรกิจคุณ</p>
        <div className="hero-actions">
          <EntryButton variant="secondary" size="lg" entry={{ kind: "trial" }}>
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </EntryButton>
          <EntryButton variant="inverse" size="lg" entry={{ kind: "contact" }}>
            ติดต่อทีมงาน
            <ArrowUpRight data-icon="inline-end" />
          </EntryButton>
        </div>
      </div>
    </section>
  );
}
