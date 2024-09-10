import { twMerge } from "tailwind-merge"
import { TextButton } from "../components/TextButton"


const cardData= [
  {
    image:"/assets/images/pill.png",
    title:"Intelligent Automation",
    description:"Our AI solutions enable businesses to focus on higher-value activities, drive innovation, and improve customer experiences",
    color:"pink"
  },
  {
    image:"/assets/images/cuboid.png",
    title:"Cognitive Analytics",
    description:"By mimicking the human brain's ability to learn and reason, our AI solutions help organizations make more accurate predictions",
    color:"lime"
  },
  {
    image:"/assets/images/cone.png",
    title:"Machine Learning",
    description:"Our machine learning solutions help organizations make more accurate predictions, automate processes, and optimize operations",
    color:"cyan"
  },
  {
    image:"/assets/images/icosahedron.png",
    title:"Deep Learning",
    description:"Our deep learning solutions help organizations make more accurate predictions, automate processes, and optimize operations",
    color:"violet"
  }

]

export const FeatureCardsSection = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Transform industries and revolutionize the way we live and work.</h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((card, index) => (
              <div key={index+card.title} className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md  group">
                <div className={twMerge(`absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300`,card.color === 'pink' && 'bg-pink-500', card.color === 'lime' && 'bg-lime-500', card.color === 'cyan' && 'bg-cyan-500', card.color=== 'violet' && 'bg-violet-500')}></div>
                <div className={twMerge(`absolute size-16 rounded-xl top-1.5 right-1.5 -z-10  transition duration-300`, card.color === 'pink' && 'bg-pink-500 group-hover:bg-pink-400', card.color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400', card.color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400', card.color=== 'violet' && 'bg-violet-500 group-hover:bg-violet-400')}></div>
                <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative ">
                    <div className="absolute h-4 w-full bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 top-[calc(100%+16px)] rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img src={card.image} alt="Pill"  className="size-40 group-hover:-translate-y-6 transition duration-300"/>
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">{card.title}</h3>
                <p className="text-lg text-zinc-400 mt-4">{card.description}</p>
                <div className="flex justify-between mt-12">
                  <TextButton color={card.color}>Learn More</TextButton>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title}) => (
              <div key={title} className="size-2.5 bg-pink-500 rounded-full cursor-pointer">
              </div>)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
