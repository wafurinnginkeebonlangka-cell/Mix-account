"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Menu,
  X,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEntry } from "./entry-provider";

export function Brand() {
  return (
    <a href="#" className="brand" aria-label="MIX หน้าแรก">
      <Image src="/mix-logo.png" width={68} height={49} alt="MIX" priority />
      <span>
        by <b>GOT BALANCE</b>
      </span>
    </a>
  );
}
const links = [
  ["#features", "ฟีเจอร์"],
  ["#pricing", "ราคา"],
  ["#help", "ช่วยเหลือ"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const showEntry = useEntry();
  return (
    <header className="header-wrap">
      <div className="header glass">
        <Brand />
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button
            variant="outline"
            className="login-button"
            onClick={() => showEntry({ kind: "login" })}
          >
            เข้าสู่ระบบ
          </Button>
          <Button
            className="header-trial"
            onClick={() => showEntry({ kind: "trial" })}
          >
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-button"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open ? (
          <nav id="mobile-nav" aria-label="เมนูมือถือ" className="mobile-nav">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                showEntry({ kind: "login" });
              }}
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => {
                setOpen(false);
                showEntry({ kind: "trial" });
              }}
            >
              เริ่มทดลองใช้ฟรี
            </button>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
export function Hero() {
  const showEntry = useEntry();
  const reduced = useReducedMotion();
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <motion.div
        initial={reduced ? false : { opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <h1 id="hero-title">
          ทุกงานบัญชี
          <br />
          <span>ง่ายขึ้น</span> ในที่เดียว
        </h1>
        <p>
          จัดการงานขาย งานซื้อ สินค้าคงคลัง และบัญชี
          <br className="desktop-break" />
          ครบจบในระบบเดียว ให้ธุรกิจคุณเดินหน้าได้มากกว่า
        </p>
        <div className="hero-actions">
          <Button size="lg" onClick={() => showEntry({ kind: "trial" })}>
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#product-demo">
              <Play data-icon="inline-start" />
              ดูการทำงานของ MIX
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
export function FinalCta() {
  const showEntry = useEntry();
  return (
    <section className="container">
      <div className="final-cta">
        <h2>ให้เรื่องบัญชีง่ายขึ้น ตั้งแต่วันนี้</h2>
        <p>เริ่มต้นด้วย MIX แล้วให้เวลากับการเติบโตของธุรกิจคุณ</p>
        <div className="hero-actions">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => showEntry({ kind: "trial" })}
          >
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="inverse"
            size="lg"
            onClick={() => showEntry({ kind: "contact" })}
          >
            ติดต่อทีมงาน
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>โปรแกรมบัญชีที่เติบโตไปกับธุรกิจคุณ</p>
        </div>
        <nav aria-label="เมนูท้ายหน้า">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href="mailto:support@got-balance.com">
            <Mail />
            support@got-balance.com
          </a>
          <a href="tel:0816948966">
            <Phone />
            081-694-8966
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 GOT Balance Co., Ltd.</span>
        <span>เว็บไซต์ต้นแบบ MIX · พัฒนาโดย GOT BALANCE</span>
      </div>
    </footer>
  );
}
