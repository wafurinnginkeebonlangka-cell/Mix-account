"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type LoginErrors = Partial<Record<"email" | "password", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const nextErrors: LoginErrors = {};

    if (!email) nextErrors.email = "กรุณากรอกอีเมล";
    else if (!emailPattern.test(email))
      nextErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
    if (!password) nextErrors.password = "กรุณากรอกรหัสผ่าน";

    setErrors(nextErrors);
    setStatus(
      Object.keys(nextErrors).length === 0
        ? "ตรวจสอบข้อมูลเรียบร้อยแล้ว ระบบเข้าสู่ระบบยังไม่ได้เชื่อมต่อ"
        : "",
    );

    if (Object.keys(nextErrors).length) {
      const firstInvalidId = Object.keys(nextErrors)[0];
      requestAnimationFrame(() =>
        document.getElementById(firstInvalidId)?.focus(),
      );
    }
  }

  return (
    <form className="login-form" noValidate onSubmit={submit}>
      <div className="login-field" data-invalid={errors.email || undefined}>
        <label htmlFor="email">อีเมล</label>
        <div className="login-input-wrap">
          <Mail aria-hidden="true" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "login-email-error" : undefined}
          />
        </div>
        {errors.email ? (
          <p id="login-email-error" className="login-error" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="login-field" data-invalid={errors.password || undefined}>
        <label htmlFor="password">รหัสผ่าน</label>
        <div className="login-input-wrap">
          <LockKeyhole aria-hidden="true" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="กรอกรหัสผ่าน"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            aria-describedby={
              errors.password ? "login-password-error" : undefined
            }
          />
          <button
            type="button"
            className="login-password-toggle"
            aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((shown) => !shown)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password ? (
          <p id="login-password-error" className="login-error" role="alert">
            {errors.password}
          </p>
        ) : null}
      </div>

      <div className="login-options">
        <label>
          <input name="remember" type="checkbox" />
          <span>จดจำฉัน</span>
        </label>
        <button
          type="button"
          onClick={() =>
            setStatus("ระบบกู้คืนรหัสผ่านยังไม่ได้เชื่อมต่อในเว็บไซต์ต้นแบบ")
          }
        >
          ลืมรหัสผ่าน?
        </button>
      </div>

      <Button className="login-submit" type="submit" size="lg">
        เข้าสู่ระบบด้วยอีเมล
        <ArrowRight data-icon="inline-end" />
      </Button>

      {status ? (
        <p className="login-status" role="status">
          {status}
        </p>
      ) : null}

      <div className="login-divider">
        <Separator />
        <span>หรือเข้าสู่ระบบด้วย</span>
        <Separator />
      </div>

      <div className="social-login" aria-label="ตัวเลือกเข้าสู่ระบบอื่น">
        <button
          type="button"
          onClick={() => setStatus("Google Login ยังไม่ได้เชื่อมต่อ")}
        >
          <span className="social-mark google" aria-hidden="true">
            G
          </span>
          Google
        </button>
        <button
          type="button"
          onClick={() => setStatus("LINE Login ยังไม่ได้เชื่อมต่อ")}
        >
          <span className="social-mark line" aria-hidden="true">
            LINE
          </span>
          LINE
        </button>
        <button
          type="button"
          onClick={() => setStatus("Facebook Login ยังไม่ได้เชื่อมต่อ")}
        >
          <span className="social-mark facebook" aria-hidden="true">
            f
          </span>
          Facebook
        </button>
      </div>

      <Separator />
      <p className="login-register-link">
        ยังไม่มีบัญชี? <Link href="/register">เริ่มลงทะเบียนทดลองใช้ฟรี</Link>
      </p>
    </form>
  );
}
