import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export default function CodeBlock({ code, language = 'bash', title }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-neutral-900/80 backdrop-blur my-4">
            {(title) && (
                <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-white/5">
                    <span className="text-sm text-white/60 font-mono">{title}</span>
                </div>
            )}
            <div className="relative group">
                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                </div>
                <div className="p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-cyan-300">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
