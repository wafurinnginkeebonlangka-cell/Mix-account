# MIX website

เว็บไซต์ต้นแบบ MIX แยกจากเว็บบริษัท GOT BALANCE โดยใช้ Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui (Radix), Framer Motion และฟอนต์ IBM Plex Sans Thai ที่เก็บในโปรเจกต์

## เปิดเว็บ

```sh
npm install
npm run dev
```

เปิด http://localhost:3001 (ไม่ใช้พอร์ต 3000 ของเว็บ GOT BALANCE)

โหมดพัฒนาใช้ Webpack พร้อม polling เพื่อหลีกเลี่ยงข้อจำกัดจำนวน file watchers บนเครื่องนี้

## ตรวจและเปิดแบบ production preview

```sh
npm run check
npm run build
npm run start
```

หยุด dev server ก่อนเปิด production preview บนพอร์ตเดียวกัน

## ขอบเขตรอบนี้

- หน้าแรก responsive: hero, ตัวอย่างระบบซื้อ/ขาย/สินค้า, ฟีเจอร์, ราคา, ตารางเปรียบเทียบ, FAQ และช่องทางติดต่อ
- เมนูมือถือ, แท็บสาธิต, สลับราคารายปี/6 เดือน, FAQ และ dialog เลือกแพ็กเกจทำงาน
- ปุ่มสมัคร/เข้าสู่ระบบแจ้งว่าเป็นต้นแบบ ไม่มีการรับ credentials หรือสร้างบัญชีจริง
- ยังไม่เชื่อม Laravel, analytics, payment หรือฐานข้อมูล
- ตั้ง noindex สำหรับต้นแบบ ต้องแก้เมื่อพร้อมเผยแพร่

## ข้อมูลและดีไซน์

- `src/lib/plans.ts`: สำเนาตารางแพ็กเกจจาก gotbalance-nextjs ราคาและฟีเจอร์ใช้แหล่งเดียว
- ทดลองฟรี 48 วันตามตารางแพ็กเกจเดิม ต้องยืนยันก่อนเผยแพร่ เพราะเว็บบริษัทเคยมีข้อความ 30 วันร่วมด้วย
- `public/`: โลโก้จริงจากเว็บไซต์ GOT BALANCE
- `design/`: แนวทางภาพที่สร้างด้วย ImageGen และข้อกำหนดการออกแบบ ไม่ใช่ไฟล์ UI ที่นำมาแปะเป็นเว็บ
- การ์ด/ตาราง/ข้อความทั้งหมดเป็น HTML ที่อ่านและโต้ตอบได้

## รอบถัดไป

1. ยืนยันเนื้อหา ราคา ระยะทดลอง และดีไซน์กับเจ้าของผลิตภัณฑ์
2. เพิ่มหน้าสมัคร เข้าสู่ระบบ และกู้รหัสผ่าน หลังทราบ Laravel endpoints และ domain จริง
3. เพิ่ม React Hook Form + Zod สำหรับฟอร์ม และ Axios/TanStack Query เมื่อเชื่อม API
4. ทดสอบ Sanctum CSRF/session, CORS credentials, logout และ session expiry จริง
5. เพิ่ม production metadata/sitemap/legal pages และ deploy บน Nginx/PM2 ตามแผน

หมายเหตุ: PDF เดิมระบุ Next.js 15 แต่โปรเจกต์ GOT BALANCE ปัจจุบันใช้ Next.js 16 จึงใช้สาย 16 เช่นกัน เวอร์ชันที่ติดตั้งแน่นอนอยู่ใน package-lock.json

## โครงสร้างสำหรับพัฒนาต่อ

- `src/app`: route, metadata, ฟอนต์, หน้า 404 และ stylesheet entry
- `src/components/layout`: brand, header และ footer ที่ใช้ซ้ำได้
- `src/components/landing`: hero และส่วนชวนเริ่มใช้งาน; section อื่นอยู่ใน `src/components`
- `src/components/ui`: primitive จาก shadcn/Radix
- `SectionHeading` และ `EntryButton`: หัวข้อ section และจุดเปิด dialog ที่ใช้ร่วมกัน
- `EntryProvider`: จัดการ dialog ส่วนกลางและคืน keyboard focus เมื่อปิด
- `src/lib/site.ts`: ข้อมูลติดต่อและ navigation; `src/lib/plans.ts`: แพ็กเกจและการคำนวณข้อความราคา
- `src/hooks/use-media-query.ts`: breakpoint สำหรับ interaction ที่ต้องปรับตามอุปกรณ์
- `src/styles`: tokens, base, layout, landing, product-preview, pricing และ feedback แยกตามหน้าที่

ใช้ Server Components เป็นค่าเริ่มต้น และ Client Components เฉพาะจุดที่มี state, browser API หรือ animation โดยรักษา design tokens เดิมใน `src/styles/tokens.css`

`npm run check` ตรวจรูปแบบโค้ด, lint และ TypeScript; `npm run format` จัดรูปแบบโค้ด ไม่มีการเชื่อมบริการภายนอกในขั้นตอนเหล่านี้

ก่อนเพิ่ม feature ควรตรวจ keyboard navigation, การคืน focus ของ dialog, เมนูมือถือหลัง resize, แท็บตัวอย่าง, ราคา/ตารางเปรียบเทียบ และ FAQ ที่ desktop/tablet/mobile อีกครั้ง ข้อมูลในหน้าตัวอย่างระบบเป็น mock data และยังไม่มีชุดทดสอบ browser อัตโนมัติ
