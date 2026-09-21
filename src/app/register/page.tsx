import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/components/auth/register-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ลงทะเบียน | MIX",
  description: "สร้างบัญชีเพื่อเริ่มต้นทดลองใช้ MIX",
};

const benefits = [
  "ทดลองใช้ฟรี ไม่ต้องใช้บัตรเครดิต",
  "เริ่มใช้งานได้ทันทีหลังสมัคร",
  "ครบทั้งบัญชี ขาย จัดซื้อ และสต็อก",
] as const;

export default function RegisterPage() {
  return (
    <main className="register-page">
      <header className="register-topbar">
        <Link
          href="/#top"
          className="register-topbar-brand"
          aria-label="MIX หน้าแรก"
        >
          <Image
            src="/mix-logo.png"
            width={74}
            height={54}
            alt={site.name}
            priority
          />
          <strong>MIX BY {site.owner}</strong>
        </Link>
        <div className="register-topbar-actions">
          <span>มีบัญชีอยู่แล้ว?</span>
          <Button variant="outline" asChild>
            <Link href="/login">เข้าสู่ระบบ</Link>
          </Button>
          <span className="register-topbar-divider" aria-hidden="true" />
          <Link href="/#top" className="register-home-link">
            <ArrowLeft aria-hidden="true" />
            กลับหน้าหลัก
          </Link>
        </div>
      </header>

      <div className="register-shell">
        <section
          className="register-intro"
          aria-labelledby="register-intro-title"
        >
          <div className="register-brand">
            <span className="register-logo">
              <Image src="/mix-logo.png" width={68} height={49} alt="" />
            </span>
            <span>
              <strong>MIX BY {site.owner}</strong>
              <em>Cloud Accounting · ERP</em>
            </span>
          </div>

          <h1 id="register-intro-title">
            เริ่มต้นการเดินทาง
            <span>ของธุรกิจคุณ</span>
          </h1>
          <p>
            สร้างบัญชีวันนี้ แล้วสัมผัสประสบการณ์การจัดการธุรกิจแบบครบวงจร
            บนแพลตฟอร์มเดียว
          </p>

          <ul className="register-benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">
                  <Check />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="register-art" aria-hidden="true">
            <span className="register-art-chart">▥</span>
            <span className="register-art-card">◔</span>
            <i />
            <p>
              จัดการธุรกิจให้เป็นเรื่องง่าย
              <br />
              กับ MIX
            </p>
          </div>
        </section>

        <section className="register-panel" aria-labelledby="register-title">
          <div className="register-panel-heading">
            <p className="register-eyebrow">SIGN UP · ลงทะเบียน</p>
            <h2 id="register-title">
              เริ่มต้นใช้งาน MIX <span>ฟรี</span>
            </h2>
            <p>สร้างบัญชีเพื่อทดลองใช้ MIX ได้ทันที ไม่ต้องใช้บัตรเครดิต</p>
          </div>
          <RegisterForm />
        </section>
      </div>
    </main>
  );
}
