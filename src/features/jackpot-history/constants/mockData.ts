import { PrizeData, JackpotHistoryRecord } from '../types';

export const prizesData: PrizeData[] = [
    {
        id: 1,
        name: 'NAME TEXT',
        currentValue: '20.000',
        secondaryValue: '12.120.000',
        topBgColor: '#D2C29E',
        numberColor: '#8B7330'
    },
    {
        id: 2,
        name: 'NAME TEXT',
        currentValue: '12.120.000',
        secondaryValue: '20.000',
        topBgColor: '#8DA98F'
    },
    {
        id: 3,
        name: 'NAME TEXT',
        currentValue: '12.120.000',
        secondaryValue: '20.000',
        topBgColor: '#8AA1A6'
    },
    {
        id: 4,
        name: 'NAME TEXT',
        currentValue: '12.120.000',
        secondaryValue: '20.000',
        topBgColor: '#B1AFB8'
    },
    {
        id: 5,
        name: 'NAME TEXT',
        currentValue: '12.120.000',
        secondaryValue: '20.000',
        topBgColor: '#BDBDBD'
    },
];

export const historyData: JackpotHistoryRecord[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: `0${(i % 9) + 1}/0${(i % 9) + 1}/2024`,
    betReturn: `THB${i % 2 === 0 ? '044' : '046'}`,
    machineName: '02A/0522/48PT',
    jackpot: '02A/0522/48PT',
}));
