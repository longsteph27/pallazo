import { AboutUsLogo } from '@/components/icons/AboutUsLogo';
import { AboutUsCardBg } from '@/components/icons/AboutUsCardBg';
import { PallazzoTextSvg } from '@/features/about-us/assets/icons';

interface ContentCardProps {
    title: string;
    paragraphs?: string[];
    htmlContent?: string;
}

export default function ContentCard({ title, paragraphs = [], htmlContent }: ContentCardProps) {
    return (
        <section className="relative w-full">
            {/* Background "PALLAZZO" text */}
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-full flex justify-center overflow-hidden">
                <PallazzoTextSvg className="w-full" />
            </div>
            {/* SVG Background Layer */}
            <div className="absolute inset-0 z-0">
                <AboutUsCardBg className="" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center px-8 md:px-24 pt-16 md:pt-24 pb-28 md:pb-40">
                {/* Title */}
                <h2 className="text-3xl md:text-[52px] font-serif text-center text-[#1A1A1A] mb-12 leading-[1.15] max-w-4xl tracking-tight">
                    {title.split('.').map((line, i) => (
                        line.trim() && (
                            <div key={i} className="mb-2">
                                {line.trim()}
                                {i < title.split('.').length - 1 && '.'}
                            </div>
                        )
                    ))}
                </h2>

                {/* Content */}
                <div className="max-w-3xl w-full">
                    {htmlContent ? (
                        <div
                            className="text-base md:text-xl text-[#333333] leading-relaxed text-center font-light opacity-90 space-y-6 content-rich-text"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    ) : (
                        <div className="space-y-8">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base md:text-xl text-[#333333] leading-relaxed text-center font-light opacity-90"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Logo overlapping the bottom edge */}
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 ">
                <div className="relative">
                    {/* Subtle glow behind logo */}
                    <div className="absolute inset-0 bg-[#D8BD95] blur-3xl opacity-20 scale-150 rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <AboutUsLogo className="w-28 h-28 md:w-[160px] md:h-[160px] relative z-10" />
                </div>
            </div>
        </section>
    );
}

