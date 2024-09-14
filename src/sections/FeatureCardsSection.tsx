import { twMerge } from "tailwind-merge"
import { TextButton } from "../components/TextButton"
import { Card } from "../components/Card"
import { useEffect, useState } from "react"


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

const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
const [isHovered, setIsHovered] = useState<boolean>(false);

useEffect(() => {
  if(isHovered) return;
  const timeout =setTimeout(() => {
    setSelectedCardIndex(curr => curr === cardData.length - 1 ? 0 : curr + 1);
  }, 2000);
  return () => clearTimeout(timeout);
}, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">Transform industries and revolutionize the way we live and work.</h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((card, index) => (
              <div
                key={index+card.title}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card key={index+card.title} className="max-w-xs md:max-w-md " color={card.color}>
                    <div className="flex justify-center -mt-28">
                      <div className="inline-flex relative ">
                      <div className="absolute h-4 w-full bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 top-[calc(100%+16px)] rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img src={card.image} alt="Pill"  className="size-40 group-hover:-translate-y-6 transition duration-300"/>
                      </div>
                    </div>
                    <h3 className="font-heading font-black text-3xl mt-12">{card.title}</h3>
                    <p className="text-lg text-zinc-400 mt-4">{card.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title},cardIndex) => (
              <div key={title} className={twMerge("size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                selectedCardIndex === cardIndex && "bg-zinc-300"
              )}
              onClick={() => setSelectedCardIndex(cardIndex)}
              >
              </div>)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
