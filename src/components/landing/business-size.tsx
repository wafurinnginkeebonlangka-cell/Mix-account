import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const businessSizes = [
  {
    title: "ธุรกิจขนาดเล็ก",
    description: "เริ่มงานขายและจัดการเอกสารสำคัญให้เป็นระบบตั้งแต่วันแรก",
    image: "/business-small.png",
    href: "/pricing#basic",
  },
  {
    title: "ธุรกิจขนาดกลาง–ใหญ่",
    description:
      "เชื่อมงานขาย จัดซื้อ สินค้า และบัญชี เพื่อมองเห็นภาพรวมได้ชัดขึ้น",
    image: "/business-growing.png",
    href: "/pricing#pro",
  },
  {
    title: "ธุรกิจขนาดใหญ่–เฉพาะทาง",
    description:
      "รองรับหลายสาขา หลายคลัง และกระบวนการที่ต้องปรับให้เหมาะกับธุรกิจ",
    image: "/business-enterprise.png",
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
          <h2 id="business-size-title">MIX ที่พอดีกับทุกขนาดธุรกิจ</h2>
          <p>
            เลือกจุดเริ่มต้นที่เหมาะกับคุณ
            แล้วเพิ่มความสามารถได้เมื่อธุรกิจเติบโต
          </p>
        </div>

        <div className="business-size-grid">
          {businessSizes.map((business) => (
            <Link
              key={business.title}
              href={business.href}
              className="business-size-card"
              aria-label={`${business.title} ดูแพ็กเกจที่เหมาะสม`}
            >
              <div className="business-size-card-heading">
                <span className="business-size-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
                <div>
                  <h3>{business.title}</h3>
                  <p>{business.description}</p>
                </div>
              </div>
              <Image
                src={business.image}
                width={1145}
                height={1374}
                alt=""
                sizes="(max-width: 760px) 88vw, (max-width: 1100px) 44vw, 31vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
