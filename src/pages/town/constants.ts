import CarPic from '../../assets/svg/car.svg';
import ObjectPic from '../../assets/svg/object.svg';
import CityPic from '../../assets/images/city.png';
import Car1 from '../../assets/images/car-1.png';
import Car2 from '../../assets/images/car-2.png';
import Car3 from '../../assets/images/car-3.png';
import Car4 from '../../assets/images/car-4.png';
import Car5 from '../../assets/images/car-5.png';
import Hotel1 from '../../assets/images/hotel-1.png';
import Hotel2 from '../../assets/images/hotel-2.png';
import Hotel3 from '../../assets/images/hotel-3.png';
import Hotel4 from '../../assets/images/hotel-4.png';
import Hotel5 from '../../assets/images/hotel-5.png';
import Object1 from '../../assets/images/object-1.png';
import Object2 from '../../assets/images/object-2.png';
import Object3 from '../../assets/images/object-3.png';
import Object4 from '../../assets/images/object-4.png';
import Object5 from '../../assets/images/object-5.png';
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
        name: 'Toyota',
        price: 100,
        daily_income: 10,
        status: ObjectItemStatus.paid,
    },
    {
        id_object: '2',
        type: ObjectItemType.car,
        name: 'Audi',
        price: 1000,
        daily_income: 250,
        status: ObjectItemStatus.available,
    },
    {
        id_object: '3',
        type: ObjectItemType.car,
        name: 'Porsche',
        price: 99000,
        daily_income: 1000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '4',
        type: ObjectItemType.car,
        name: 'Lamborghini',
        price: 499000,
        daily_income: 5000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '5',
        type: ObjectItemType.car,
        name: 'Rolls Royce',
        price: 1999990,
        daily_income: 25000,
        status: ObjectItemStatus.not_available,
    },

    {
        id_object: '6',
        type: ObjectItemType.hotel,
        name: 'Comfort Inn',
        price: 200000,
        daily_income: 10000,
        status: ObjectItemStatus.available,
    },
    {
        id_object: '7',
        type: ObjectItemType.hotel,
        name: 'Panorama Hotel',
        price: 790000,
        daily_income: 50000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '8',
        type: ObjectItemType.hotel,
        name: 'Elite Plaza',
        price: 5000000,
        daily_income: 100000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '9',
        type: ObjectItemType.hotel,
        name: 'Imperial Residence',
        price: 30000000,
        daily_income: 250000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '10',
        type: ObjectItemType.hotel,
        name: 'Atrium Luxe',
        price: 900000000,
        daily_income: 1000000,
        status: ObjectItemStatus.not_available,
    },

    {
        id_object: '11',
        type: ObjectItemType.object,
        name: 'Wonderland Park',
        price: 100000000,
        daily_income: 500000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '12',
        type: ObjectItemType.object,
        name: 'Aqua Paradise',
        price: 5000000000,
        daily_income: 2500000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '13',
        type: ObjectItemType.object,
        name: 'Eiffel tower',
        price: 45000000000,
        daily_income: 7900000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '14',
        type: ObjectItemType.object,
        name: 'Empire Business Center',
        price: 900000000000,
        daily_income: 19900000,
        status: ObjectItemStatus.not_available,
    },
    {
        id_object: '15',
        type: ObjectItemType.object,
        name: 'Lucky Star Casino',
        price: 10000000000000,
        daily_income: 1000000000,
        status: ObjectItemStatus.not_available,
    },
];

export const objectsByType = objectsMock.reduce(
    (acc, item) => ({ ...acc, [item.type]: [...(acc[item.type] || []), item] }),
    {} as Record<ObjectItemType, ObjectItem[]>
);

export const imagesByObjectId: Record<string, string> =  {
    '1': Car1,
    '2': Car2,
    '3': Car3,
    '4': Car4,
    '5': Car5,
    '6': Hotel1,
    '7': Hotel2,
    '8': Hotel3,
    '9': Hotel4,
    '10': Hotel5,
    '11': Object1,
    '12': Object2,
    '13': Object3,
    '14': Object4,
    '15': Object5,
}