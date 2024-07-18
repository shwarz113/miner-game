import api from 'src/api/index';

export type UserData = {
    id: string;
    username: string;
    balance: number;
    countPoints: number;
    countClick: number;
    minerId: string;
    actionCount: number;
    level: number;
    pointsPerClick: number;
    boost: number;
    turbo_boost: number;
    telegramId: number;
};

export type UpdateUserData = {
    count_points?: number;
    count_click: number;
};

export type LeadersItem = {
    id: string;
    username: string;
    balance: number;
    userRating: number;
    rankingPlace: number;
};

export type UserIncomeStats = {
    statistics: {
        balance: number;
        countPoints: number;
        priceObjects: number;
        incomeFromActive: number;
        incomeFromObject: number;
        totalCosts: number;
    },
    objectIncome: {
        balance: number;
        countPoints: number;
        dailyIncome: number;
        totalIncome: number;
    },
    activeIncome: {
        type: string;
        income: number;
        createdAt: string;
    },
}

export const initialUserInfo: UserData = {
    username: '',
    balance: 0,
    countPoints: 0,
    countClick: 0,
    minerId: '',
    level: 1,
    pointsPerClick: 1,
    boost: 0,
    turbo_boost: 0,
    actionCount: 0,
    telegramId: 1,
    id: '',
};

export const getUserInfoApi = () => api.get<UserData>('users');
export const updateUserInfoApi = (v: UpdateUserData) => api.patch<{ id: string }>('users', v);

export const inviteApi = (refUserId: string) => api.post<{ id: string }>('new_invite', { id: refUserId });
export const completeTaskApi = (taskId: string) => api.post<{ id: string }>('new_entry', { id: taskId });

export const getLeadersApi = () => api.get<LeadersItem[]>('users/leaders');
export const getIncomeStatsApi = () => api.get<UserIncomeStats>('users/stats');
