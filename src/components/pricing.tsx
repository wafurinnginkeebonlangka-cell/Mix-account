"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { plans, planPrice, type BillingPeriod } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { EntryButton } from "@/components/entry-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const paidPlans = plans.filter((plan) => plan.key !== "trial");

export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("month");

  return (
    <section
      id="pricing"
      className="section pricing-section"
      aria-labelledby="pricing-title"
      tabIndex={-1}
    >
      <div className="container pricing-container">
        <div className="pricing-heading">
          <h2 id="pricing-title">แพ็กเกจที่พอดีกับธุรกิจคุณ</h2>
          <div className="pricing-heading-copy">
            <ToggleGroup
              type="single"
              value={period}
              onValueChange={(value) => {
                if (
                  value === "year" ||
                  value === "quarter" ||
                  value === "month"
                )
                  setPeriod(value);
              }}
              className="billing-toggle"
              aria-label="รอบการชำระเงิน"
            >
              <ToggleGroupItem value="month">รายเดือน</ToggleGroupItem>
              <ToggleGroupItem value="quarter">3 เดือน</ToggleGroupItem>
              <ToggleGroupItem value="year">รายปี</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <p className="sr-only" role="status">
          {period === "year"
            ? "แสดงราคารายปี"
            : period === "quarter"
              ? "แสดงราคาสำหรับ 3 เดือน"
              : "แสดงราคารายเดือน"}{" "}
          ·{" "}
          {paidPlans
            .map((plan) => `${plan.tier} ${planPrice(plan, period).amount}`)
            .join(" · ")}
        </p>

        <div className="pricing-grid">
          {paidPlans.map((plan) => (
            <Card
              key={plan.key}
              className={cn(
                "price-card",
                plan.featured && "featured",
                plan.key === "vip" && "vip-card",
              )}
            >
              {plan.ribbon ? (
                <span className="plan-ribbon" aria-label="แพ็กเกจแนะนำ">
                  {plan.ribbon}
                </span>
              ) : null}
              <CardHeader>
                <span className="plan-category">{plan.name}</span>
                <CardTitle>
                  <h3>{plan.tier}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="price">
                  <strong>
                    {(() => {
                      const amount = planPrice(plan, period).amount;
                      const match = amount.match(/^(เริ่มต้น)\s(.+)$/);
                      if (!match) return amount;
                      return (
                        <>
                          <span className="price-prefix">{match[1]}</span>{" "}
                          {match[2]}
                        </>
                      );
                    })()}
                  </strong>
                  <span>{planPrice(plan, period).unit}</span>
                </div>
                <div className="price-subline">
                  {period === "year" ? (
                    <>
                      <span className="regular-year-price">
                        ราคาปกติ {plan.regularYearPrice} / ปี
                      </span>
                      <span className="year-saving">
                        ประหยัด {plan.yearSavings}
                      </span>
                    </>
                  ) : (
                    <span>
                      {period === "quarter"
                        ? "ชำระทุก 3 เดือน"
                        : "ชำระแบบรายเดือน"}
                    </span>
                  )}
                </div>
                <p className="price-summary">{plan.desc}</p>
                <Link
                  href={`/pricing#${plan.key}`}
                  className="plan-detail-link"
                >
                  ดูรายละเอียดแพ็กเกจ
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pricing-actions">
          <EntryButton entry={{ kind: "trial" }}>
            ทดลองใช้ฟรี 48 วัน
          </EntryButton>
          <Link href="/pricing" className="pricing-detail-link">
            ดูรายละเอียดราคาทั้งหมด
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
