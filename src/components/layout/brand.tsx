import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/#top" className="brand" aria-label="MIX หน้าแรก">
      <Image
        src="/mix-logo.png"
        width={68}
        height={49}
        alt={site.name}
        priority={priority}
      />
      <span>
        by <b>{site.owner}</b>
      </span>
    </Link>
  );
}
