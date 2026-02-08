import FeatureCard from "../../../components/FeatureCard";
import Tag from "../../../components/Tag";
import { Terminal, Upload, Lock, Clock, FileArchive, ShieldCheck } from "lucide-react";

const featureList = [
    {
        title: "Interactive CLI",
        description: "Beautiful wizard with file autocompletion and easy-to-use prompts.",
        icon: <Terminal size={40} />
    },
    {
        title: "MTProto Support",
        description: "Uploads files >50MB (tested up to 2GB) with high speed reliability.",
        icon: <Upload size={40} />
    },
    {
        title: "Encrypted Zips",
        description: "Optional AES-256 password protection to keep your data safe.",
        icon: <Lock size={40} />
    },
    {
        title: "Serial Uploads",
        description: "Uploads files one by one with random delays to avoid Telegram flood limits.",
        icon: <Clock size={40} />
    },
    {
        title: "Smart Chunking",
        description: "Automatically splits large folders into 2GB chunks for Telegram compatibility.",
        icon: <FileArchive size={40} />
    },
    {
        title: "Auth Persistence",
        description: "Save your session locally. Login once, zip forever.",
        icon: <ShieldCheck size={40} />
    }
]

export default function Features() {
    return (
        <section className="py-24 flex justify-center" id="features">
            <div className="container px-4">
                <div className="flex justify-center">
                    <Tag>Key Features</Tag>
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-medium mt-6">Powerful <span className="text-cyan-400">Capabilities</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((feature, i) => (
                        <FeatureCard
                            key={i}
                            title={feature.title}
                            description={feature.description}
                        >
                            {feature.icon}
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    )
}