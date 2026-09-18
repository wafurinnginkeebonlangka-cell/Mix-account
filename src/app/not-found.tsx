import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/layout/brand";
export default function NotFound() {
  return (
    <main className="container not-found">
      <Brand />
      <h1>ไม่พบหน้าที่คุณต้องการ</h1>
      <p>
        ลิงก์นี้อาจไม่ถูกต้อง กลับไปดูฟีเจอร์ แพ็กเกจ และช่องทางติดต่อของ MIX
        ได้ที่หน้าแรก
      </p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft data-icon="inline-start" />
          กลับหน้าแรก
        </Link>
      </Button>
    </main>
  );
}
