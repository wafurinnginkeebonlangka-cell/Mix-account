import { Check } from "lucide-react";
import { plans, planPrice } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { EntryButton } from "@/components/entry-button";
import { PriceAmount } from "@/components/price-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const paidPlans = plans.filter((plan) => plan.key !== "trial");

export function PricingPlanCards() {
  return (
    <div className="pricing-grid plan-cards-grid">
      {paidPlans.map((plan) => {
        const [includesLabel, ...rest] = plan.features;
        const showIncludesHeading = plan.key !== "basic";
        const checklist = showIncludesHeading ? rest : plan.features;
        return (
          <Card
            key={plan.key}
            id={plan.key}
            className={cn("price-card", plan.featured && "featured")}
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
                  <PriceAmount amount={planPrice(plan, "month").amount} />
                </strong>
                <span>{planPrice(plan, "month").unit}</span>
              </div>
              <div className="price-subline">
                <span>ชำระแบบรายเดือน</span>
              </div>
              {showIncludesHeading ? (
                <p className="plan-includes-heading">{includesLabel}</p>
              ) : null}
              <ul
                className={cn(
                  "plan-checklist",
                  !showIncludesHeading && "no-heading",
                )}
              >
                {checklist.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <EntryButton
                className="plan-buy-button"
                entry={
                  plan.key === "vip"
                    ? { kind: "contact", plan: plan.tier }
                    : { kind: "register", plan: plan.tier }
                }
              >
                {plan.btnText}
              </EntryButton>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
