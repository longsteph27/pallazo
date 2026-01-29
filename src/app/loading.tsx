import { FooterLogo } from "@/components/icons";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#AC9666]">
            <div className="flex flex-col items-center">
                <div className="opacity-80 scale-125 md:scale-150">
                    <FooterLogo className="brightness-0" />
                </div>
            </div>
        </div>
    )
}
