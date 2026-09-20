import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { comparisonGroups, plans } from "@/lib/plans";

const comparedPlans = plans.filter((plan) => plan.key !== "trial");

export function PricingComparison() {
  return (
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
            {comparedPlans.map((plan) => (
              <th scope="col" key={plan.key} id={plan.key}>
                {plan.tier}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonGroups.map((group) => (
            <Fragment key={group.group}>
              <tr className="comparison-group">
                <th colSpan={comparedPlans.length + 1}>{group.group}</th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {comparedPlans.map((plan) => (
                    <td key={plan.key}>
                      {typeof row[plan.key] === "boolean" ? (
                        <>
                          {row[plan.key] ? (
                            <span className="check-badge">
                              <Check aria-hidden="true" />
                            </span>
                          ) : (
                            <X className="no-icon" aria-hidden="true" />
                          )}
                          <span className="sr-only">
                            {row[plan.key] ? "มี" : "ไม่มี"}
                          </span>
                        </>
                      ) : (
                        row[plan.key]
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
  );
}
