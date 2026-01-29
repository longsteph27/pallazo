import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-4xl font-serif text-[#A68C54] mb-4">404 - Not Found</h2>
            <p className="text-gray-600 mb-8">Could not find requested resource</p>
            <Link
                href="/"
                className="px-8 py-3 bg-[#A68C54] text-white rounded-lg hover:bg-[#8B7348] transition-colors uppercase tracking-widest text-sm font-bold"
            >
                Return Home
            </Link>
        </div>
    )
}
