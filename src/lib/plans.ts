// ข้อมูลจากตารางราคาโปรแกรม Mix-Account V1 ใช้ร่วมกันทั้งหน้าแรกและหน้าราคา
export const TRIAL_DAYS = 48;
export type BillingPeriod = "month" | "quarter" | "year";

export type PlanKey = "trial" | "basic" | "pro" | "proPlus" | "vip";
export type Plan = {
  key: PlanKey;
  tier: string;
  name: string;
  desc: string;
  price: string;
  priceUnit: string;
  priceSub: string;
  monthlyPrice: string;
  quarterlyPrice: string;
  regularYearPrice: string;
  yearSavings: string;
  users: string;
  features: string[];
  featured: boolean;
  ribbon: string | null;
  btnText: string;
};

export const plans: Plan[] = [
  {
    key: "trial",
    tier: "ทดลองฟรี",
    name: "เปิดบิลขาย",
    desc: `ทดลองระบบพื้นฐานและระบบขายฟรี ${TRIAL_DAYS} วัน`,
    price: "฿0",
    priceUnit: `/ ${TRIAL_DAYS} วัน`,
    priceSub: `ทดลองฟรี ${TRIAL_DAYS} วัน`,
    monthlyPrice: "—",
    quarterlyPrice: "—",
    regularYearPrice: "—",
    yearSavings: "—",
    users: "1 ผู้ใช้งาน",
    features: [
      "1 ผู้ใช้งาน",
      "ข้อมูลบริษัท ลูกหนี้ สินค้า และพนักงานขาย",
      "ออกใบเสนอราคา บิลขาย และใบกำกับภาษี",
      "พิมพ์เอกสาร A4 และดูรายงานยอดขาย",
      `ทดลองใช้งานเต็ม ${TRIAL_DAYS} วัน พร้อม Export Excel / CSV`,
    ],
    featured: false,
    ribbon: null,
    btnText: "เริ่มทดลองฟรี",
  },
  {
    key: "basic",
    tier: "MIX BASIC",
    name: "ระบบขาย",
    desc: "ระบบขายและระบบลูกหนี้ พร้อมรับมัดจำและรับชำระเงิน",
    price: "฿5,500",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 1 เดือน",
    monthlyPrice: "฿500",
    quarterlyPrice: "฿1,500",
    regularYearPrice: "฿6,000",
    yearSavings: "฿500",
    users: "7 ผู้ใช้งาน",
    features: [
      "7 ผู้ใช้งาน",
      "รวมระบบขายและเอกสารทั้งหมดจากแพ็กเกจทดลอง",
      "จัดการลูกหนี้ ใบลดหนี้ ใบเพิ่มหนี้ และคืนสินค้า",
      "รับมัดจำ วางบิล รับชำระ และติดตามยอดค้าง",
      "กำหนดสิทธิ์ผู้ใช้และรองรับหน่วยสินค้าแบบแพ็ก",
      "รายงานลูกหนี้ การรับเงิน พร้อม Export Excel / CSV",
    ],
    featured: false,
    ribbon: null,
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "pro",
    tier: "MIX PLUS",
    name: "ระบบซื้อและขาย",
    desc: "ดูแลการซื้อ การขาย ลูกหนี้ และเจ้าหนี้",
    price: "฿8,000",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 2 เดือน",
    monthlyPrice: "฿800",
    quarterlyPrice: "฿2,400",
    regularYearPrice: "฿9,600",
    yearSavings: "฿1,600",
    users: "12 ผู้ใช้งาน",
    features: [
      "12 ผู้ใช้งาน",
      "รวมความสามารถทั้งหมดของ MIX BASIC",
      "ระบบซื้อ เจ้าหนี้ ใบขอซื้อ ใบสั่งซื้อ และบิลซื้อ",
      "รับ–จ่ายมัดจำ ชำระเงิน และบริหารเช็ค",
      "จัดการหลายสาขา กำหนดวงเงิน และควบคุมสต็อก",
      "รายงานซื้อ เจ้าหนี้ ภาษี และกำไรขาดทุนเบื้องต้น",
    ],
    featured: false,
    ribbon: null,
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "proPlus",
    tier: "MIX PRO",
    name: "ระบบสินค้าและบัญชี",
    desc: "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้ พร้อมระบบสินค้าและบัญชี",
    price: "฿10,000",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 2 เดือน",
    monthlyPrice: "฿1,000",
    quarterlyPrice: "฿3,000",
    regularYearPrice: "฿12,000",
    yearSavings: "฿2,000",
    users: "15 ผู้ใช้งาน",
    features: [
      "15 ผู้ใช้งาน",
      "รวมความสามารถทั้งหมดของ MIX PRO",
      "ระบบสินค้า รับ–จ่าย–โอน และจัดการหลายคลัง",
      "ประกอบสินค้า ควบคุมวัตถุดิบ และตรวจนับสต็อก",
      "บันทึกบัญชี ยอดยกมา งบการเงิน และปิดงบ",
      "รายงานครบทั้งขาย ซื้อ สินค้า บัญชี และภาษี",
    ],
    featured: true,
    ribbon: "แนะนำ",
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "vip",
    tier: "MIX VIP",
    name: "ระบบทรัพย์สิน",
    desc: "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้ สินค้า บัญชี และทรัพย์สิน",
    price: "เริ่มต้น ฿26,000",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 2 เดือน",
    monthlyPrice: "เริ่มต้น ฿2,600",
    quarterlyPrice: "เริ่มต้น ฿7,800",
    regularYearPrice: "฿31,200",
    yearSavings: "฿5,200",
    users: "มากกว่า 15 ผู้ใช้งาน",
    features: [
      "มากกว่า 15 ผู้ใช้งาน",
      "รวมความสามารถทั้งหมดของ MIX PLUS",
      "ทะเบียนทรัพย์สิน ยอดยกมา และคำนวณค่าเสื่อม",
      "รองรับผู้ใช้จำนวนมาก หลายสาขา และหลายคลัง",
      "ปรับระบบและรายงานให้เหมาะกับประเภทธุรกิจ",
      "ทีมผู้เชี่ยวชาญให้คำปรึกษาและดูแลการเริ่มใช้งาน",
    ],
    featured: false,
    ribbon: null,
    btnText: "ติดต่อทีมงาน",
  },
];

