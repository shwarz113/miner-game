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
    turboBoost: number;
    telegramId: number;
    photo_url: string;
};

export type UpdateUserData = {
    countPoints?: number;
    countClick: number;
    updatedAt: string;
};

export type LeadersItem = {
    id: string;
    username: string;
    balance: number;
    userRating: number;
    rankingPlace: number;
};

type ObjectIncomeItem = {
    date: string;
    name: string;
    dailyIncome: number;
    totalIncome: number;
};

type ActiveIncomeItem = {
    type: string;
    income: number;
    createdAt: string;
};

export type UserIncomeStats = {
    statistics: {
        balance: number;
        countPoints: number;
        priceObjects: number;
        incomeFromActive: number;
        incomeFromObject: number;
        totalCosts: number;
    };
    objectIncome: ObjectIncomeItem[];
    activeIncome: ActiveIncomeItem[];
};

export const initialUserInfo: UserData = {
    username: '',
    balance: 0,
    countPoints: 0,
    countClick: 1000,
    minerId: '',
    level: 1,
    pointsPerClick: 1,
    boost: 0,
    turboBoost: 0,
    actionCount: 0,
    telegramId: 1,
    id: '',
    photo_url: '',
};

export const getUserInfoApi = () => api.get<UserData>('users');
export const updateUserInfoApi = (v: UpdateUserData) => api.post<{ id: string }>('users', v);

export const inviteApi = (refUserId: string) => api.post<{ id: string }>('new_invite', { id: refUserId });
export const completeTaskApi = (taskId: string) => api.post<{ id: string }>('new_entry', { id: taskId });

export const getLeadersApi = () => api.get<{ leaders: LeadersItem[] }>('users/leaders');
export const getIncomeStatsApi = () => api.get<UserIncomeStats>('users/stats');
