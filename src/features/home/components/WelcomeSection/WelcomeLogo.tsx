import { PallazzoTextSvg } from '@/features/about-us/assets/icons';
import { DecorativeTopSvg, OrnamentalCoinSvg } from '@/components/icons';

type Props = {
    title: string;
    description: string;

    /** Ảnh sẽ thay thế vùng overlay bên phải */
    imageSrc: string;
    imageAlt?: string;

    /** Có muốn phủ tint đen 0.2 như svg gốc không */
    rightTint?: boolean;

    /** Optional CTA */
    ctaLabel?: string;
    onCtaClick?: () => void;

    className?: string;

    /** Có muốn hiển thị logo text không */
    hasLogoText?: boolean;
};

export default function WelcomeLogo({
    title,
    description,
    imageSrc,
    imageAlt = "",
    rightTint = true,
    ctaLabel,
    onCtaClick,
    className,
    hasLogoText = true,
}: Props) {
    return (
        <section className="relative bg-[#F9F7ED] py-16 overflow-hidden">
            {/* Background "PALLAZZO" text */}

            <div className="container mx-auto px-4 relative z-10">
                {hasLogoText ? (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                        <PallazzoTextSvg />
                    </div>
                ) : null}
                {/* Hero Card */}
                <div className="custom-card relative w-full max-w-[1222px] mx-auto rounded-[10px] bg-card-gradient ">
                    {/* Decorative Top SVG */}
                    <div className="absolute -top-[0.3%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <DecorativeTopSvg />
                    </div>

                    {/* Card Content */}
                    <div className="pt-12 pb-8 px-8">
                        {/* Hero Content */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-serif text-[#1A365D] mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-[#5A6B7C] text-lg leading-relaxed max-w-2xl mx-auto">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
