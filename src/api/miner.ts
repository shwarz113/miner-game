import api from "src/api/index";

export type MinersData = {
    idMiner: string;
    level: number;
    idMinerNew: string;
    levelNew: number;
    price: number;
    pointsPerClick: number;
    boost: number;
    turboBoost: number;
};

export const initialMinersInfo: MinersData = {
    idMiner: '1',
    level: 1,
    idMinerNew: '11',
    levelNew: 2,
    price: 0,
    pointsPerClick: 1,
    boost: 0,
    turboBoost: 0,
};

export const getMinersInfoApi = () => api.get<MinersData>('miners');
// export const updateUserInfoApi = (v: UpdateUserData) => api.patch<{id: string}>('users', v);
