"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntryButton } from "@/components/entry-button";
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={reduced ? false : { opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <h1 id="hero-title">
          ทุกงาน<span className="hero-accounting">บัญชี</span>
          <span className="hero-title-second-line">
            <span className="hero-easier">ง่ายขึ้น</span> ในที่เดียว
          </span>
        </h1>
        <p>
          ระบบบัญชีและบริหารธุรกิจครบในที่เดียว ออกแบบให้ใช้งานง่าย เชื่อถือได้
          และช่วยให้คุณจัดการธุรกิจได้อย่างเป็นระบบ
        </p>
        <div className="hero-actions">
          <EntryButton size="lg" entry={{ kind: "trial" }}>
            ทดลองใช้ฟรี
          </EntryButton>
          <Button size="lg" variant="outline" asChild>
            <a href="#product-demo">
              <Play data-icon="inline-start" />
              ดูการทำงานของ MIX
            </a>
          </Button>
        </div>
      </motion.div>

      <div className="hero-brand-visual" aria-label="MIX โดย GOT BALANCE">
        <motion.div
          className="hero-logo-reveal"
          initial={
            reduced
              ? false
              : {
                  clipPath: "inset(100% 0 0 0)",
                  opacity: 0,
                  y: 46,
                }
          }
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1, y: 0 }}
          transition={{
            clipPath: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.35 },
            y: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <Image
            src="/mix-logo.png"
            width={1706}
            height={960}
            alt=""
            priority
            sizes="(max-width: 760px) 80vw, 46vw"
          />
        </motion.div>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduced ? 0 : 1.05 }}
        >
          By GOT BALANCE
        </motion.p>
      </div>
    </section>
  );
}
