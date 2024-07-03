import CarPic from '../../assets/svg/car.svg';
import ObjectPic from '../../assets/svg/object.svg';
import CityPic from '../../assets/images/city.png';
export enum ObjectItemStatus {
    'paid' = 1,
    'available' = 2,
    'not_available' = 3,
}
export enum ObjectItemType {
    'car' = 'car',
    'hotel' = 'hotel',
    'object' = 'object',
}
type ObjectItem = {
    id_object: string;
    type: ObjectItemType;
    name: string;
    price: number;
    daily_income: number;
    status: ObjectItemStatus;
};

export const objectsNameByType: Record<ObjectItemType, string> = {
    [ObjectItemType.car]: 'Машины',
    [ObjectItemType.hotel]: 'Отели',
    [ObjectItemType.object]: 'Объекты',
};
export const objectsImgByType: Record<ObjectItemType, string> = {
    [ObjectItemType.car]: CarPic,
    [ObjectItemType.hotel]: CityPic,
    [ObjectItemType.object]: ObjectPic,
};

export const objectsMock: ObjectItem[] = [
    {
        id_object: '1',
        type: ObjectItemType.car,
        name: 'Solaris',
        price: 100,
        daily_income: 10,
        status: ObjectItemStatus.paid,
    },
    {
        id_object: '2',
        type: ObjectItemType.car,
        name: 'Corolla',
        price: 1000,
        daily_income: 250,
        status: ObjectItemStatus.available,
    },
    {
        id_object: '3',
        type: ObjectItemType.car,
        name: 'BMW M3',
        price: 99000,
        daily_income: 1000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '4',
        type: ObjectItemType.car,
        name: 'Cayenne',
        price: 499000,
        daily_income: 5000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '5',
        type: ObjectItemType.car,
        name: 'Rolls Royce Callinan',
        price: 1999990,
        daily_income: 25000,
        status: ObjectItemStatus.not_available,
    },

    {
        id_object: '11',
        type: ObjectItemType.hotel,
        name: 'Hotel 1',
        price: 200000,
        daily_income: 10000,
        status: ObjectItemStatus.available,
    },
    {
        id_object: '111',
        type: ObjectItemType.hotel,
        name: 'Hotel 2',
        price: 790000,
        daily_income: 50000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '11411',
        type: ObjectItemType.hotel,
        name: 'Hotel 3',
        price: 5000000,
        daily_income: 100000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '11211',
        type: ObjectItemType.hotel,
        name: 'Hotel 4',
        price: 30000000,
        daily_income: 250000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '11111',
        type: ObjectItemType.hotel,
        name: 'Hotel 5',
        price: 900000000,
        daily_income: 1000000,
        status: ObjectItemStatus.not_available,
    },

    {
        id_object: '21',
        type: ObjectItemType.object,
        name: 'Object 1',
        price: 100000000,
        daily_income: 500000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '221',
        type: ObjectItemType.object,
        name: 'Object 2',
        price: 5000000000,
        daily_income: 2500000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '231',
        type: ObjectItemType.object,
        name: 'Object 3',
        price: 45000000000,
        daily_income: 7900000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '241',
        type: ObjectItemType.object,
        name: 'Object 4',
        price: 900000000000,
        daily_income: 19900000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '251',
        type: ObjectItemType.object,
        name: 'Object 5',
        price: 10000000000000,
        daily_income: 1000000000,
        status: ObjectItemStatus.not_available,
    },
];

export const objectsByType = objectsMock.reduce(
    (acc, item) => ({ ...acc, [item.type]: [...(acc[item.type] || []), item] }),
    {} as Record<ObjectItemType, ObjectItem[]>
);
