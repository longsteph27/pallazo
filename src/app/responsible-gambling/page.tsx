import BannerSlider from '@/components/common/Banner';
import ResponsibleWelcome from '@/features/gaming/components/ResponsibleGamblingSection/ResponsibleWelcome';

export default function ResponsibleGamblingPage() {
    return (
        <main>
            <BannerSlider
                images={["https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5"]}
                title="RESPONSIBLE"
                subtitle="GAMBLING"
            />
            <ResponsibleWelcome />
        </main>
    );
}
