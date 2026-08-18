import React from 'react'

export default function TagText({text}: {text?: string}) {
    return (
        <div className=" flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-[#E0669B]" />
            <span className="artists-body text-[11px] font-semibold tracking-[0.18em] text-[#B77593]">
                {text || "MEET THE ARTISTS"}
            </span>
        </div>
    )
}
