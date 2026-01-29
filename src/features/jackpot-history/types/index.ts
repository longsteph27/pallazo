export interface PrizeData {
    id: number;
    name: string;
    currentValue: string | number;
    secondaryValue: string | number;
    topBgColor?: string;
    numberColor?: string;
}

export interface LiveJackpotItem {
    jackpot_id: number;
    jackpot_type: string;
    payment_type: string;
    jackpot_name: string;
    jackpot_value: number;
    jackpot_max: number | string;
}

export interface LiveJackpotResponse {
    status: string;
    response: {
        "0": {
            [category: string]: LiveJackpotItem[];
        };
        last_updated: string;
    };
}

export interface JackpotHistoryItem {
    jackpot_name: string;
    jackpot_hit_value: number;
    jackpot_hit_location: string;
    jackpot_hit_time: string;
    jackpot_date: string;
    jackpot_hit_machine: number | string;
    payment_type: string;
    type: string;
}

export interface JackpotHistoryResponse {
    response: {
        [key: string]: JackpotHistoryItem[];
    };
}

export interface JackpotHistoryRecord {
    id: number;
    date: string;
    betReturn: string;
    machineName: string;
    jackpot: string;
}

export type TabType = 'yesterday' | 'records' | 'history1';
