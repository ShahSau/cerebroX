import {motion} from 'framer-motion'
import React from "react";



const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: '/assets/images/avatar-cameron-yang.jpg',
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: '/assets/images/avatar-erica-wyatt.jpg',
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: '/assets/images/avatar-harry-bender.jpg',
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: '/assets/images/avatar-kyla-clay.jpg',
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: '/assets/images/avatar-molly-vaughan.jpg',
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: '/assets/images/avatar-noel-baldwin.jpg',
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: '/assets/images/avatar-isabelle-hartman.jpg',
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: '/assets/images/avatar-caleb-monroe.jpg',
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: '/assets/images/avatar-lena-everett.jpg',
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props:{className?:string; testimonials: typeof testimonials, duration?:number}) => {
    return (
        <div className={ props.className}>
          <motion.div 
            className="flex flex-col gap-6 pb-6"
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: props.duration || 10,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
            }}
          >
          {[... new  Array(2)].fill(0).map((_,index)=>(
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
                <div key={index} className="p-10 border border-solid border-[#fff] rounded-3xl shadow-[0_7px_14px_#000] max-w-xs w-full">
                  <div>
                    {text}
                  </div>
                  <div className="flex items-center gap-2 mt-5">
                    <img src={imageSrc} alt={name} className="w-10 h-10 rounded-full"/>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <p className="leading-5 tracking-tight">{username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
          
          </motion.div>
        </div>
    )}


export const Testimonials = () => {
  return (
    <section className="py-8">
        <div className="container">
            <div className="max-w-[540px] mx-auto">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">What our user say</h2>
                <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                </p>
            </div>
            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={15}/>
                <TestimonialsColumn testimonials={secondColumn}  className="hidden md:block" duration={20}/>
                <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17}/>
            </div>
            
        </div>
    </section>
  )};
