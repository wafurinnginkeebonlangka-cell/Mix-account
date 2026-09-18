import { Mail, Phone } from "lucide-react";
import { Brand } from "./brand";
import { navigation, site, contactEmailHref } from "@/lib/site";
export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>{site.description}</p>
        </div>
        <nav aria-label="เมนูท้ายหน้า">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={contactEmailHref()}>
            <Mail aria-hidden="true" />
            {site.email}
          </a>
          <a href={site.phoneHref}>
            <Phone aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} GOT Balance Co., Ltd.</span>
        <span>เว็บไซต์ต้นแบบ MIX · พัฒนาโดย {site.owner}</span>
      </div>
    </footer>
  );
}
