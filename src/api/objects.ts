import api from 'src/api/index';

export enum ObjectItemStatus {
    'ownedStatus' = 'OWNED',
    'availableStatus' = 'AVAILABLE',
    'notAvailableStatus' = 'NOT_AVAILABLE',
}
export enum ObjectItemType {
    'car' = 'CAR',
    'hotel' = 'BUILDING',
    'object' = 'OBJECT',
}

export type ObjectItem = {
    id: string;
    type: ObjectItemType;
    name: string;
    price: number;
    dailyIncome: number;
    status: ObjectItemStatus;
};

export const getObjectsApi = () => api.get<ObjectItem[]>('object/info');

export const buyObjectApi = (id: string) => api.get<ObjectItem[]>('users/objects', { data: {id} });
