import { twMerge } from 'tailwind-merge'

export default function Tag(props) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("inline-flex items-center uppercase border border-cyan-400 text-lg px-3 py-1 gap-2 rounded-full text-cyan-400 bg-cyan-400/10 backdrop-blur-sm", className)} {...otherProps}>
            <span>&#10038;</span>
            <span className='text-sm font-medium'>{children}</span>
        </div>
    )
}