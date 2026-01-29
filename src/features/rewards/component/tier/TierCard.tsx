

interface TierCardProps {
    color: string;
    bg: string;
    name?: string;
}

export function TierCard({ color, bg, name }: TierCardProps) {
    return (
        <div className="flex flex-col items-center relative h-full justify-end pb-4">
            <div className={`w-32 h-16 bg-gradient-to-t ${bg} rounded-t-xl`}></div>
            <div className={`w-20 h-[120px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 rounded-xl bg-gradient-to-b ${color} z-50 shadow-xl flex items-center justify-center`}>
                {name && <span className="text-white/90 font-bold -rotate-90 uppercase tracking-widest text-sm whitespace-nowrap">{name}</span>}
            </div>
        </div>
    );
}
