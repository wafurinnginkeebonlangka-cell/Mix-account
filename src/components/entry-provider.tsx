"use client";
import { createContext, useContext, useState } from "react";
import { ArrowUpRight, Mail, Phone, Construction } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Entry = { kind: "trial" | "login" | "contact"; plan?: string };
const EntryContext = createContext<(entry: Entry) => void>(() => {});
export const useEntry = () => useContext(EntryContext);
export function EntryProvider({ children }: { children: React.ReactNode }) {
  const [entry, setEntry] = useState<Entry | null>(null);
  const title =
    entry?.kind === "login"
      ? "เข้าสู่ระบบ MIX"
      : entry?.kind === "trial"
        ? "เริ่มต้นใช้งาน MIX"
        : `สนใจ ${entry?.plan ?? "MIX"}`;
  return (
    <EntryContext.Provider value={setEntry}>
      {children}
      <Dialog
        open={!!entry}
        onOpenChange={(open) => {
          if (!open) setEntry(null);
        }}
      >
        <DialogContent className="entry-dialog">
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
              <a href="tel:0816948966">
                <Phone data-icon="inline-start" />
                081-694-8966
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`mailto:support@got-balance.com?subject=${encodeURIComponent(`สอบถาม ${entry?.plan ?? "MIX"}`)}`}
              >
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
