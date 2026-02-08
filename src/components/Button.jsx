import { cva } from "class-variance-authority";

const classes = cva("border rounded-full p-2 px-6 font-medium cursor-pointer transition-all duration-300", {
    variants: {
        variant: {
            primary: "border-cyan-400 bg-cyan-400 text-black hover:bg-cyan-300 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]",
            secondary: "border-white/20 bg-transparent text-white hover:bg-white/10",
        }
    }
})

export default function Button (props) {
    const {variant, className, ...otherProps} = props;
    return (
        <button 
        className={classes({variant, className})}
        {...otherProps}
        />
    )
}