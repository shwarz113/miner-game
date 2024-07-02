type UserData = {
    nickname: string;
    balance: number;
    count_points: number;
    count_click: number;
    id_miner: string;
    level: number;
    points_per_click: number;
    boost: number;
    turbo_boost: number;
};

export const userMock: UserData = {
    nickname: 'Nikolas',
    balance: 120040,
    count_points: 0,
    count_click: 0,
    id_miner: 'first',
    level: 1,
    points_per_click: 1,
    boost: 2,
    turbo_boost: 3,
}
