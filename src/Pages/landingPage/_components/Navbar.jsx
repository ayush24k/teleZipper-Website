import { Menu, X, Github } from 'lucide-react'
import Button from '../../../components/Button'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import logo from "../../../assets/telezipper-logo.png";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Installation", href: "#installation" },
    { label: "Usage", href: "#usage" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <section className='p-4 lg:py-8 flex justify-center fixed w-full top-0 z-50'>
            <div className="container max-w-5xl">
                <div className='border border-white/15 rounded-[27px] lg:rounded-full bg-black/70 backdrop-blur shadow-2xl'>
                    <div className=" flex justify-between items-center p-2 px-6">
                        <div className='flex items-center gap-2'>
                            {/* Logo */}
                            <img src={logo} className="w-8 h-8 rounded-lg" alt="Logo" />
                            <h1 className='text-xl font-bold tracking-tight text-white'>TeleZipper</h1>
                        </div>
                        <div className='lg:flex justify-center items-center hidden'>
                            <nav className='flex gap-6 text-sm font-medium text-white/80'>
                                {navLinks.map((link, i) => {
                                    return (
                                        <a
                                            href={link.href}
                                            key={i}
                                            className="hover:text-cyan-400 transition-colors cursor-pointer"
                                            onClick={(e) => handleScroll(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    )
                                })}
                            </nav>
                        </div>
                        <div className='flex items-center gap-4 justify-end'>
                            <a href="https://github.com/ayush24k/teleZipper" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm border-white/10 hover:border-white/30 hover:bg-white/5">
                                    <Github size={16} />
                                    <span>GitHub</span>
                                </Button>
                            </a>
                            <div className='lg:hidden text-white cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X /> : <Menu />}
                            </div>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className='overflow-hidden border-t border-white/10'>
                                <div className='flex flex-col items-center gap-8 p-9 lg:hidden text-white/90'>
                                    {navLinks.map((link, i) => {
                                        return (
                                            <a
                                                href={link.href}
                                                key={i}
                                                className="text-lg hover:text-cyan-400 cursor-pointer w-full text-center py-2 active:text-cyan-300 transition-colors"
                                                onClick={(e) => handleScroll(e, link.href)}
                                            >
                                                {link.label}
                                            </a>
                                        )
                                    })}
                                    <div className='flex gap-4 md:hidden w-full justify-center'>
                                        <a href="https://github.com/ayush24k/teleZipper" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                                            <Button variant="secondary" className="flex items-center justify-center gap-2 w-full">
                                                <Github size={16} />
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}