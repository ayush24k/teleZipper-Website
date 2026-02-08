import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/Tag';
import CodeBlock from '../../components/CodeBlock';
import { motion } from 'motion/react';
import { Menu, X, BookOpen, ChevronRight, ArrowLeft } from 'lucide-react';
import Footer from '../landingPage/_components/Footer';

const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    { id: 'features', title: 'Features' },
    { id: 'faq', title: 'FAQ' },
];

export default function Documentation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsSidebarOpen(false); // Close sidebar on mobile after clicking
        }
    };

    return (
        <div className="bg-black text-white selection:bg-cyan-500/30 min-h-screen flex flex-col overflow-x-hidden">

            <div className="flex flex-1 w-full mx-auto px-4 pt-10 pb-8 relative">
                {/* Mobile Sidebar Toggle */}
                <button
                    className="md:hidden fixed bottom-6 right-6 z-50 bg-cyan-600 p-3 rounded-full shadow-lg text-white"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Sidebar */}
                <aside
                    className={`
            fixed md:sticky top-0 md:top-10 right-0 md:left-0 h-screen md:h-[calc(100vh-5rem)] w-full md:w-64 bg-neutral-900 md:bg-transparent border-l md:border-l-0 md:border-r border-white/10 p-6 overflow-y-auto overflow-x-hidden transition-transform duration-300 z-40
            ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
                >
                    <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-2 mb-8 text-cyan-400 font-semibold text-lg">
                        <BookOpen size={20} />
                        Documentation
                    </div>
                    <nav className="space-y-1 md:text-left text-right">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="block w-full md:text-left text-right px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 md:pl-12 py-6 w-full md:max-w-4xl mx-auto overflow-x-hidden">
                    {/* Back to Home Button - Visible on all screens */}
                    <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>

                    {/* Introduction */}
                    <section id="introduction" className="mb-16 scroll-mt-24">
                        <Tag>Overview</Tag>
                        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Introduction</h1>
                        <p className="text-lg text-white/70 leading-relaxed mb-6">
                            TeleZipper is a powerful CLI tool designed to simplify large file handling for Telegram.
                            It automatically splits folders into 2GB chunks (Telegram's file size limit) and can optionally upload them directly to your Telegram Saved Messages or a specific chat.
                        </p>
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Why use TeleZipper?
                            </h3>
                            <ul className="space-y-2 text-white/60 ml-4 list-disc">
                                <li>Bypass existing file size limits effortlessly.</li>
                                <li>Automate the boring stuff: zipping, splitting, and uploading.</li>
                                <li>Secure and private—files go directly to your Telegram.</li>
                                <li>Cross-platform: Works on Windows, macOS, and Linux.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Installation */}
                    <section id="installation" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm">
                            <span className="text-white/40">01.</span> Installation
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
                        <p className="text-white/70 mb-8">
                            You can install TeleZipper globally via npm, which is the recommended method. Ensure you have Node.js (v16+) installed.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Quick Install</h3>
                            <CodeBlock
                                language="bash"
                                code="npm install -g @ayush24k/telezipper"
                                title="Terminal"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Install from Source</h3>
                            <CodeBlock
                                language="bash"
                                code={`git clone https://github.com/ayush24k/teleZipper.git
cd teleZipper
npm install
npm run build
npm link`}
                                title="Terminal"
                            />
                        </div>
                    </section>

                    {/* Usage */}
                    <section id="usage" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm">
                            <span className="text-white/40">02.</span> Usage
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Using the CLI</h2>
                        <p className="text-white/70 mb-8">
                            Once installed, you can run TeleZipper from any directory in your terminal.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Basic Command</h3>
                            <CodeBlock
                                language="bash"
                                code="telezipper"
                                title="Terminal"
                            />
                            <p className="mt-4 text-white/60">
                                This will launch the interactive CLI where you can select your folder and choose options.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 bg-neutral-900/30 rounded-xl border border-white/5">
                                <h4 className="font-semibold text-lg mb-2">Interactive Mode</h4>
                                <p className="text-sm text-white/60">
                                    Follow the on-screen prompts to navigate to your folder and confirm actions. The CLI will guide you through zipping and uploading.
                                </p>
                            </div>
                            <div className="p-6 bg-neutral-900/30 rounded-xl border border-white/5">
                                <h4 className="font-semibold text-lg mb-2">Headless Mode (Coming Soon)</h4>
                                <p className="text-sm text-white/60">
                                    Future versions will support command-line arguments for automated scripts without user interaction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Configuration/Features */}
                    <section id="features" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm">
                            <span className="text-white/40">03.</span> Features
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Key Features</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                    <ChevronRight />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Smart Splitting</h3>
                                    <p className="text-white/60 mt-1">Automatically detects folder size and splits it into 2GB chunks regardless of content type, ensuring compatibility with Telegram's upload limits.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                    <ChevronRight />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Telegram Integration</h3>
                                    <p className="text-white/60 mt-1">Directly uploads to your Saved Messages. Requires simple setup of API ID and Hash (one-time only).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                    <ChevronRight />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Resume Capability</h3>
                                    <p className="text-white/60 mt-1">If an upload fails, the tool attempts to retry. (Advanced resume functionality is in development).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm">
                            <span className="text-white/40">04.</span> FAQ
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            <details className="bg-neutral-900/30 border border-white/5 rounded-lg p-4 group">
                                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                                    Is it safe to use?
                                    <span className="group-open:rotate-180 transition-transform"><ChevronRight size={16} /></span>
                                </summary>
                                <p className="mt-4 text-white/60 text-sm pl-4 border-l-2 border-cyan-500/50">
                                    Yes. TeleZipper runs locally on your machine. Your API keys are stored locally and are never sent to any third-party server, only directly to Telegram servers for authentication.
                                </p>
                            </details>
                            <details className="bg-neutral-900/30 border border-white/5 rounded-lg p-4 group">
                                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                                    Where do I get my API ID and Hash?
                                    <span className="group-open:rotate-180 transition-transform"><ChevronRight size={16} /></span>
                                </summary>
                                <p className="mt-4 text-white/60 text-sm pl-4 border-l-2 border-cyan-500/50">
                                    You can get them from <a href="https://my.telegram.org" className="text-cyan-400 hover:underline">my.telegram.org</a>. Log in, go to "API development tools", and create a new application.
                                </p>
                            </details>
                            <details className="bg-neutral-900/30 border border-white/5 rounded-lg p-4 group">
                                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                                    Can I upload files larger than 2GB?
                                    <span className="group-open:rotate-180 transition-transform"><ChevronRight size={16} /></span>
                                </summary>
                                <p className="mt-4 text-white/60 text-sm pl-4 border-l-2 border-cyan-500/50">
                                    Yes and no. Telegram has a hard limit of 2GB (4GB for Premium). TeleZipper solves this by splitting your large folders into multiple 2GB zip files automatically, so you can upload essentially unlimited data, just in chunks.
                                </p>
                            </details>
                        </div>
                    </section>

                </main>
            </div>
            <Footer />
        </div>
    );
}
