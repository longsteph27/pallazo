import { DecorativeArcSvg } from "../assets/icons";

export default function HeroSection() {
    return (
        <section className="relative aspect-[1440/1024] w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/about-hero-bg.jpg')",
                    filter: "brightness(0.6)"
                }}
            />

            <div className="absolute -bottom-[8.2%] left-1/2 -translate-x-1/2 z-50 w-full max-w-[130px] px-4 md:px-0">
                <DecorativeArcSvg className="w-full h-auto" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl md:text-7xl font-serif text-white tracking-[0.2em] uppercase">
                    ABOUT US
                </h1>
            </div>
        </section>
    );
}
