import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import {
  FileText,
  ShoppingCart,
  Package,
  Coins,
  Building2,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
const features = [
  {
    icon: FileText,
    title: "งานขายและลูกหนี้",
    text: "ออกใบเสนอราคา ใบแจ้งหนี้ วางบิล และติดตามการรับชำระเงินได้ในที่เดียว",
  },
  {
    icon: ShoppingCart,
    title: "จัดซื้อและเจ้าหนี้",
    text: "จัดการใบขอซื้อ ใบสั่งซื้อ และบิลซื้อ พร้อมติดตามการจ่ายชำระเจ้าหนี้",
  },
  {
    icon: Package,
    title: "สินค้าและคลัง",
    text: "รับ จ่าย โอน และประกอบสินค้า พร้อมปรับยอดสินค้าจากการตรวจนับ",
  },
  {
    icon: Coins,
    title: "บัญชีและการเงิน",
    text: "บันทึกรายการบัญชี จัดการยอดยกมา และปิดงบ เพื่อดูแลบัญชีอย่างเป็นระบบ",
  },
  {
    icon: Building2,
    title: "ทรัพย์สิน",
    text: "จัดการข้อมูลทรัพย์สินและคำนวณค่าเสื่อมราคา ด้วยแพ็กเกจ Mix-VIP",
  },
  {
    icon: ChartNoAxesCombined,
    title: "รายงานธุรกิจ",
    text: "ดูรายงานการขาย การซื้อ และบัญชี พร้อมส่งออกข้อมูลตามความสามารถของแพ็กเกจ",
  },
];
export function Features() {
  return (
    <section
      id="features"
      className="section container"
      aria-labelledby="features-title"
      tabIndex={-1}
    >
      <SectionHeading
        id="features-title"
        title="เชื่อมทุกงาน ให้ธุรกิจไปต่อ"
        description="ตั้งแต่เอกสารใบแรก ไปจนถึงภาพรวมบัญชี"
        rule
        aside={
          <>
            งานดูแลง่าย
            <br />
            ธุรกิจเดินหน้าได้มากขึ้น
          </>
        }
      />
      <div className="feature-grid">
        {features.map((f) => (
          <Card key={f.title} className="feature-card glass">
            <CardHeader>
              <div className="feature-icon">
                <f.icon strokeWidth={1.6} />
              </div>
              <CardTitle>
                <h3>{f.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{f.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="developer-strip glass">
        <div>
          <span>พัฒนาโดย</span>
          <Image
            src="/got-balance-wordmark.png"
            alt="GOT BALANCE"
            width={195}
            height={42}
          />
        </div>
        <div>
          <ShieldCheck />
          <p>
            <small>มาตรฐานการพัฒนาซอฟต์แวร์</small>
            <strong>ISO/IEC 29110-4-1:2018</strong>
          </p>
        </div>
        <p>
          จากความเข้าใจงานบัญชี
          <br />
          สู่เครื่องมือสำหรับธุรกิจไทย
        </p>
      </div>
      <p className="section-note">
        ความสามารถในการใช้งานขึ้นอยู่กับแพ็กเกจที่เลือก
      </p>
    </section>
  );
}
