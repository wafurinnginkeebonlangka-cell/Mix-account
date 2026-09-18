# MIX design specification

Reference: ../Mix UXUI.jpg, user-supplied frosted accounting interface.
Concepts: 01-hero, 02-features, 03-pricing, 04-help. Generated with built-in ImageGen to guide implementation; not user-approved final artwork.

Palette: neutral #f5f6f5 background, #07543b primary, #12231e foreground, #606e68 secondary text, white translucent surfaces and white hairline borders.
Typography: self-hosted IBM Plex Sans Thai, weights 400/500/600/700. Desktop hero 76px, section headings 42px, body 16px/1.8. Mobile hero 42px and headings 30px.
Geometry: content width 1200px, 24px card corners, pill controls, soft 0 12px 40px shadows, airy 100px section spacing.
Sections: floating nav; centered hero and native interactive preview; 6 feature tiles and developer strip; 4 pricing cards plus VIP band; FAQ with contact links; green CTA; footer.
Hero allowed copy: MIX / by GOT BALANCE; ฟีเจอร์ ราคา ช่วยเหลือ; เข้าสู่ระบบ เริ่มทดลองใช้ฟรี; ทุกงานบัญชี / ง่ายขึ้น ในที่เดียว; จัดการงานขาย งานซื้อ สินค้าคงคลัง และบัญชี / ครบจบในระบบเดียว ให้ธุรกิจคุณเดินหน้าได้มากกว่า; ดูการทำงานของ MIX; ตัวอย่างหน้าระบบ MIX.
Controls: mobile nav; demo tabs for purchases/sales/inventory with rendered table state; annual/half-year pricing; comparison accordion; FAQ accordion; accessible dialogs for trial/login/package entry explaining this prototype is not connected to Laravel and offering real contact links. No collection of credentials.

Intentional corrections to generated concepts: retain actual provided MIX logo instead of invented logo; use source plans.ts features instead of invented claims, discounts or API promises; omit handwritten doodles and decorative stray English; omit invented hours/chat/social destinations; use 2026 footer; no unverified legal links. Pricing trial duration provisionally follows the source pricing table (48 days), pending business confirmation. Auth is not wired in this phase.
Motion: brief opacity/translate entrance, no parallax, honors reduced motion.
Mobile: compact nav disclosure, stacked hero, horizontally scrollable native preview table, 1-column feature/pricing cards, stacked FAQ/contact.
