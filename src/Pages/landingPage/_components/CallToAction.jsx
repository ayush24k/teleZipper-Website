import { motion, useAnimate } from "motion/react"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function CallToAction() {

    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: '-50%' },
            { duration: 30, repeat: Infinity, ease: "linear" }
        )
    }, [])

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.7;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip px-4 flex">
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-14 pr-16 text-7xl md:text-8xl font-medium cursor-pointer">
                    {Array.from({ length: 10 }).map((_, i) => {
                        return (
                            <div key={i} className="flex items-center gap-16">
                                <span className="text-yellow-400 text-7xl">&#10038;</span>
                                <span className="hover:text-yellow-400 transition duration-200 ease-in-out">Try PrepEaseAi for free</span>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}