export function planPrice(plan: Plan, period: BillingPeriod) {
  if (plan.key === "trial") return { amount: plan.price, unit: plan.priceUnit };
  if (period === "year") return { amount: plan.price, unit: "/ ปี" };
  if (period === "quarter")
    return { amount: plan.quarterlyPrice, unit: "/ 3 เดือน" };
  return { amount: plan.monthlyPrice, unit: "/ เดือน" };
}

type ComparisonRow = { label: string } & Record<PlanKey, string | boolean>;
const row = (
  label: string,
  trial: string | boolean,
  basic: string | boolean,
  pro: string | boolean,
  proPlus: string | boolean,
  vip: string | boolean,
): ComparisonRow => ({ label, trial, basic, pro, proPlus, vip });
const fromBasic = (label: string) => row(label, false, true, true, true, true);
const fromPro = (label: string) => row(label, false, false, true, true, true);
const fromProPlus = (label: string) =>
  row(label, false, false, false, true, true);
// ความสามารถพิเศษของ Mix-Pro ที่ระบุในเอกสาร ถือว่า Mix-Pro+ และ Mix-VIP มีเช่นกัน (แพ็กเกจสูงกว่าไม่ตัดความสามารถของแพ็กเกจล่าง)
const special = (label: string, trial: boolean, basic: boolean, pro: boolean) =>
  row(label, trial, basic, pro, true, true);

