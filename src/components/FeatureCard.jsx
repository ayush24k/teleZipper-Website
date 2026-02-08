export default function FeatureCard(props) {

    const { title, description, children } = props;
    return (
        <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 text-white p-6 rounded-3xl hover:border-cyan-400/50 transition-colors duration-300">
            <div className="text-cyan-400 mb-4">{children}</div>
            <h3 className="text-3xl font-medium mt-6">{title}</h3>
            <p className="text-white/60 mt-2">{description}</p>
        </div>
    )
}