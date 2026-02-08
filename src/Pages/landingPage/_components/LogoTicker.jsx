import { motion } from "motion/react"

const logos = [
    { name: "PlaceHolder", image: "link" },
    { name: "PlaceHolder", image: "link" },
    { name: "PlaceHolder", image: "link" },
    { name: "asda", image: "link" },
    { name: "sadasd", image: "link" },
    { name: "sadasd", image: "link" },
    { name: "sadasd", image: "link" },
]

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-xl text-black/60">Partners</h3>
                <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        animate={{
                            x: '-50%'
                        }}
                        transition={{
                            duration: 24,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    className="flex flex-none gap-24 pr-24">
                        {Array.from({ length: 2 }).map((_, i) => {
                            return (
                                <>
                                    {logos.map((logo, i) => {
                                        return (
                                            <div className="text-3xl font-medium" key={i}>{logo.name}</div>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}