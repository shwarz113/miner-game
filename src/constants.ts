export const SOCKET_URL = 'wss://tgame-crypto-coin-kagertanin.amvera.io/connect';
export const DOMAIN = process.env.NODE_ENV === 'production' ? '/miner-game/' : '/';

export enum PagesEnum {
    City = 'city',
    Leaders = 'leaders',
    Miner = 'miner',
    Income = 'income',
    Boost = 'boost',
}
