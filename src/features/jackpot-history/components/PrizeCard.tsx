import { PrizeData } from '../types';

interface PrizeCardProps {
    prize: PrizeData;
}

export default function PrizeCard({ prize }: PrizeCardProps) {
    return (
        <div className="relative flex flex-col items-center">
            {/* Shield Badge */}
            <div
                className="relative w-40 h-40 flex items-center justify-center text-white mb-4"
                style={{
                    background: 'linear-gradient(135deg, #5BA5A8 0%, #4A9599 50%, #3A8589 100%)',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 75%, 50% 100%, 0% 75%, 0% 10%)',
                    border: '3px solid #D4C5A6',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                }}
            >
                <div className="text-center">
                    <div className="text-xl font-bold uppercase tracking-wide leading-tight">
                        {prize.name.split(' ').map((word, i) => (
                            <div key={i}>{word}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="text-center text-white space-y-2">
                {/* Current Value */}
                <div className="text-4xl font-bold">
                    {prize.currentValue.toLocaleString()}
                </div>

                {/* Secondary Value */}
                <div className="text-2xl font-bold opacity-80">
                    {prize.secondaryValue.toLocaleString()}
                </div>
            </div>
        </div>
    );
}
