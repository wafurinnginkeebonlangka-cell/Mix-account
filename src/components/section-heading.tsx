import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function SectionHeading({
  id,
  title,
  description,
  centered = false,
  rule = false,
  aside,
}: {
  id: string;
  title: ReactNode;
  description: string;
  centered?: boolean;
  rule?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className={cn("section-heading", centered && "centered")}>
      <div>
        {rule && <span className="section-rule" aria-hidden="true" />}
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
      {aside && <span className="section-aside">{aside}</span>}
    </div>
  );
}
