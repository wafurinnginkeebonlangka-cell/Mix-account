"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntryButton } from "@/components/entry-button";
import { Brand } from "./brand";
import { MOBILE_QUERY, navigation } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLDivElement>(null),
    toggle = useRef<HTMLButtonElement>(null),
    desktopNav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia(MOBILE_QUERY);
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: Event) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    }
    function resized() {
      if (!media.matches) {
        if (
          document.activeElement?.closest("#mobile-nav") ||
          document.activeElement === toggle.current
        )
          desktopNav.current?.querySelector("a")?.focus();
        setOpen(false);
      }
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    media.addEventListener("change", resized);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
      media.removeEventListener("change", resized);
    };
  }, [open]);
  return (
    <header className="header-wrap" id="top" tabIndex={-1}>
      <div className="header glass" ref={header}>
        <Brand priority />
        <nav className="desktop-nav" aria-label="เมนูหลัก" ref={desktopNav}>
          {navigation.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <EntryButton
            variant="outline"
            className="login-button"
            entry={{ kind: "login" }}
          >
            เข้าสู่ระบบ
          </EntryButton>
          <EntryButton
            className="header-trial"
            entry={{ kind: "trial" }}
            onOpen={() => setOpen(false)}
          >
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </EntryButton>
          <Button
            ref={toggle}
            variant="ghost"
            size="icon-lg"
            className="menu-button"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        <nav
          id="mobile-nav"
          aria-label="เมนูมือถือ"
          className="mobile-nav"
          hidden={!open}
        >
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <EntryButton
            variant="ghost"
            entry={{ kind: "login" }}
            onOpen={() => setOpen(false)}
            returnFocus={() => toggle.current}
          >
            เข้าสู่ระบบ
          </EntryButton>
          <EntryButton
            variant="ghost"
            entry={{ kind: "trial" }}
            onOpen={() => setOpen(false)}
            returnFocus={() => toggle.current}
          >
            เริ่มทดลองใช้ฟรี
          </EntryButton>
        </nav>
      </div>
    </header>
  );
}
