export default function Footer() {
    return (
        <section className="py-12 border-t border-white/10 flex justify-center bg-black">
            <div className="container text-center text-white/40 text-sm">
                <p>&copy; {new Date().getFullYear()} TeleZipper. Built by <a href="https://github.com/ayush24k" className="text-cyan-400 hover:underline">Ayush24k</a>.</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/ayush24k/teleZipper" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.npmjs.com/package/@ayush24k/telezipper" className="hover:text-white transition-colors">npm</a>
                </div>
            </div>
        </section>
    )
}