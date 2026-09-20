"use client";
import type { ComponentProps } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEntry, type Entry } from "@/components/entry-provider";
type Props = Omit<ComponentProps<typeof Button>, "onClick" | "asChild"> & {
  entry: Entry;
  onOpen?: () => void;
  returnFocus?: () => HTMLElement | null;
};
/** Shared integration point for trial/login/contact CTAs, with focus restoration. */
export function EntryButton({
  entry,
  onOpen,
  returnFocus,
  children,
  ...props
}: Props) {
  const showEntry = useEntry();
  if (entry.kind === "login") {
    return (
      <Button {...props} asChild onClick={onOpen}>
        <Link href="/login">{children}</Link>
      </Button>
    );
  }
  if (entry.kind === "trial" || entry.kind === "register") {
    const href = entry.plan
      ? { pathname: "/register", query: { plan: entry.plan } }
      : "/register";
    return (
      <Button {...props} asChild onClick={onOpen}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }
  return (
    <Button
      {...props}
      onClick={(event) => {
        const trigger = returnFocus?.() ?? event.currentTarget;
        onOpen?.();
        showEntry(entry, trigger);
      }}
    >
      {children}
    </Button>
  );
}
