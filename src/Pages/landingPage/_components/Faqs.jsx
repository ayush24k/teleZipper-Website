import { twMerge } from "tailwind-merge";
import Tag from "../../../components/Tag";
import { X, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqsList = [
    {
        question: "what is your goal",
        answer: "i dont know yet"
    }, {
        question: "what is your goal",
        answer: "i dont know yet"
    }, {
        question: "what is your goal",
        answer: "i dont know yeasfaf fds faskjfaskfal lka sfasl alks flaks flkat"
    }, {
        question: "what is your goal",
        answer: "i dont know yet"
    },
]


export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24 flex justify-center">
            <div className="container px-4">
                <div className="flex justify-center">
                    <Tag>FAQS</Tag>
                </div>
                <h2 className="text-center text-6xl mt-6 font-medium max-w-xl mx-auto">Question? We've got the <span className="text-yellow-400">answers</span></h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqsList.map((faq, faqIndex) => {
                        return (
                            <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-white/15 shadow-lg" key={faqIndex}>
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => selectedIndex !== faqIndex ? setSelectedIndex(faqIndex) : setSelectedIndex(null)}
                                >
                                    <h3 className="font-medium">{faq.question}</h3>
                                    <Plus className={twMerge("text-yellow-400 flex-shrink-0 transition duration-300", selectedIndex === faqIndex && "rotate-45")} />
                                </div>
                                <AnimatePresence>
                                    {selectedIndex === faqIndex && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                marginTop: 0
                                            }}
                                            animate={{
                                                height: 'auto',
                                                marginTop: 24
                                            }}
                                            exit={{
                                                height: 0,
                                                marginTop: 0
                                            }}
                                            className={twMerge("overflow-hidden", selectedIndex !== faqIndex && 'hidden')}>
                                            <p className="text-white/50">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}