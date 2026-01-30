import React from "react";
import Link from "next/link";

interface LuxuryCTAButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    showOutline?: boolean;
    outlineColor?: string;
    variant?: "white" | "gold" | "dark";
    type?: "button" | "submit" | "reset";
}

/**
 * A ultra-luxury CTA button featuring a double outline effect, 
 * serif typography, and premium micro-interactions.
 * 
 * Supports both as a Link (if href is provided) or a regular Button.
 * If showOutline is true, the className applies to the outer wrapper.
 */
const LuxuryCTAButton = ({
    children,
    href,
    onClick,
    className = "",
    showOutline = true,
    outlineColor = "#D6C5A0",
    variant = "white",
    type = "button",
}: LuxuryCTAButtonProps) => {
    const baseStyles = "flex items-center justify-center px-8 md:px-10 py-2.5 rounded-lg text-[11px] font-bold uppercase transition-all duration-300 pointer-events-auto shadow-sm whitespace-nowrap active:scale-[0.98]";

    const variants = {
        white: "bg-white/95 text-[#B09860] hover:bg-white hover:shadow-lg",
        gold: "bg-[#AF9662] text-white hover:bg-[#968050] hover:shadow-lg",
        dark: "bg-[#1a1a1a] text-white hover:bg-black hover:shadow-lg",
    };

    const content = (
        <span style={{ fontFamily: "var(--font-serif), serif", letterSpacing: "0.1em" }}>
            {children}
        </span>
    );

    const renderButton = (extraClass: string = "") => {
        const fullClass = `${baseStyles} ${variants[variant]} ${extraClass}`;

        if (href) {
            return (
                <Link
                    href={href}
                    className={fullClass}
                    onClick={onClick}
                >
                    {content}
                </Link>
            );
        }
        return (
            <button
                type={type}
                className={fullClass}
                onClick={onClick}
            >
                {content}
            </button>
        );
    };

    if (showOutline) {
        return (
            <div
                className={`inline-block outline outline-[1px] outline-offset-[1px] rounded-lg ${className}`}
                style={{ outlineColor }}
            >
                {renderButton()}
            </div>
        );
    }

    return renderButton(className);
};

export default LuxuryCTAButton;
