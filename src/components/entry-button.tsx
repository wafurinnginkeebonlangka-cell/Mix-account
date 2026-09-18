"use client";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useEntry, type Entry } from "@/components/entry-provider";
type Props = Omit<ComponentProps<typeof Button>, "onClick" | "asChild"> & {
  entry: Entry;
  onOpen?: () => void;
  returnFocus?: () => HTMLElement | null;
};
/** Shared integration point for trial/login/contact CTAs, with focus restoration. */
export function EntryButton({ entry, onOpen, returnFocus, ...props }: Props) {
  const showEntry = useEntry();
  return (
    <Button
      {...props}
      onClick={(event) => {
        const trigger = returnFocus?.() ?? event.currentTarget;
        onOpen?.();
        showEntry(entry, trigger);
      }}
    />
  );
}
