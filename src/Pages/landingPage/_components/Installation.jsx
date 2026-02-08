import CodeBlock from "../../../components/CodeBlock";
import Tag from "../../../components/Tag";

export default function Installation() {
    return (
        <section className="py-24 flex justify-center bg-neutral-900/30" id="installation">
            <div className="container px-4 max-w-4xl">
                <div className="flex justify-center">
                    <Tag>Get Started</Tag>
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-medium mt-6">Installation</h2>
                <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                    Install TeleZipper globally using npm to access it from anywhere on your system.
                </p>

                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Option 1: Install from npm (Recommended)</h3>
                    <CodeBlock
                        language="bash"
                        code="npm install -g @ayush24k/telezipper"
                        title="Terminal"
                    />
                    <p className="text-white/60 mt-2 text-sm text-center">Now you can use <code>telezipper</code> from anywhere on your system!</p>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Option 2: Install from source</h3>
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
            </div>
        </section>
    )
}
