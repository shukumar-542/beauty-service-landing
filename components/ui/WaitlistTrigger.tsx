"use client";

import type { ReactNode } from "react";
import { openEmailCTA, type WaitlistType } from "@/app/lib/events";

export default function WaitlistTrigger({
  type,
  children,
}: {
  type: WaitlistType;
  children: ReactNode;
}) {
  return (
    <div onClick={() => openEmailCTA(type)} className="inline-flex">
      {children}
    </div>
  );
}