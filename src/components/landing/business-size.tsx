import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const businessSizes = [
  {
    label: "START",
    title: "เริ่มธุรกิจ\nอย่างมั่นใจ",
    description: "ดูแลงานขาย เอกสาร และเงินรับจ่าย แบบไม่ยุ่งยาก",
    cta: "ดู MIX BASIC",
    tone: "start",
    href: "/pricing#basic",
  },
  {
    label: "SCALE",
    title: "ขยายงาน\nอย่างเป็นระบบ",
    description:
      "เชื่อมทีมซื้อ ขาย สินค้า และบัญชี ให้ข้อมูลไปในทิศทางเดียวกัน",
    cta: "ดู MIX PRO",
    tone: "scale",
    href: "/pricing#pro",
  },
  {
    label: "CUSTOM",
    title: "ปรับระบบ\nให้เหมาะกับคุณ",
    description: "รองรับกระบวนการธุรกิจเฉพาะทาง พร้อมทีมงานช่วยวางแผน",
    cta: "คุยกับทีม MIX",
    tone: "custom",
    href: "/pricing#vip",
  },
] as const;

export function BusinessSize() {
  return (
    <section
      className="business-size-section section"
      aria-labelledby="business-size-title"
    >
      <div className="container">
        <div className="business-size-heading">
          <div className="business-size-heading-copy">
            <h2 id="business-size-title">
              <span className="business-size-title-line">
                <Image
                  src="/mix-logo-outline.png"
                  width={1192}
                  height={815}
                  alt="MIX"
                  className="business-size-title-logo"
                  sizes="(max-width: 760px) 80px, 120px"
                />
                ที่พอดีกับ
              </span>
              <span>ทุกช่วงการเติบโต</span>
            </h2>
          </div>
          <p>
            <span className="business-size-description-line">
              ไม่ว่าคุณจะเพิ่งเริ่มต้น หรือกำลังขยายสาขา เลือกความสามารถ
            </span>{" "}
            <span className="business-size-description-line">
              ที่เหมาะกับคุณในวันนี้ แล้วค่อยต่อยอดในวันข้างหน้า
            </span>
          </p>
        </div>

        <div className="business-size-grid">
          {businessSizes.map((business) => (
            <Link
              key={business.title}
              href={business.href}
              className="business-size-card"
              data-tone={business.tone}
              aria-label={`${business.title} ดูแพ็กเกจที่เหมาะสม`}
            >
              <Image
                src={`/business-${business.tone}-photo.webp`}
                unoptimized
                width={1200}
                height={800}
                alt=""
                className="business-size-card-photo"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="business-size-card-copy">
                <Badge variant="secondary" className="business-size-badge">
                  {business.label}
                </Badge>
                <h3>
                  {business.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p>{business.description}</p>
              </div>
              <span className="business-size-card-cta">
                {business.cta}
                <ArrowRight aria-hidden="true" />
              </span>
              <span className="business-size-orbit" aria-hidden="true">
                <span />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
