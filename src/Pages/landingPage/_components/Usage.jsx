import CodeBlock from "../../../components/CodeBlock";
import Tag from "../../../components/Tag";

export default function Usage() {
    return (
        <section className="py-24 flex justify-center" id="usage">
            <div className="container px-4 max-w-4xl">
                <div className="flex justify-center">
                    <Tag>How to Use</Tag>
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-medium mt-6">Usage Guide</h2>

                <div className="mt-12 space-y-16">
                    {/* Interactive Mode */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-white mb-2">🚀 Interactive Mode</h3>
                            <p className="text-white/60">
                                Simply run <code>telezipper</code> without any arguments to launch the interactive wizard. It guides you through selecting files (with autocomplete!), choosing output directories, password protection, and Telegram upload.
                            </p>
                        </div>
                        <CodeBlock
                            language="bash"
                            code="telezipper"
                            title="Terminal"
                        />
                    </div>

                    {/* Basic Usage */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-white mb-2">⚡ Command Line Arguments</h3>
                            <p className="text-white/60">
                                Prefer automation? Use CLI arguments to bypass the wizard.
                            </p>
                        </div>
                        <CodeBlock
                            language="bash"
                            code="telezipper ./my-folder -o ./output"
                            title="Basic Zip"
                        />
                        <CodeBlock
                            language="bash"
                            code='telezipper ./my-folder -p "secret123"'
                            title="Zip with Password"
                        />
                    </div>

                    {/* Telegram Upload */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-white mb-2">📡 Upload to Telegram</h3>
                            <p className="text-white/60">
                                Upload large files (up to 2GB) using MTProto. You can set credentials in a <code>.env</code> file or pass them as arguments.
                            </p>
                        </div>
                        <CodeBlock
                            language="bash"
                            code="telezipper ./my-folder --telegram --api-id 12345 --api-hash abcdef123"
                            title="Upload with Credentials"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
