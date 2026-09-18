"use client";
import Image from "next/image";
import {
  ShoppingCart,
  ReceiptText,
  Package,
  CalendarDays,
  Building2,
  ChevronDown,
  CircleCheck,
  ArrowDownUp,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const demos = [
  {
    id: "purchase",
    label: "ระบบซื้อ",
    icon: ShoppingCart,
    title: "ใบกำกับภาษีซื้อ",
    number: "BI-2026-0001",
    party: "ผู้จำหน่าย",
    company: "บริษัท ตัวอย่าง ซัพพลาย จำกัด",
    date: "18/09/2026",
    rows: [
      ["RM-001", "วัตถุดิบ A", "100", "กก.", "120.00", "12,000.00"],
      ["RM-002", "วัตถุดิบ B", "50", "กก.", "200.00", "10,000.00"],
    ],
    subtotal: "22,000.00",
    vat: "1,540.00",
    total: "23,540.00",
  },
  {
    id: "sales",
    label: "ระบบขาย",
    icon: ReceiptText,
    title: "ใบเสนอราคา",
    number: "QT-2026-0001",
    party: "ลูกค้า",
    company: "บริษัท ตัวอย่าง รีเทล จำกัด",
    date: "18/09/2026",
    rows: [
      ["FG-001", "สินค้าสำเร็จรูป A", "20", "ชิ้น", "750.00", "15,000.00"],
      ["FG-002", "สินค้าสำเร็จรูป B", "10", "ชิ้น", "500.00", "5,000.00"],
    ],
    subtotal: "20,000.00",
    vat: "1,400.00",
    total: "21,400.00",
  },
  {
    id: "inventory",
    label: "ระบบสินค้า",
    icon: Package,
    title: "ใบรับสินค้า",
    number: "GR-2026-0001",
    party: "คลังสินค้า",
    company: "คลังสินค้าหลัก · สำนักงานใหญ่",
    date: "18/09/2026",
    rows: [
      ["FG-001", "สินค้าสำเร็จรูป A", "40", "ชิ้น", "400.00", "16,000.00"],
      ["FG-002", "สินค้าสำเร็จรูป B", "30", "ชิ้น", "250.00", "7,500.00"],
    ],
    subtotal: "23,500.00",
    vat: "—",
    total: "23,500.00",
  },
];
export function ProductPreview() {
  return (
    <section
      id="product-demo"
      className="preview-wrap container"
      aria-label="ตัวอย่างการทำงานของ MIX"
    >
      <div className="preview-caption">
        <span className="status-dot" />
        ตัวอย่างหน้าระบบ MIX
        <span className="preview-hint">ลองสลับเมนูเพื่อดูตัวอย่าง</span>
      </div>
      <Tabs defaultValue="purchase" className="product-preview glass">
        <aside className="preview-sidebar">
          <Image src="/mix-logo.png" alt="MIX" width={58} height={44} />
          <span className="sidebar-caption">พื้นที่ทำงานของคุณ</span>
          <TabsList aria-label="ตัวอย่างระบบ" className="demo-tabs">
            {demos.map((d) => (
              <TabsTrigger value={d.id} key={d.id}>
                <d.icon />
                {d.label}
                <ChevronDown />
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="sidebar-bottom">
            <Building2 />
            <span>
              GOT BALANCE
              <br />
              <small>เชื่อมทุกงานของธุรกิจ</small>
            </span>
          </div>
        </aside>
        <div className="preview-main">
          <div className="preview-toolbar">
            <span>
              <span className="toolbar-dot" />
              พื้นที่สาธิต MIX
            </span>
            <span className="company">
              <Building2 />
              บริษัท ตัวอย่าง จำกัด
            </span>
          </div>
          {demos.map((d) => (
            <TabsContent key={d.id} value={d.id} className="document-preview">
              <div className="document-title">
                <h2>{d.title}</h2>
                <Badge variant="secondary">ข้อมูลตัวอย่าง</Badge>
                <span className="document-id">{d.number}</span>
              </div>
              <div className="document-fields">
                <div>
                  <span>{d.party}</span>
                  <p>
                    <Building2 />
                    {d.company}
                  </p>
                </div>
                <div>
                  <span>เลขที่เอกสาร</span>
                  <p>{d.number}</p>
                </div>
                <div>
                  <span>วันที่เอกสาร</span>
                  <p>
                    <CalendarDays />
                    {d.date}
                  </p>
                </div>
                <div className="wide-field">
                  <span>รายละเอียด</span>
                  <p>เอกสารตัวอย่างสำหรับแสดงการทำงานของ MIX</p>
                </div>
                <div>
                  <span>สถานะเอกสาร</span>
                  <p>
                    <CircleCheck />
                    ร่างเอกสาร
                  </p>
                </div>
              </div>
              <div
                className="demo-table-scroll"
                role="region"
                aria-label={`รายการใน${d.title}`}
                tabIndex={0}
              >
                <table className="demo-table">
                  <thead>
                    <tr>
                      {[
                        "รหัสสินค้า",
                        "รายการสินค้า / บริการ",
                        "จำนวน",
                        "หน่วย",
                        "ราคา/หน่วย",
                        "มูลค่ารวม",
                      ].map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {d.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="document-bottom">
                <span className="demo-explainer">
                  <ArrowDownUp />
                  ข้อมูลเชื่อมต่อกันในระบบเดียว
                </span>
                <dl>
                  <div>
                    <dt>มูลค่าก่อนภาษี</dt>
                    <dd>{d.subtotal}</dd>
                  </div>
                  <div>
                    <dt>
                      {d.id === "inventory" ? "ภาษี" : "ภาษีมูลค่าเพิ่ม 7%"}
                    </dt>
                    <dd>{d.vat}</dd>
                  </div>
                  <div className="total">
                    <dt>มูลค่ารวมทั้งสิ้น</dt>
                    <dd>฿{d.total}</dd>
                  </div>
                </dl>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <p className="preview-footnote">
        ตัวอย่างการแสดงผล · ข้อมูลสมมติสำหรับทดลองดูหน้าตาระบบ
      </p>
    </section>
  );
}
