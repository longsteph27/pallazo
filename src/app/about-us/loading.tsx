export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F9F7ED]">
            <div className="relative mx-auto lg:max-w-[1230px] md:max-w-[768px] max-w-[512px] px-4 py-20 md:py-32">
                {/* Content Card Skeleton */}
                <div className="relative">
                    {/* Background skeleton */}
                    <div className="h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>

                    {/* Content skeleton */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-24 pt-16 md:pt-24 pb-28 md:pb-40 space-y-8">
                        {/* Title skeleton */}
                        <div className="w-3/4 h-12 bg-white/50 rounded animate-pulse"></div>
                        <div className="w-2/3 h-12 bg-white/50 rounded animate-pulse"></div>

                        {/* Paragraph skeletons */}
                        <div className="space-y-4 w-full max-w-3xl mt-8">
                            <div className="h-4 bg-white/50 rounded animate-pulse"></div>
                            <div className="h-4 bg-white/50 rounded w-5/6 animate-pulse"></div>
                            <div className="h-4 bg-white/50 rounded w-4/6 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Logo skeleton */}
                    <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2">
                        <div className="w-28 h-28 md:w-[160px] md:h-[160px] bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
