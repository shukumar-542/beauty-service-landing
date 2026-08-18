import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function ExploreButton({ text }: { text?: string }) {
  return (
    <div>
      <a
        href="#"
        className="artists-body group inline-flex shrink-0 items-center gap-1.5 border-b border-[#E0669B]/60 pb-1 text-[13px] font-semibold text-[#E0669B] transition-colors hover:border-[#3D2E38] hover:text-[#3D2E38]"
      >
       {text}
        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

    </div>
  )
}
