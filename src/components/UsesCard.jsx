import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { Fragment } from "react";

export default function UsesCard(props) {
    const { usesList, className, reverse} = props;
    return (
        <motion.div
        initial={{
            y: reverse ? '-50%' : 0
        }}
        animate={{
            y: reverse ? 0 : '-50%'
        }}
        transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
        }}
        className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {Array.from({ length: 2 }).map((_, i) => {
                return (
                    <Fragment key={i}>
                        {usesList.map((uses, i) => {
                            return (
                                <div key={i} className="bg-neutral-900 text-white rounded-3xl p-6">
                                    <div className="flex justify-center">
                                        {/* addd image here in place of div */}
                                        <div className="bg-slate-400 size-24 rounded-2xl"></div>
                                    </div>
                                    <h3 className="text-3xl text-center mt-6">{uses.title}</h3>
                                    <p className="text-white/50 mt-2 text-center">{uses.description}</p>
                                </div>
                            )
                        })}
                    </Fragment>
                )
            })}
        </motion.div>
    )
}