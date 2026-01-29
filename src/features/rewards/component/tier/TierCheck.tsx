import { CheckIcon } from "lucide-react";
import React from "react";

export default function TierCheck({checked}: {checked: boolean}) {
    return (
        <div className="rounded-full w-[25px] h-[25px] p-1 bg-slate-200">
            <div className="rounded-full w-full h-full bg-slate-50 justify-center items-center p-1">
                {checked && <CheckIcon className="w-full h-full"/> }
            </div>
        </div>
    )
}