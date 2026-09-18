"use client";
import { useState } from "react";
import { Check, Minus, ArrowRight, Building2 } from "lucide-react";
import {
  plans,
  comparisonGroups,
  standardPlans,
  vipPlan,
  planPrice,
  type BillingPeriod,
} from "@/lib/plans";
import { cn } from "@/lib/utils";
import { EntryButton } from "@/components/entry-button";
import { SectionHeading } from "@/components/section-heading";
import { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("year");
  return (
    <section
      id="pricing"
      className="section pricing-section"
      aria-labelledby="pricing-title"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHeading
          id="pricing-title"
          title="เลือก MIX ที่พอดีกับธุรกิจคุณ"
          description="เริ่มจากสิ่งที่ต้องใช้ แล้วเติบโตไปด้วยกัน"
          centered
        />
        <ToggleGroup
          type="single"
          value={period}
          onValueChange={(v) => {
            if (v === "year" || v === "half") setPeriod(v);
          }}
          className="billing-toggle"
          aria-label="รอบการชำระเงิน"
        >
          <ToggleGroupItem value="year">รายปี</ToggleGroupItem>
          <ToggleGroupItem value="half">6 เดือน</ToggleGroupItem>
        </ToggleGroup>
        <p className="sr-only" role="status">
          {period === "year" ? "แสดงราคารายปี" : "แสดงราคาสำหรับ 6 เดือน"} ·{" "}
          {standardPlans
            .filter((p) => p.key !== "trial")
            .map((p) => `${p.tier} ${planPrice(p, period).amount}`)
            .join(" · ")}
        </p>
        <div className="pricing-grid">
          {standardPlans.map((p) => (
            <Card
              key={p.key}
              className={cn("price-card glass", p.featured && "featured")}
            >
              <CardHeader>
                <span className="plan-category">{p.name}</span>
                <CardTitle>
                  <h3>{p.tier}</h3>
                </CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="price">
                  <strong>{planPrice(p, period).amount}</strong>
                  <span>{planPrice(p, period).unit}</span>
                </div>
                <p className="plan-users">{p.users}</p>
                <ul>
                  {p.features
                    .filter((feature) => feature !== p.users)
                    .map((f) => (
                      <li key={f}>
                        <Check aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <EntryButton
                  variant={p.key === "trial" ? "outline" : "default"}
                  entry={{
                    kind: p.key === "trial" ? "trial" : "contact",
                    plan: p.tier,
                  }}
                  aria-label={
                    p.key === "trial"
                      ? "เริ่มทดลองใช้ฟรี"
                      : `เลือกแพ็กเกจ ${p.tier}`
                  }
                >
                  {p.key === "trial" ? "เริ่มทดลองใช้ฟรี" : "เลือกแพ็กเกจ"}
                  <ArrowRight data-icon="inline-end" />
                </EntryButton>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="vip-band glass">
          <div className="vip-title">
            <Building2 />
            <div>
              <h3>{vipPlan.tier}</h3>
              <p>{vipPlan.users}</p>
            </div>
          </div>
          <p>
            ระบบซื้อ ขาย สินค้า บัญชี และทรัพย์สิน
            <br />
            <span>{vipPlan.priceSub}</span>
          </p>
          <EntryButton
            variant="outline"
            entry={{ kind: "contact", plan: vipPlan.tier }}
          >
            ติดต่อทีมงาน
            <ArrowRight data-icon="inline-end" />
          </EntryButton>
        </div>
        <Accordion type="single" collapsible className="comparison">
          <AccordionItem value="compare">
            <AccordionTrigger>เปรียบเทียบรายละเอียดทุกแพ็กเกจ</AccordionTrigger>
            <AccordionContent>
              <div
                className="comparison-scroll"
                role="region"
                aria-label="ตารางเปรียบเทียบแพ็กเกจ"
                tabIndex={0}
              >
                <table>
                  <caption className="sr-only">
                    รายละเอียดความสามารถและราคาของแต่ละแพ็กเกจ MIX
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">ความสามารถ</th>
                      {plans.map((p) => (
                        <th scope="col" key={p.key}>
                          {p.tier}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonGroups.map((group) => (
                      <Fragment key={group.group}>
                        <tr className="comparison-group">
                          <th colSpan={plans.length + 1}>{group.group}</th>
                        </tr>
                        {group.rows.map((row) => (
                          <tr key={row.label}>
                            <th scope="row">{row.label}</th>
                            {plans.map((p) => (
                              <td key={p.key}>
                                {typeof row[p.key] === "boolean" ? (
                                  <>
                                    {row[p.key] ? (
                                      <span className="check-badge">
                                        <Check aria-hidden="true" />
                                      </span>
                                    ) : (
                                      <Minus aria-hidden="true" />
                                    )}
                                    <span className="sr-only">
                                      {row[p.key] ? "มี" : "ไม่มี"}
                                    </span>
                                  </>
                                ) : (
                                  row[p.key]
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className="section-note">
          รายละเอียดแพ็กเกจอ้างอิงจาก GOT BALANCE ·
          สอบถามทีมงานเพื่อยืนยันเงื่อนไขก่อนเริ่มใช้งาน
        </p>
      </div>
    </section>
  );
}
