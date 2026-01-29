import AboutUsPage from '@/features/about-us';

export const dynamic = 'force-dynamic';

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const lang = (params.lang as string) || 'en';

    return <AboutUsPage lang={lang} />;
}
