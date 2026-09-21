import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cloud, Monitor, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/auth/login-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ | MIX",
  description: "เข้าสู่ระบบเพื่อใช้งาน MIX",
};

const trustItems = [
  { icon: ShieldCheck, label: "ข้อมูลได้รับการปกป้อง" },
  { icon: Monitor, label: "ใช้งานได้ทุกอุปกรณ์" },
  { icon: Cloud, label: "ระบบพร้อมให้บริการ" },
] as const;

export default function LoginPage() {
  return (
    <main className="login-page">
      <header className="login-topbar">
        <Link href="/#top" className="login-brand" aria-label="MIX หน้าแรก">
          <Image
            src="/mix-logo.png"
            width={74}
            height={54}
            alt={site.name}
            priority
          />
          <strong>MIX BY {site.owner}</strong>
        </Link>
        <div className="login-topbar-actions">
          <Link href="/#top" className="login-home-link">
            <ArrowLeft aria-hidden="true" />
            กลับหน้าหลัก
          </Link>
          <span aria-hidden="true" />
          <Button variant="outline" asChild>
            <Link href="/register">ลงทะเบียน</Link>
          </Button>
        </div>
      </header>

      <section className="login-content" aria-labelledby="login-title">
        <div className="login-panel">
          <p className="login-security">
            <ShieldCheck aria-hidden="true" />
            เข้าสู่ระบบอย่างปลอดภัย
          </p>
          <p className="login-eyebrow">SIGN IN · เข้าสู่ระบบ</p>
          <h1 id="login-title">
            เข้าสู่ <span>บัญชี</span> ของคุณ
          </h1>
          <p className="login-description">
            กรอกอีเมลและรหัสผ่านเพื่อเข้าใช้งาน MIX
          </p>
          <LoginForm />
        </div>

        <ul className="login-trust-list" aria-label="ความมั่นใจในการใช้งาน">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span aria-hidden="true">
                <Icon />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
