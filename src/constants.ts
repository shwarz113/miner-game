export const DOMAIN = process.env.NODE_ENV === 'production' ? '/miner-game/' : '/';

export enum PagesEnum {
    Main = 'main',
    City = 'city',
    Leaders = 'leaders',
    Miner = 'miner',
    Income = 'income',
    Boost = 'boost',
    Intro = 'intro',
}

export const DEFAULT_CLICKS_AMOUNT = 1000;