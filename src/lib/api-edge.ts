import { JackpotHistoryItem, JackpotHistoryResponse, LiveJackpotItem, LiveJackpotResponse, PrizeData } from "@/features/jackpot-history/types";

export async function getJackpotHistory() {
    console.log('>>> [API-EDGE] Fetching Jackpot History...');
    try {
        const res = await fetch('https://edge1-api.palazzo.com.vn/mobileapp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                request_name: "JACKPOT_HISTORY"
            }),
        });

        if (!res.ok) {
            console.error(`>>> [API-EDGE] Request failed with status: ${res.status}`);
            throw new Error(`Failed to fetch jackpot history: ${res.statusText}`);
        }

        const data: JackpotHistoryResponse = await res.json();
        console.log('>>> [API-EDGE] Received Response:', (data as any).status === 'A' ? 'SUCCESS' : 'FAILED');

        // Merge all categories into a single array
        const allItems: JackpotHistoryItem[] = [];
        if (data.response) {
            Object.entries(data.response).forEach(([category, categoryItems]) => {
                console.log(`>>> [API-EDGE] Found Category: ${category} (${categoryItems.length} items)`);
                if (Array.isArray(categoryItems)) {
                    allItems.push(...categoryItems);
                }
            });
        }

        console.log(`>>> [API-EDGE] Total items merged: ${allItems.length}`);

        // Map to the format expected by our UI
        const mappedData = allItems.map((item, index) => ({
            id: index + 1,
            date: item.jackpot_date,
            jackpot: item.jackpot_name,
            machineName: item.jackpot_hit_machine.toString(),
            amount: item.jackpot_hit_value,
            // Keep original values for sorting if needed
            rawDate: item.jackpot_hit_time,
            type: item.type
        }));

        console.log('>>> [API-EDGE] Data mapping complete.');
        return mappedData;
    } catch (error) {
        console.error('>>> [API-EDGE] Error fetching jackpot history:', error);
        return [];
    }
}

export async function getCurrentJackpotValues(): Promise<PrizeData[]> {
    console.log('>>> [API-EDGE] Fetching Current Jackpot Values...');
    try {
        const res = await fetch('https://edge1-api.palazzo.com.vn/mobileapp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                request_name: "CURRENT_JACKPOT_VALUE"
            }),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch current jackpot values: ${res.statusText}`);
        }

        const data: LiveJackpotResponse = await res.json();
        console.log('>>> [API-EDGE] Received Current Jackpot Response Status:', data.status);

        if (data.status !== 'A' || !data.response || !data.response["0"]) {
            console.error('>>> [API-EDGE] Invalid or failed current jackpot response structure', data);
            return [];
        }

        // Flatten the categories (LINK JACKPOT, P1 JACKPOT, etc.) into a single list
        const prizes: PrizeData[] = [];
        const colorPalette = [
            { top: '#D2C29E', text: '#8B7330' }, // Gold-ish
            { top: '#8DA98F', text: '#2D4B30' }, // Green-ish
            { top: '#8AA1A6', text: '#2D3F43' }, // Blue-ish
            { top: '#B1AFB8', text: '#3E3C48' }, // Purple-ish
            { top: '#BDBDBD', text: '#424242' }, // Gray-ish
        ];

        let index = 0;
        Object.values(data.response["0"]).forEach(categoryItems => {
            if (Array.isArray(categoryItems)) {
                categoryItems.forEach((item: LiveJackpotItem) => {
                    const colors = colorPalette[index % colorPalette.length];
                    prizes.push({
                        id: item.jackpot_id,
                        name: item.jackpot_name,
                        // jackpot_value is current, max is jackpot_max
                        currentValue: item.jackpot_value,
                        secondaryValue: item.jackpot_max,
                        topBgColor: colors.top,
                        numberColor: colors.text
                    });
                    index++;
                });
            }
        });

        console.log(`>>> [API-EDGE] Successfully mapped ${prizes.length} jackpot prizes.`);
        return prizes;
    } catch (error) {
        console.error('>>> [API-EDGE] Error fetching current jackpot values:', error);
        return [];
    }
}
