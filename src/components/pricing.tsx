"use client";
import { useState } from "react";
import { Check, Minus, ArrowRight, Building2 } from "lucide-react";
import { plans, comparisonGroups } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { useEntry } from "./entry-provider";
export function Pricing() {
  const [period, setPeriod] = useState("year");
  const showEntry = useEntry();
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-heading centered">
          <h2>เลือก MIX ที่พอดีกับธุรกิจคุณ</h2>
          <p>เริ่มจากสิ่งที่ต้องใช้ แล้วเติบโตไปด้วยกัน</p>
        </div>
        <ToggleGroup
          type="single"
          value={period}
          onValueChange={(v) => {
            if (v) setPeriod(v);
          }}
          className="billing-toggle"
          aria-label="รอบการชำระเงิน"
        >
          <ToggleGroupItem value="year">รายปี</ToggleGroupItem>
          <ToggleGroupItem value="half">6 เดือน</ToggleGroupItem>
        </ToggleGroup>
        <div className="pricing-grid">
          {plans.slice(0, 4).map((p) => (
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
                  <strong>
                    {p.key === "trial" || period === "year"
                      ? p.price
                      : p.halfYearPrice}
                  </strong>
                  <span>
                    {p.key === "trial"
                      ? "/ 48 วัน"
                      : period === "year"
                        ? "/ ปี"
                        : "/ 6 เดือน"}
                  </span>
                </div>
                <p className="plan-users">{p.users}</p>
                <ul>
                  {p.features.slice(1).map((f) => (
                    <li key={f}>
                      <Check aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={p.key === "trial" ? "outline" : "default"}
                  onClick={() =>
                    showEntry({
                      kind: p.key === "trial" ? "trial" : "contact",
                      plan: p.tier,
                    })
                  }
                >
                  {p.key === "trial" ? "เริ่มทดลองใช้ฟรี" : "เลือกแพ็กเกจ"}
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="vip-band glass">
          <div className="vip-title">
            <Building2 />
            <div>
              <h3>Mix-VIP</h3>
              <p>มากกว่า 15 ผู้ใช้งาน</p>
            </div>
          </div>
          <p>
            ระบบซื้อ ขาย สินค้า บัญชี และทรัพย์สิน
            <br />
            <span>ราคาขึ้นกับประเภทธุรกิจ</span>
          </p>
          <Button
            variant="outline"
            onClick={() => showEntry({ kind: "contact", plan: "Mix-VIP" })}
          >
            ติดต่อทีมงาน
            <ArrowRight data-icon="inline-end" />
          </Button>
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
                    {comparisonGroups.map((group) =>
                      group.rows.map((row, i) => (
                        <tr key={`${group.group}-${i}`}>
                          <th scope="row">{row.label}</th>
                          {plans.map((p) => (
                            <td key={p.key}>
                              {typeof row[p.key] === "boolean" ? (
                                row[p.key] ? (
                                  <Check aria-label="มี" />
                                ) : (
                                  <Minus aria-label="ไม่มี" />
                                )
                              ) : (
                                row[p.key]
                              )}
                            </td>
                          ))}
                        </tr>
                      )),
                    )}
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
