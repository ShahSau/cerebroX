import { CutCornerButton } from "../components/CutCornerButton"
import { TextButton } from "../components/TextButton"



const listItems=[
"Experience the power of AI with our Natural Language Understanding (NLU) capabilities.",
"Fully benefit from our AI solutions that help organizations make more accurate predictions.",
"Unlcok the potential of our AI solutions that help organizations automate processes and optimize operations."
]

export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
        <div className="container">
            <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Natural Language Understanding</h2>
                        <p className="text-xl lg:text-2xl text-zinc-400 mt-8">Analyzing and generate human-like language, facilitating more intuitive interfaces, chatbots, and virtual assistants.</p>
                        <ul className="flex flex-col gap-8 mt-12">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-pink-500/10">
                                        <div className="size-1.5 bg-pink-500 rounded-full">
                                            
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold" key={index}>{item}</span>
                                </li>
                                
                            ))}
                        </ul>
                        <div className="flex gap-8 mt-12">
                            <CutCornerButton>Get started</CutCornerButton>
                            <TextButton color={'pink'}>Learn more</TextButton>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div  className="relative inline-flex z-0">
                            <img 
                                src="/assets/images/torus-knot.png" 
                                alt="Torus Knot" 
                                className="size-96 max-w-none "
                            />
                            <img 
                                src="/assets/images/hemisphere.png" 
                                alt="Hemisphere" 
                                className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                            />
                        </div>
                        
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative hidden md:block">
                        <div className="absolute right-0 z-0">
                            <img 
                                src="/assets/images/cone.png" 
                                alt="Cone" 
                                className="size-96 max-w-none rotate-12"
                            />
                            <img 
                                src="/assets/images/hemisphere.png" 
                                alt="Cylinder" 
                                className="absolute top-3/4 -z-10 left-0"
                            />
                        </div>
                        
                    </div>
                    <div className="col-span-2">
                        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                            Adaptive Learning
                        </h2>
                        <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                            <p>
                                CerebroX AI's intelligent automation features empower organizations to streamline processes, reduce manual errors, and increase productivity.
                            </p>
                            <p>
                                Our AI solutions are designed to help organizations automate processes and optimize operations, enabling them to focus on more strategic tasks.
                            </p>
                        </div>
                        <div className="flex gap-8 mt-12">
                            <CutCornerButton>Get started</CutCornerButton>
                            <TextButton color={'pink'}>Learn more</TextButton>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

