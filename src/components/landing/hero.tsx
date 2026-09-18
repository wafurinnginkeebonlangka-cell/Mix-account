"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntryButton } from "@/components/entry-button";
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <motion.div
        initial={reduced ? false : { opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <h1 id="hero-title">
          ทุกงานบัญชี
          <br />
          <span>ง่ายขึ้น</span> ในที่เดียว
        </h1>
        <p>
          จัดการงานขาย งานซื้อ สินค้าคงคลัง และบัญชี
          <br className="desktop-break" />
          ครบจบในระบบเดียว ให้ธุรกิจคุณเดินหน้าได้มากกว่า
        </p>
        <div className="hero-actions">
          <EntryButton size="lg" entry={{ kind: "trial" }}>
            เริ่มทดลองใช้ฟรี
            <ArrowRight data-icon="inline-end" />
          </EntryButton>
          <Button size="lg" variant="outline" asChild>
            <a href="#product-demo">
              <Play data-icon="inline-start" />
              ดูการทำงานของ MIX
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
