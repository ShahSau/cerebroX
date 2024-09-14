import React, { useRef } from 'react'
import { CutCornerButton } from '../components/CutCornerButton'
import { Hexagone } from '../components/Hexagone'
import { Circle } from '../components/Circle'
import { motion, useScroll, useTransform } from 'framer-motion'

export const CallToAction =()=> {
  const sectionRef = useRef(null)

  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset: ['start end', 'end start' ],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45])

  return (
    <section className='py-60 overflow-hidden' ref={sectionRef}>
        <div className='container'>
            <div className='relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Hexagone size={700}/>
                </div>
                
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Hexagone size={1100} reverse duration={50}/>
                </div>

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Circle className='absolute left-0 -top-[400px]' animate>
                        <motion.img 
                          src='/assets/images/cuboid.png' 
                          alt='cuboid' 
                          className='size-[140px]' 
                          style={{
                            rotate: rotate
                          }}
                        />
                  </Circle>
                </div>

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Circle className='absolute -left-[600px] -top-[70px]' animate>
                        <motion.img 
                          src='/assets/images/cylinder.png' 
                          alt='cylinder' 
                          className='size-[140px]' 
                          style={{rotate}}
                        />
                  </Circle>
                </div>

                <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>Ready to <span className='block'>Get Started</span></h2>
                <p className='text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto'>Start your free trial today and see how our platform can help you grow</p>
                <div className='flex justify-center mt-12'>
                    <CutCornerButton className=''>Get Started</CutCornerButton>
                </div>
            </div>
            

        </div>
    </section>
  )
}
