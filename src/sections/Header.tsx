import { useEffect, useState } from "react";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagone } from "../components/Hexagone";
import { twMerge } from "tailwind-merge";
import { AnimatePresence,motion } from "framer-motion";


const navLinks =[
    {title: "Home", href: "/"},
    {title: "Blog", href: "/blog"},
    {title: "Careers", href: "/careers"},
    {title: "Contact", href: "/contact"},
]

export const HeaderSection = () => {
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpened]);
    return (
        <>
            <header className="sticky top-0 z-40  backdrop-blur-lg">
                <div className="continer">
                    <div className="flex justify-between h-24 md:h-28 items-center">
                        {/*left side */}
                        <div>
                            <img src="/assets/images/logo.png" alt="CarebroX" style={{width:"10%"}}/>
                        </div>
                        {/*right side */}
                        <div className="flex gap-4 items-center">
                            <CutCornerButton className="hidden md:inline-flex">
                                Get Started
                            </CutCornerButton>
                            <div className="size-10 relative cursor-pointer"
                                onClick={() => setIsOpened(!isOpened)}
                            >
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className={twMerge("w-5 h-0.5 bg-zinc-300 -translate-y-1 transiton-all duration-500", isOpened && 'translate-y-0 rotate-45')}>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className={twMerge("w-5 h-0.5 bg-zinc-300 translate-y-1 transiton-all duration-500", isOpened && 'translate-y-0 -rotate-45')}>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {isOpened && (
                <motion.div 
                    className="fixed size-full top-0 left-0 z-30 bg-[#202733]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="absolute inset-2 rounded-md bg-[#373f4c] mt-24 md:mt-28 z-0">
                        <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                            <Hexagone size={700} />
                        </div>
                        <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                            <Hexagone size={1100} />
                        </div>
                        <div className="h-full flex justify-center items-center">
                            <nav className="flex flex-col items-center gap-12 md:gap-16">
                                {navLinks.map(({title, href}, index) => (
                                    <motion.a 
                                        key={title} 
                                        href={href} 
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: 20}}
                                        transition={{duration: 0.5, ease:'linear', delay: index * 0.25}}
                                    >
                                        <span
                                            className="cursour-pointer text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"
                                        >
                                            {title}
                                        </span> 
                                    </motion.a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </>
    );
    }