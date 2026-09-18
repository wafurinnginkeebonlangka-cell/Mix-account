"use client";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
const faqs = [
  [
    "MIX เหมาะกับธุรกิจแบบไหน?",
    "เหมาะกับธุรกิจที่ต้องการจัดการเอกสารขาย งานซื้อ สินค้า และบัญชีร่วมกัน เลือกแพ็กเกจตามงานที่ใช้และจำนวนผู้ใช้งาน หรือปรึกษาทีมงานเพื่อเลือกให้เหมาะกับธุรกิจของคุณ",
  ],
  [
    "ทดลองฟรีได้อะไรบ้าง?",
    "แพ็กเกจทดลองฟรีตามตารางปัจจุบันเปิดให้ใช้ 48 วัน สำหรับ 1 ผู้ใช้งาน ครอบคลุมข้อมูลพื้นฐานและเอกสารขาย พิมพ์ A4 รายงานการขาย และส่งออก Excel / CSV ไม่ใช่ทุกฟีเจอร์ของแพ็กเกจเสียเงิน",
  ],
  [
    "ต้องติดตั้งโปรแกรมไหม?",
    "MIX เป็นระบบบนคลาวด์ สามารถเข้าถึงผ่านเว็บเบราว์เซอร์และการเชื่อมต่ออินเทอร์เน็ต สอบถามทีมงานเกี่ยวกับอุปกรณ์และรูปแบบการใช้งานที่เหมาะสมได้",
  ],
  [
    "เริ่มใช้งานอย่างไร?",
    "เลือกแพ็กเกจที่ต้องการแล้วติดต่อทีมงานเพื่อเริ่มต้นใช้งาน เว็บไซต์นี้เป็นต้นแบบหน้าต้อนรับ การสมัครและเข้าสู่ระบบจริงจะเชื่อมกับระบบ MIX ในขั้นตอนถัดไป",
  ],
];
export function Help() {
  return (
    <section id="help" className="section container help-grid">
      <div className="help-intro">
        <span className="section-rule" />
        <h2>
          มีคำถาม?
          <br />
          เราพร้อมช่วย
        </h2>
        <p>
          ทีม GOT BALANCE พร้อมให้คำปรึกษา
          <br />
          เพื่อให้คุณเริ่มใช้ MIX ได้อย่างมั่นใจ
        </p>
        <div className="contact-options">
          <a href="mailto:support@got-balance.com">
            <span className="contact-icon glass">
              <Mail />
            </span>
            <span>
              <strong>ส่งอีเมล</strong>
              <small>support@got-balance.com</small>
            </span>
            <ArrowUpRight />
          </a>
          <a href="tel:0816948966">
            <span className="contact-icon glass">
              <Phone />
            </span>
            <span>
              <strong>โทรสอบถาม</strong>
              <small>081-694-8966</small>
            </span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <Accordion type="single" collapsible className="faq-list">
        {faqs.map(([q, a], i) => (
          <AccordionItem value={`faq-${i}`} key={q} className="glass">
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
