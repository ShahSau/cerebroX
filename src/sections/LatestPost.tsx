import type { CollectionEntry } from "astro:content"
import { Card } from "../components/Card"
import { getPostColorFromCategory } from "../utils/PostUtils"
import { Tag } from "../components/Tag"
import { CutCornerButton } from "../components/CutCornerButton"
import { twMerge } from "tailwind-merge"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export const LatestPost = (props:{
    latestPosts:CollectionEntry<'blog'>[]
}) => {
    const {latestPosts} = props
    const targetRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
        target: targetRef,
        offset:['start end', 'start center'],
    })
    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64])
  return (
    <section className="py-52 ">
        <div className="container">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Intelligence Amplified</h2>
                <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
                    Keep up with the latest trandes, news and updates from CerebroX.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-28">
                {/* left side*/}
                <div className="flex flex-col gap-8">
                    {latestPosts.map(({data:{title, description, category}}, index) => (
                        <Card 
                            key={index} buttonText="Read More" 
                            color={getPostColorFromCategory(category)}
                            className={twMerge(index % 2 != 0 && 'md:hidden')}
                        >
                            <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                            <h3 className="font-heading font-black text-3xl mt-3">
                                {title}
                            </h3>
                            <p className="trxt-lg text-zinc-400 mt-6">
                                {description}
                            </p>
                            
                        </Card>
                
                    ))}
                </div>

                {/* right side */}
                <motion.div
                    className="hidden md:flex flex-col gap-8 mt-16" 
                    ref={targetRef}
                    style={{
                        marginTop
                    }}
                >
                {latestPosts.map(({data:{title, description, category}}, index) => (
                        <Card 
                            key={index} buttonText="Read More" 
                            color={getPostColorFromCategory(category)}
                            className={twMerge(index % 2 === 0 && 'md:hidden')}
                        >
                            <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                            <h3 className="font-heading font-black text-3xl mt-3">
                                {title}
                            </h3>
                            <p className="trxt-lg text-zinc-400 mt-6">
                                {description}
                            </p>
                            
                        </Card>
                
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-48 md:mt-32">
                <a href="/blog">
                    <CutCornerButton>
                        View All Posts
                    </CutCornerButton>
                </a>
            </div>
        </div>
    </section>
  )
}