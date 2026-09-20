"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type FieldName =
  | "fullName"
  | "email"
  | "phone"
  | "password"
  | "passwordConfirmation"
  | "consent";

type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+66|0)\d{8,9}$/;

function validate(form: FormData): Errors {
  const fullName = String(form.get("fullName") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").replace(/[\s-]/g, "");
  const password = String(form.get("password") ?? "");
  const confirmation = String(form.get("passwordConfirmation") ?? "");
  const errors: Errors = {};

  if (!fullName) errors.fullName = "กรุณากรอกชื่อ-นามสกุล";
  if (!email) errors.email = "กรุณากรอกอีเมล";
  else if (!emailPattern.test(email)) errors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
  if (!phone) errors.phone = "กรุณากรอกเบอร์โทรศัพท์";
  else if (!phonePattern.test(phone))
    errors.phone = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
  if (!password) errors.password = "กรุณากรอกรหัสผ่าน";
  else if (password.length < 8)
    errors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
  if (!confirmation) errors.passwordConfirmation = "กรุณายืนยันรหัสผ่าน";
  else if (confirmation !== password)
    errors.passwordConfirmation = "รหัสผ่านทั้งสองช่องไม่ตรงกัน";
  if (form.get("consent") !== "on")
    errors.consent = "กรุณายอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว";

  return errors;
}

type RegisterFieldProps = {
  id: Exclude<FieldName, "consent"> | "company";
  label: string;
  placeholder: string;
  icon: typeof UserRound;
  type?: "text" | "email" | "tel" | "password";
  autoComplete?: string;
  error?: string;
  optional?: boolean;
  trailing?: ReactNode;
};

function RegisterField({
  id,
  label,
  placeholder,
  icon: Icon,
  type = "text",
  autoComplete,
  error,
  optional,
  trailing,
}: RegisterFieldProps) {
  const errorId = id + "-error";
  return (
    <div className="register-field" data-invalid={error ? "true" : undefined}>
      <label htmlFor={id}>
        {label} {optional ? <span>(ไม่บังคับ)</span> : null}
      </label>
      <div className="register-input-wrap">
        <Icon aria-hidden="true" />
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
        {trailing}
      </div>
      {error ? (
        <p className="register-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [valid, setValid] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(new FormData(event.currentTarget));
    setErrors(nextErrors);
    setValid(Object.keys(nextErrors).length === 0);

    if (Object.keys(nextErrors).length) {
      const firstInvalidId = Object.keys(nextErrors)[0];
      requestAnimationFrame(() =>
        document.getElementById(firstInvalidId)?.focus(),
      );
    }
  }

  return (
    <form className="register-form" noValidate onSubmit={submit}>
      <div className="register-field-group">
        <RegisterField
          id="fullName"
          label="ชื่อ-นามสกุล"
          placeholder="ชื่อ นามสกุล"
          icon={UserRound}
          autoComplete="name"
          error={errors.fullName}
        />
        <RegisterField
          id="email"
          label="อีเมล"
          placeholder="you@company.com"
          icon={Mail}
          type="email"
          autoComplete="email"
          error={errors.email}
        />
        <RegisterField
          id="company"
          label="ชื่อบริษัท"
          placeholder="ชื่อบริษัทหรือกิจการ"
          icon={Building2}
          autoComplete="organization"
          optional
        />
        <RegisterField
          id="phone"
          label="เบอร์โทรติดต่อ"
          placeholder="08x-xxx-xxxx"
          icon={Phone}
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
        <RegisterField
          id="password"
          label="รหัสผ่าน"
          placeholder="อย่างน้อย 8 ตัวอักษร"
          icon={LockKeyhole}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          error={errors.password}
          trailing={
            <button
              className="password-toggle"
              type="button"
              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((shown) => !shown)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          }
        />
        <RegisterField
          id="passwordConfirmation"
          label="ยืนยันรหัสผ่าน"
          placeholder="กรอกรหัสผ่านอีกครั้ง"
          icon={LockKeyhole}
          type={showConfirmation ? "text" : "password"}
          autoComplete="new-password"
          error={errors.passwordConfirmation}
          trailing={
            <button
              className="password-toggle"
              type="button"
              aria-label={
                showConfirmation ? "ซ่อนรหัสผ่านยืนยัน" : "แสดงรหัสผ่านยืนยัน"
              }
              aria-pressed={showConfirmation}
              onClick={() => setShowConfirmation((shown) => !shown)}
            >
              {showConfirmation ? <EyeOff /> : <Eye />}
            </button>
          }
        />
      </div>

      <div
        className="register-consent"
        data-invalid={errors.consent ? "true" : undefined}
      >
        <input
          id="consent"
          name="consent"
          type="checkbox"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <label htmlFor="consent">
          ฉันยอมรับ <span>เงื่อนไขการใช้งาน</span> และ{" "}
          <span>นโยบายความเป็นส่วนตัว</span>
        </label>
        {errors.consent ? (
          <p className="register-error" id="consent-error" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <Button className="register-submit" type="submit" size="lg">
        สมัครและเริ่มทดลองใช้ฟรี
      </Button>

      {valid ? (
        <p className="register-status" role="status">
          ตรวจสอบข้อมูลเรียบร้อยแล้ว ระบบสมัครสมาชิกยังไม่ได้เชื่อมต่อ
        </p>
      ) : null}

      <Separator />
      <p className="register-login">
        มีบัญชีอยู่แล้ว? <Link href="/login">เข้าสู่ระบบ</Link>
      </p>
    </form>
  );
}
