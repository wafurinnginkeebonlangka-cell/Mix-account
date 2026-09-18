/** Public identity/navigation only. Keep credentials and API settings elsewhere. */
export const site = {
  name: "MIX",
  owner: "GOT BALANCE",
  email: "support@got-balance.com",
  phone: "081-694-8966",
  phoneHref: "tel:0816948966",
  description: "โปรแกรมบัญชีที่เติบโตไปกับธุรกิจคุณ",
} as const;
export const navigation = [
  { href: "/#features", label: "ฟีเจอร์" },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#help", label: "ช่วยเหลือ" },
] as const;
export const MOBILE_QUERY = "(max-width: 760px)";
export function contactEmailHref(subject?: string) {
  return `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
