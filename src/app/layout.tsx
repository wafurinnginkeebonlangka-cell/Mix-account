import type { Metadata } from "next";
import "@fontsource/sarabun/400.css";
import "@fontsource/sarabun/500.css";
import "@fontsource/sarabun/600.css";
import "@fontsource/sarabun/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIX — ทุกงานบัญชี ง่ายขึ้นในที่เดียว",
  description:
    "MIX โปรแกรมบัญชีและระบบ ERP โดย GOT BALANCE เชื่อมงานขาย งานซื้อ สินค้าคงคลัง และบัญชีไว้ในที่เดียว เปรียบเทียบแพ็กเกจและเริ่มต้นใช้งาน",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