export const comparisonGroups: { group: string; rows: ComparisonRow[] }[] = [
  {
    group: "ราคาและจำนวนผู้ใช้งาน",
    rows: [
      row(
        "ราคา / ปี",
        `ฟรี ${TRIAL_DAYS} วัน`,
        "฿5,500",
        "฿8,000",
        "฿10,000",
        "เริ่มต้น ฿26,000",
      ),
      row(
        "ราคา / เดือน",
        ...(plans.map((p) => p.monthlyPrice) as [
          string,
          string,
          string,
          string,
          string,
        ]),
      ),
      row(
        "ราคา / 3 เดือน",
        ...(plans.map((p) => p.quarterlyPrice) as [
          string,
          string,
          string,
          string,
          string,
        ]),
      ),
      row("ราคาปกติ / ปี", "—", "฿6,000", "฿9,600", "฿12,000", "฿31,200"),
      row(
        "ส่วนลดรายปี",
        "—",
        "ประหยัด ฿500",
        "ประหยัด ฿1,600",
        "ประหยัด ฿2,000",
        "ประหยัด ฿5,200",
      ),
      row(
        "จำนวนผู้ใช้งาน",
        ...(plans.map((p) => p.users) as [
          string,
          string,
          string,
          string,
          string,
        ]),
      ),
    ],
  },
  {
    group: "ระบบพื้นฐาน",
    rows: [
      row(
        "ข้อมูลบริษัท ลูกหนี้ สินค้า และพนักงานขาย",
        true,
        true,
        true,
        true,
        true,
      ),
      fromBasic("ข้อมูลเจ้าหนี้ คลัง / โกดัง และลูกหนี้ยกมา"),
      fromPro("เจ้าหนี้ เช็ครับ / เช็คจ่าย และเงินมัดจำรับ / จ่ายยกมา"),
      fromProPlus("สินค้ายกมาและงบการเงินยกมา"),
      row("ทรัพย์สินยกมา", false, false, false, false, true),
    ],
  },
  {
    group: "ระบบขายและระบบลูกหนี้",
    rows: [
      row("ใบเสนอราคา ใบจอง / ใบรับ Order", true, true, true, true, true),
      row(
        "บิลขาย / ใบกำกับภาษี / ใบแจ้งหนี้ / ใบส่งของ",
        true,
        true,
        true,
        true,
        true,
      ),
      fromBasic("ใบลดหนี้ (คืนสินค้า / ลดราคา) และใบเพิ่มหนี้"),
      fromBasic("ใบรับเงินมัดจำ ใบวางบิล / ใบรับชำระเงิน"),
      fromPro("ลูกหนี้อื่น / รายได้อื่น และบันทึกเช็ครับผ่าน"),
    ],
  },
  {
    group: "ระบบซื้อและระบบเจ้าหนี้",
    rows: [
      fromPro("ใบขอซื้อ ใบสั่งซื้อ และบิลซื้อ"),
      fromPro("ใบลดหนี้ซื้อ (คืนสินค้า / ลดราคา) และใบเพิ่มหนี้ / เพิ่มต้นทุน"),
      fromPro("ใบจ่ายเงินมัดจำ ใบเตรียมจ่าย / ใบจ่ายชำระเงิน"),
      fromPro("เจ้าหนี้อื่น / ค่าใช้จ่ายอื่น และบันทึกเช็คจ่ายผ่าน"),
    ],
  },
  {
    group: "ระบบสินค้า บัญชี และทรัพย์สิน",
    rows: [
      fromProPlus("ใบรับสินค้า ใบจ่ายสินค้า และใบโอนสินค้า"),
      fromProPlus("ประกอบสินค้าและปรับยอดสินค้าจากการตรวจนับ"),
      fromProPlus("บันทึกรายการบัญชี"),
      fromProPlus("บันทึกสินค้า / วัตถุดิบคงเหลือปลายงวด และปิดงบบัญชี"),
      row("ระบบทรัพย์สิน / คำนวณค่าเสื่อม", false, false, false, false, true),
    ],
  },
  {
    group: "ความสามารถพิเศษและรายงาน",
    rows: [
      special("พิมพ์ใบเสนอราคา ใบจอง และใบกำกับภาษี A4", true, true, true),
      special("พิมพ์กระดาษต่อเนื่องตามฟอร์ม", false, true, true),
      special("คำนวณอัตราแลกเปลี่ยนและกำหนดทศนิยมราคา", false, true, true),
      special(
        "กำหนดสิทธิ์ผู้ใช้งาน และแยกหน่วยสินค้า pack / เศษ",
        false,
        true,
        true,
      ),
      special("ป้องกันการขายสินค้าเมื่อไม่มีจำนวน", false, false, true),
      special("เปลี่ยน / ยุบรวมรหัสลูกหนี้และเจ้าหนี้", false, false, true),
      special(
        "เพิ่มสาขาบริษัท ลูกหนี้ เจ้าหนี้ และกำหนดวงเงิน",
        false,
        false,
        true,
      ),
      special("Export รายงานเป็น Excel / CSV", true, true, true),
      special(
        "รายงานใบเสนอราคา ใบจอง สรุปบิลขาย ประวัติขาย และภาษีขาย",
        true,
        true,
        true,
      ),
      special(
        "รายงานใบเพิ่มหนี้ สินค้าค้างส่ง สรุปรายเดือน และสินค้าไม่เคลื่อนไหว",
        false,
        true,
        true,
      ),
      special(
        "รายงานลูกหนี้ การรับเงิน เช็ครับ และเงินมัดจำ",
        false,
        true,
        true,
      ),
      special("รายงานกำไรขาดทุนเบื้องต้น", false, false, true),
      special(
        "รายงานซื้อ เจ้าหนี้ และหนังสือรับรองหักภาษี / ภงด.",
        false,
        false,
        true,
      ),
    ],
  },
];
