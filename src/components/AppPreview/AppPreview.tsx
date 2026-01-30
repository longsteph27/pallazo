import React from "react";
import { getMobileAppData } from "@/api/mobile-app";
import AppPreviewClient from "./AppPreviewClient";

interface AppPreviewProps {
    lang?: string;
}

const AppPreview = async ({ lang = 'en' }: AppPreviewProps) => {
    const data = await getMobileAppData(lang);

    if (!data) return null;

    const title = data.translation?.title;
    const description = data.translation?.description;
    const imgMobile = data.imgMobile;

    // If no essential data, don't render as per user request
    if (!title && !description && !imgMobile) return null;

    return <AppPreviewClient data={data} />;
};

export default AppPreview;
