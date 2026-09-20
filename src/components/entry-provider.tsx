"use client";
import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";
import { ArrowUpRight, Mail, Phone, Construction } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { site, contactEmailHref } from "@/lib/site";
import { Button } from "@/components/ui/button";

export type Entry = {
  kind: "trial" | "register" | "login" | "contact";
  plan?: string;
};
const EntryContext = createContext<
  ((entry: Entry, trigger?: HTMLElement) => void) | null
>(null);
export function useEntry() {
  const context = useContext(EntryContext);
  if (!context) throw new Error("useEntry must be used inside EntryProvider");
  return context;
}
export function EntryProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<Entry | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const openEntry = useCallback((next: Entry, source?: HTMLElement) => {
    trigger.current =
      source ??
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);
    setEntry(next);
  }, []);
  const title =
    entry?.kind === "login"
      ? "เข้าสู่ระบบ MIX"
      : entry?.kind === "trial"
        ? "เริ่มต้นใช้งาน MIX"
        : `สนใจ ${entry?.plan ?? "MIX"}`;
  return (
    <EntryContext.Provider value={openEntry}>
      {children}
      <Dialog
        open={!!entry}
        onOpenChange={(open) => {
          if (!open) setEntry(null);
        }}
      >
        <DialogContent
          className="entry-dialog"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const target = trigger.current;
            if (target?.isConnected && target.getClientRects().length)
              target.focus({ preventScroll: true });
            else document.getElementById("top")?.focus({ preventScroll: true });
          }}
        >
          <div className="entry-icon">
            <Construction aria-hidden="true" />
          </div>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              นี่คือเว็บไซต์ต้นแบบ
              หน้าสมัครและเข้าสู่ระบบยังไม่เชื่อมกับระบบบัญชีจริง
              จึงยังไม่รับข้อมูลบัญชีหรือรหัสผ่าน
            </DialogDescription>
          </DialogHeader>
          {entry?.plan ? (
            <p className="selected-plan">
              แพ็กเกจที่เลือก: <strong>{entry.plan}</strong>
            </p>
          ) : null}
          <p>สอบถามการใช้งานและรายละเอียดแพ็กเกจได้ที่ทีม GOT BALANCE</p>
          <div className="entry-actions">
            <Button asChild>
              <a href={site.phoneHref}>
                <Phone data-icon="inline-start" />
                {site.phone}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={contactEmailHref(`สอบถาม ${entry?.plan ?? "MIX"}`)}>
                <Mail data-icon="inline-start" />
                ส่งอีเมล
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </EntryContext.Provider>
  );
}
