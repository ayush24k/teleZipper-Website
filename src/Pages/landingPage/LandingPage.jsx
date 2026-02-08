import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Installation from "./_components/Installation";
import Usage from "./_components/Usage";
import Footer from "./_components/Footer";

export default function LandingPage() {
    return (
        <div className="bg-black text-white selection:bg-cyan-500/30">
            <Navbar />
            <Hero />
            <Features />
            <Installation />
            <Usage />
            <Footer />
        </div>
    )
}