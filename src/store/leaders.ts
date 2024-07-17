import api from "src/api";

export type LeadersItem = {
    id: string;
    nickname: string;
    points: number;
    place: number;
};

export const getLeadersApi = () => api.get<LeadersItem[]>('users/leaders');
// export const updateUserInfoApi = (v: UpdateUserData) => api.patch<{id: string}>('users', v);
