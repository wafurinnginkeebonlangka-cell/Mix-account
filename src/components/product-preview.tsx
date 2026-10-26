import Image from "next/image";
import { FileCheck2, RefreshCw, ChartNoAxesCombined } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: FileCheck2,
    title: "ออกเอกสารได้รวดเร็ว",
    description: "ตั้งแต่เสนอราคา จนถึงรับชำระเงิน ในขั้นตอนที่ต่อเนื่อง",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "ข้อมูลอัปเดตแบบเรียลไทม์",
    description: "ทุกการขายและซื้อสะท้อนสู่สินค้าและบัญชีทันที",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "มองเห็นภาพรวมธุรกิจ",
    description: "ใช้รายงานที่เข้าใจง่าย เพื่อวางแผนก้าวต่อไป",
  },
] as const;

export function ProductPreview() {
  return (
    <section
      id="product-demo"
      className="preview-section section"
      tabIndex={-1}
      aria-labelledby="preview-title"
    >
      <div className="container preview-container preview-layout">
        <div className="preview-copy-column">
          <header className="preview-section-heading">
            <h2 id="preview-title">
              <span>ทุกข้อมูลเชื่อมกัน</span>
              <span>เพื่อทุกการตัดสินใจ</span>
            </h2>
            <p>
              ลดงานซ้ำ ลดความคลาดเคลื่อน และเห็นข้อมูลที่ธุรกิจต้องการ
              ในมุมเดียว
            </p>
          </header>

          <ol className="preview-benefits" aria-label="จุดเด่นของ MIX">
            {benefits.map((benefit) => (
              <li key={benefit.number}>
                <span className="benefit-number">{benefit.number}</span>
                <div className="benefit-copy">
                  <div className="benefit-title">
                    <benefit.icon aria-hidden="true" />
                    <h3>{benefit.title}</h3>
                  </div>
                  <p>{benefit.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="preview-demo-column">
          <Image
            src="/mix-system-preview.png"
            width={1366}
            height={768}
            alt="ตัวอย่างระบบ MIX บนคอมพิวเตอร์และแท็บเล็ต"
            className="preview-system-image"
            sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1100px) calc(100vw - 64px), (max-width: 1444px) 60vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}
