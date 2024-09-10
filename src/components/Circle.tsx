import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge";

export const Circle = (props:ComponentPropsWithoutRef<'div'>) => {
    const {className, children} = props;
  return (
    <div 
        className={twMerge("bg-[#202733] size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-pink-500/10",className)}
    >
        {children}
    </div>
  )
}
