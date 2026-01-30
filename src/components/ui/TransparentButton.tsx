import { cn } from "@/lib/utils";

export default function TransparentButton({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={cn("outline-double outline-2 outline-[#D2C29E] outline-offset-2 rounded-[6px] px-4 py-2 text-white font-normal tracking-wider uppercase hover:bg-[#D2C29E]/10 transition-colors", className)} {...props}>
            {children}
        </button>
    )
}