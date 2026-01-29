import BannerSlider from '@/components/common/Banner';
import { TabNavigation, PrizesSection, HistoryTable } from '@/features/jackpot-history';
import { getJackpotHistory, getCurrentJackpotValues } from '@/lib/api-edge';

export default async function JackpotHistoryPage() {
    const banners = [
        "https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d"
    ];

    console.log('>>> [Page] Fetching Jackpot Data on Server...');
    const [historyData, prizesData] = await Promise.all([
        getJackpotHistory(),
        getCurrentJackpotValues()
    ]);
    console.log(`>>> [Page] Server-side fetch complete. History: ${historyData.length}, Prizes: ${prizesData.length}`);

    return (
        <main className="min-h-screen bg-[#F9F7ED]">
            {/* Banner Section */}
            <BannerSlider images={banners} title="JACKPOT HISTORY" />

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Prizes Section */}
            <PrizesSection initialPrizes={prizesData} />

            {/* History Table */}
            <HistoryTable initialData={historyData} />
        </main>
    );
}
