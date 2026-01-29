import Gaming from "@/features/gaming";
import React from "react";

export const dynamic = 'force-dynamic';

export default async function GamingPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const lang = (params.lang as string) || 'en';

    return <Gaming lang={lang} />;
}
