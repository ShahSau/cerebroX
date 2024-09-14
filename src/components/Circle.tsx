import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge";


export const Circle = (props:ComponentPropsWithoutRef<'div'> & {animate?:boolean}) => {
    const {className, children, animate = false} = props;
  return (
    <div 
        className={twMerge("bg-[#202733] relative size-[240px] inline-flex items-center justify-center rounded-full",className)}
    >
      <motion.div 
        className={twMerge("absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-pink-500/10",
          animate && "border-[6px] border-transparent border-t-pink-500/30"
        )}
        animate={animate &&{
          rotate: 360,
        }}
        transition={{
          duration:15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
        {children}
    </div>
  )
}
