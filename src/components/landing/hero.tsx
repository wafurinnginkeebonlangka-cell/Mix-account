"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntryButton } from "@/components/entry-button";
export function Hero({ logoPreview }: { logoPreview?: ReactNode } = {}) {
  const reduced = useReducedMotion();
  return (
    <div className="hero-band">
      <section className="hero container" aria-labelledby="hero-title">
        <motion.div
          className="hero-copy"
          initial={reduced ? false : { opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <h1 id="hero-title">
            <span className="hero-title-line">
              ทุกงาน<span className="hero-title-green">บัญชี</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-title-red">ง่ายขึ้น</span> ในที่เดียว
            </span>
          </h1>
          <p>
            <span className="hero-description-line">
              ระบบบัญชีและบริหารธุรกิจที่เชื่อมงานขาย ซื้อ สินค้า และการเงิน
            </span>{" "}
            <span className="hero-description-line">
              ไว้ในที่เดียว เพื่อให้คุณเห็นภาพรวมชัดขึ้น
              และตัดสินใจได้มั่นใจกว่าเดิม
            </span>
          </p>
          <div className="hero-actions">
            <EntryButton size="lg" entry={{ kind: "trial" }}>
              เริ่มทดลองใช้ฟรี 48 วัน
              <ArrowRight data-icon="inline-end" />
            </EntryButton>
            <Button size="lg" variant="inverse" asChild>
              <a href="#product-demo">
                <Play data-icon="inline-start" />
                ดูภาพรวมระบบ
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="hero-brand-visual" aria-label="MIX">
          {logoPreview ?? (
            <div className="hero-logo-reveal hero-logo-flat">
              <motion.div
                className="hero-logo-entrance"
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
                  src="/mix-logo-hero-flat.png"
                  width={1518}
                  height={1036}
                  alt=""
                  priority
                  sizes="(max-width: 760px) 80vw, 46vw"
                />
              </motion.div>
            </div>
          )}
        </div>
      </section>
      <div className="hero-proof">
        <div className="container hero-proof-row">
          <div className="hero-proof-brand">
            <span>พัฒนาโดย</span>
            <Image
              src="/got-balance-wordmark.png"
              width={241}
              height={30}
              alt="GOT BALANCE"
            />
          </div>
          <p className="hero-proof-intro">
            <span>
              ออกแบบมาให้ทีมทำงาน
              <br />
              ได้ในจังหวะเดียวกัน
            </span>
          </p>
          <div className="hero-proof-stat">
            <b>48 วัน</b>
            <span>ทดลองใช้งานเต็มระบบ</span>
          </div>
          <div className="hero-proof-standard">
            <ShieldCheck aria-hidden="true" />
            <span className="hero-proof-standard-copy">
              <small>มาตรฐานการพัฒนาซอฟต์แวร์</small>
              <b>ISO/IEC 29110-4-1:2018</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
