export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F9F7ED]">
            {/* Banner skeleton */}
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>

            {/* Hero skeleton */}
            <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
                </div>
            </div>

            {/* Grid skeleton */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}
