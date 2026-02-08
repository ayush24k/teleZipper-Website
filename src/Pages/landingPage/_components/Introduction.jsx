import { useScroll, useTransform } from "motion/react"
import Tag from "../../../components/Tag"
import { useRef } from "react"
import { useState } from "react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit exercitationem omnis quas iure? Ullam quidem placeat, modi dignissimos illo aperiam tempora nesciunt, fuga nemo est eum vitae animi consequatur.`
const words = text.split(' ');

export default function IntroSection() {
    const scrollTarget = useRef();
    const {scrollYProgress} = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"]
    })

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })
    }, [wordIndex])
    return (
        <section className="py-28 lg:py-40 flex justify-center">
            <div className="container px-4">
                <div className="sticky top-24 md:top-38">
                    <div className="flex justify-center">
                        <Tag>Introducing PrepEaseAI</Tag>
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-10">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, in. </span>
                        <span className="">
                            {words.map((word, i) => {
                                return (
                                    <span key={i} className={twMerge("transition duration-500 text-black/30", i < currentWord && 'text-black')}>{`${word} `}</span>
                                )
                            })}
                        </span>
                        <span className="text-yellow-400 block">Thats why we built PrepEase Ai</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    )
}