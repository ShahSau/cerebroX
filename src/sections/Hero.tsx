import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagone } from "../components/Hexagone"


export const HeroSection = () => {
    return (
        <section className="py-24 md:py-52 overflow-x-clip">
            <div className="container">
                <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
                    Introducing CerebroX
                </p>
                <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-6xl text-center mt-4 max-w-3xl mx-auto">
                    Where Intelligence Meets Innovation
                </h1>
                <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
                    A eading AI startup that harnesses the power of cognitive computing to create intelligent systems.
                </p>
                <div className="flex justify-center mt-10">
                    <CutCornerButton className="block mx-auto mt-12">
                        Get Started
                    </CutCornerButton>
                </div>
                <div className="flex justify-center mt-24">
                    <div className="inline-flex relative z-0">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagone className="size-[1100px]"/>
                        </div>
                        <img 
                            src="/assets/images/icosahedron.png" 
                            alt="" 
                            className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
                        />
                        <img 
                            src="/assets/images/icosahedron.png"
                            alt="Icosahedron as 3D image" 
                            className="w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}