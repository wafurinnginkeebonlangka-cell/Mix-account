import Link from "next/link";
import { site, contactEmailHref } from "@/lib/site";

const exploreLinks = [
  { href: "/#features", label: "ความสามารถ" },
  { href: "/#product-demo", label: "ภาพรวมระบบ" },
  { href: "/pricing", label: "แพ็กเกจและราคา" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link
              href="/#top"
              className="footer-brand"
              aria-label="MIX หน้าแรก"
            >
              <span className="footer-brand-logo">
                <svg viewBox="0 0 1256 815" role="img" aria-label="MIX">
                  <defs>
                    <image
                      id="footer-mix-source"
                      href="/mix-logo-outline.png"
                      width="1192"
                      height="815"
                    />
                    <clipPath id="footer-mix-m">
                      <rect x="0" y="173" width="660" height="642" />
                    </clipPath>
                    <clipPath id="footer-mix-i">
                      <rect x="620" y="0" width="185" height="180" />
                      <rect x="668" y="205" width="90" height="530" />
                    </clipPath>
                    <clipPath id="footer-mix-x">
                      <path
                        clipRule="evenodd"
                        d="M660 0H1192V815H660Z M660 0H805V180H660Z M660 205H758V735H660Z"
                      />
                    </clipPath>
                  </defs>
                  <use
                    href="#footer-mix-source"
                    clipPath="url(#footer-mix-m)"
                  />
                  <g transform="translate(32 0)">
                    <use
                      href="#footer-mix-source"
                      clipPath="url(#footer-mix-i)"
                    />
                  </g>
                  <g transform="translate(64 0)">
                    <use
                      href="#footer-mix-source"
                      clipPath="url(#footer-mix-x)"
                    />
                  </g>
                </svg>
              </span>
            </Link>
            <p>
              ระบบบัญชีและบริหารธุรกิจ ที่ทำให้ทุกทีมทำงานได้
              <br />
              ชัดเจนกว่าเดิม
            </p>
          </div>

          <nav className="footer-links" aria-label="สำรวจ MIX">
            <h2>สำรวจ MIX</h2>
            {exploreLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            <h2>ติดต่อเรา</h2>
            <a href={contactEmailHref()}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <Link href="/register">เริ่มทดลองใช้ฟรี</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GOT Balance Co., Ltd.</span>
          <span>พัฒนาด้วยมาตรฐาน ISO/IEC 29110-4-1:2018</span>
        </div>
      </div>
    </footer>
  );
}
