import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { easeOut, motion, useScroll, useTransform } from "motion/react";
import { Download, ChevronRight, Terminal, Package, ArrowUpRight } from "lucide-react";
import logo from "../../../assets/telezipper-logo.png";

const floatingWords = [
    { word: "Zip", top: "15%", left: "10%", delay: 0, size: "text-7xl", duration: 6 },
    { word: "Telegram", top: "25%", left: "75%", delay: 1.2, size: "text-8xl", duration: 7 },
    { word: "Upload", top: "65%", left: "12%", delay: 2.5, size: "text-6xl", duration: 5.5 },
    { word: "Split", top: "75%", left: "80%", delay: 3.8, size: "text-7xl", duration: 6.5 },
    { word: "CLI", top: "45%", left: "6%", delay: 1.5, size: "text-9xl", duration: 8 },
    { word: "Fast", top: "55%", left: "85%", delay: 2.8, size: "text-6xl", duration: 5 },
    { word: "Secure", top: "10%", left: "45%", delay: 0.8, size: "text-5xl", duration: 7.2 },
    { word: "Node.js", top: "85%", left: "35%", delay: 3.2, size: "text-7xl", duration: 6.8 },
];

const floatingParticles = Array.from({ length: 20 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 5,
    size: Math.random() * 4 + 1 // 1px to 5px
}));

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const [stats, setStats] = useState({
        downloads: "...",
        version: "..."
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch downloads (last month)
                const downloadsRes = await fetch('https://api.npmjs.org/downloads/point/last-month/@ayush24k/telezipper');
                const downloadsData = await downloadsRes.json();

                // Fetch latest version
                const versionRes = await fetch('https://registry.npmjs.org/@ayush24k/telezipper/latest');
                const versionData = await versionRes.json();

                setStats({
                    downloads: downloadsData.downloads ? downloadsData.downloads.toLocaleString() + "+" : "20k+",
                    version: versionData.version ? `v${versionData.version}` : "v1.0.8"
                });
            } catch (error) {
                console.error("Failed to fetch npm stats:", error);
                // Fallback values in case of error
                setStats({ downloads: "20k+", version: "v1.0.8" });
            }
        };

        fetchStats();
    }, []);

    // Parallax effect for text/elements as user scrolls down
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section className="relative py-32 pt-48 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center" id="home" ref={containerRef}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 -z-20"></div>

            {/* Floating Background Words */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {floatingWords.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute font-bold text-white/5 ${item.size} select-none whitespace-nowrap`}
                        style={{ top: item.top, left: item.left }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: item.delay
                        }}
                    >
                        {item.word}
                    </motion.div>
                ))}
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {floatingParticles.map((item, index) => (
                    <motion.div
                        key={`particle-${index}`}
                        className="absolute bg-cyan-500/30 rounded-full"
                        style={{
                            top: item.top,
                            left: item.left,
                            width: item.size,
                            height: item.size,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: item.delay
                        }}
                    />
                ))}
            </div>

            <div className="container relative px-4 max-w-5xl text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                >
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-black rounded-2xl p-4 border border-white/10">
                                <img src={logo} alt="TeleZipper Logo" className="w-24 h-24 object-contain mx-auto" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 pb-4"
                >
                    TeleZipper
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
                >
                    Split folders into multiple <span className="text-cyan-400 font-semibold">2GB zip files</span> with optional <span className="text-cyan-400 font-semibold">Telegram upload</span>. Now with a beautiful Interactive CLI!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#installation">
                        <Button variant="primary" className="flex items-center gap-2 group text-lg px-8 py-4">
                            <Download size={20} />
                            Install Now
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link to="/docs">
                        <Button variant="secondary" className="text-lg px-8 py-4">
                            View Documentation
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
                >
                    {/* Custom Stat Card 1: Downloads */}
                    <div className="relative group overflow-hidden bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center gap-4">
                        <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                            <Download size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-white/40 font-medium">Monthly Downloads</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">{stats.downloads}</span>
                                <span className="text-xs text-green-400 flex items-center bg-green-500/10 px-1.5 py-0.5 rounded-full">Active <ArrowUpRight size={10} className="ml-0.5" /></span>
                            </div>
                        </div>
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Custom Stat Card 2: Version */}
                    <a href="https://www.npmjs.com/package/@ayush24k/telezipper" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center gap-4">
                        <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                            <Package size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-white/40 font-medium">Latest Version</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">{stats.version}</span>
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-50 transition-opacity">
                            <ArrowUpRight size={20} className="text-white/40" />
                        </div>
                    </a>
                </motion.div>
            </div>
            {/* Shadow fade effect */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
        </section>
    )
}