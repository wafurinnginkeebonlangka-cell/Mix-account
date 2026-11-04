"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { Hero } from "@/components/landing/hero";
import { useMediaQuery } from "@/hooks/use-media-query";

function InteractiveLogo({ enabled }: { enabled: boolean }) {
  const area = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const controls = useAnimationControls();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const visible = useInView(area, { amount: 0.15 });
  const [ready, setReady] = useState(false);
  const active = enabled && finePointer && !reduced && visible && ready;
  const spring = { stiffness: 160, damping: 26, mass: 0.8 };
  const horizontal = useSpring(0, spring);
  const vertical = useSpring(0, spring);
  const lightOpacity = useSpring(0, spring);
  const x = useTransform(horizontal, [-1, 1], [-7, 7]);
  const y = useTransform(vertical, [-1, 1], [-7, 7]);
  const rotateX = useTransform(vertical, [-1, 1], [4, -4]);
  const rotateY = useTransform(horizontal, [-1, 1], [-4, 4]);
  const shadowX = useTransform(horizontal, [-1, 1], [11, 5]);
  const shadowY = useTransform(vertical, [-1, 1], [15, 9]);
  const lightX = useTransform(horizontal, [-1, 1], [-10, 10]);
  const lightY = useTransform(vertical, [-1, 1], [-10, 10]);
  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.24))`;

  useEffect(() => {
    if (reduced || !finePointer) {
      controls.stop();
      controls.set({ clipPath: "inset(-12%)", opacity: 1, y: 0 });
      return;
    }
    if (played.current) return;
    played.current = true;
    let cancelled = false;
    controls.set({ clipPath: "inset(100% 0 0 0)", opacity: 0, y: 46 });
    void controls
      .start({
        clipPath: "inset(-12%)",
        opacity: 1,
        y: 0,
        transition: {
          clipPath: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.35 },
          y: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        },
      })
      .then(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [controls, finePointer, reduced]);

  useEffect(() => {
    if (!active) {
      horizontal.jump(0);
      vertical.jump(0);
      lightOpacity.jump(0);
    }
  }, [active, horizontal, vertical, lightOpacity]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!active || event.pointerType !== "mouse") return;
    lightOpacity.set(0.12);
    const bounds = event.currentTarget.getBoundingClientRect();
    horizontal.set(
      Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
      ),
    );
    vertical.set(
      Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      ),
    );
  }

  return (
    <div
      ref={area}
      className="hero-logo-reveal logo-interaction-area"
      data-active={active}
      onPointerMove={move}
      onPointerLeave={() => {
        horizontal.set(0);
        vertical.set(0);
        lightOpacity.set(0);
      }}
      onPointerCancel={() => {
        horizontal.set(0);
        vertical.set(0);
        lightOpacity.set(0);
      }}
    >
      <motion.div
        className="logo-pointer-light"
        aria-hidden="true"
        style={{ x: lightX, y: lightY, opacity: lightOpacity }}
      />
      <motion.div initial={false} animate={controls} className="logo-entrance">
        <motion.div
          className="logo-tilt"
          style={{ x, y, rotateX, rotateY, filter, transformPerspective: 1000 }}
        >
          <Image
            src="/mix-logo-hero-depth.png"
            width={1518}
            height={1036}
            alt=""
            preload
            sizes="(max-width: 760px) 94vw, (max-width: 900px) 84vw, 660px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HeroAnimationPreview() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="hero-animation-preview">
      <Hero logoPreview={<InteractiveLogo enabled={enabled} />} />
      <aside className="logo-preview-controls" aria-label="ตั้งค่าต้นแบบโลโก้">
        <strong>ทดลองโลโก้ตอบสนองต่อเมาส์</strong>
        <p>เลื่อนเมาส์บนโลโก้เพื่อเอียงเบา ๆ เมื่อออกจากภาพจะกลับตำแหน่งเดิม</p>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />{" "}
          เปิด interactive animation
        </label>
        <p>หน้าจอสัมผัสและโหมดลดการเคลื่อนไหวจะแสดงโลโก้นิ่ง</p>
        <Link href="/">กลับหน้าแรกเดิม</Link>
      </aside>
    </div>
  );
}
