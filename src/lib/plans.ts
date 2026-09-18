// ข้อมูลจากตารางราคาโปรแกรม Mix-Account V1 ใช้ร่วมกันทั้งหน้าแรกและหน้าราคา
export const TRIAL_DAYS = 48;
export type BillingPeriod = "year" | "half";

export type PlanKey = "trial" | "basic" | "pro" | "proPlus" | "vip";
export type Plan = {
  key: PlanKey;
  tier: string;
  name: string;
  desc: string;
  price: string;
  priceUnit: string;
  priceSub: string;
  halfYearPrice: string;
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
    halfYearPrice: "—",
    users: "1 ผู้ใช้งาน",
    features: [
      "1 ผู้ใช้งาน",
      "ข้อมูลพื้นฐานและเอกสารขาย",
      "พิมพ์ A4 และรายงานการขาย",
      "Export Excel / CSV",
    ],
    featured: false,
    ribbon: null,
    btnText: "เริ่มทดลองฟรี",
  },
  {
    key: "basic",
    tier: "Mix-Basic",
    name: "ระบบขาย",
    desc: "ระบบขายและระบบลูกหนี้ พร้อมรับมัดจำและรับชำระเงิน",
    price: "฿5,500",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 1 เดือน",
    halfYearPrice: "฿3,000",
    users: "7 ผู้ใช้งาน",
    features: [
      "7 ผู้ใช้งาน",
      "ระบบขายและลูกหนี้",
      "รับมัดจำ วางบิล รับชำระเงิน",
      "สิทธิ์ผู้ใช้ และ Export Excel / CSV",
    ],
    featured: false,
    ribbon: null,
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "pro",
    tier: "Mix-Pro",
    name: "ระบบซื้อและขาย",
    desc: "ดูแลการซื้อ การขาย ลูกหนี้ และเจ้าหนี้",
    price: "฿8,000",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 2 เดือน",
    halfYearPrice: "฿4,800",
    users: "12 ผู้ใช้งาน",
    features: [
      "12 ผู้ใช้งาน",
      "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้",
      "รับ / จ่ายมัดจำและเช็ค",
      "จัดการสาขา วงเงิน และรายงาน",
    ],
    featured: false,
    ribbon: null,
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "proPlus",
    tier: "Mix-Pro+",
    name: "ระบบสินค้าและบัญชี",
    desc: "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้ พร้อมระบบสินค้าและบัญชี",
    price: "฿10,000",
    priceUnit: "/ปี",
    priceSub: "รายปี ส่วนลด 2 เดือน",
    halfYearPrice: "฿6,000",
    users: "15 ผู้ใช้งาน",
    features: [
      "15 ผู้ใช้งาน",
      "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้",
      "รับ จ่าย โอน และประกอบสินค้า",
      "บันทึกบัญชีและปิดงบ",
    ],
    featured: true,
    ribbon: null,
    btnText: "เลือกแพ็กเกจ",
  },
  {
    key: "vip",
    tier: "Mix-VIP",
    name: "ระบบทรัพย์สิน",
    desc: "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้ สินค้า บัญชี และทรัพย์สิน",
    price: "ติดต่อทีมงาน",
    priceUnit: "",
    priceSub: "ราคาขึ้นกับประเภทธุรกิจ",
    halfYearPrice: "—",
    users: "มากกว่า 15 ผู้ใช้งาน",
    features: [
      "มากกว่า 15 ผู้ใช้งาน",
      "ระบบซื้อ ขาย ลูกหนี้ เจ้าหนี้",
      "ระบบสินค้า บัญชี และปิดงบ",
      "ทรัพย์สินและคำนวณค่าเสื่อม",
    ],
    featured: false,
    ribbon: null,
    btnText: "ติดต่อทีมงาน",
  },
];

export const standardPlans = plans.filter((plan) => plan.key !== "vip");
export const vipPlan = plans.find((plan) => plan.key === "vip")!;
export function planPrice(plan: Plan, period: BillingPeriod) {
  if (plan.key === "trial" || plan.key === "vip")
    return { amount: plan.price, unit: plan.priceUnit };
  return period === "year"
    ? { amount: plan.price, unit: "/ ปี" }
    : { amount: plan.halfYearPrice, unit: "/ 6 เดือน" };
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
// ช่องความสามารถพิเศษของ Mix-Pro+ และ Mix-VIP ในเอกสารไม่ได้ระบุรายละเอียด
const special = (label: string, trial: boolean, basic: boolean, pro: boolean) =>
  row(label, trial, basic, pro, "ไม่ระบุ", "ไม่ระบุ");

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
        "ราคาขึ้นกับประเภทธุรกิจ",
      ),
      row(
        "ราคา / 6 เดือน",
        ...(plans.map((p) => p.halfYearPrice) as [
          string,
          string,
          string,
          string,
          string,
        ]),
      ),
      row("ส่วนลดรายปี", "—", "1 เดือน", "2 เดือน", "2 เดือน", "—"),
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
