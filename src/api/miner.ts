import api from "src/api/index";

export type MinersData = {
    id: string;
    level: number;
    newId: string;
    newLevel: number;
    price: number;
    pointsPerClick: number;
    boost: number;
    turboBoost: number;
};

export const initialMinersInfo: MinersData = {
    id: '1',
    level: 1,
    newId: '11',
    newLevel: 2,
    price: 0,
    pointsPerClick: 1,
    boost: 0,
    turboBoost: 0,
};

export const getMinersInfoApi = (id: string) => api.get<MinersData>(`miner/${id}`);
// export const updateUserInfoApi = (v: UpdateUserData) => api.patch<{id: string}>('users', v);
