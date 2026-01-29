import React from "react";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

/**
 * A reusable luxury-styled button with a gold fill, 
 * white outline, and serif typography as per the brand aesthetic.
 */
export default function LuxuryButton({ children, className = "", ...props }: LuxuryButtonProps) {
    return (
        <button
            className={`
                relative group
                px-14 py-2.5 
                bg-[#AF9662] 
                border border-white/40
                rounded-md
                text-white text-[11px] font-bold uppercase tracking-[0.4em]
                transition-all duration-500 ease-out
                hover:bg-[#968050] hover:shadow-2xl
                active:scale-[0.98]
                shadow-[0_10px_30px_-10px_rgba(175,150,98,0.4)]
                ${className}
            `}
            style={{ fontFamily: 'var(--font-serif), serif' }}
            {...props}
        >
            <span className="relative z-10 drop-shadow-sm">{children}</span>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
        </button>
    );
}
