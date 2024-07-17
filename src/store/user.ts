import api from "src/api";

export type UserData = {
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

export type UpdateUserData = {
    count_points?: number;
    count_click: number;
};

export const initialUserInfo: UserData = {
    nickname: '',
    balance: 0,
    count_points: 0,
    count_click: 0,
    id_miner: '',
    level: 1,
    points_per_click: 1,
    boost: 0,
    turbo_boost: 0,
};

export const getUserInfoApi = () => api.get<UserData>('users');
export const updateUserInfoApi = (v: UpdateUserData) => api.patch<{id: string}>('users', v);
