import { car_1_level, car_2_level, car_3_level, car_4_level, car_5_level } from "src/assets/svg/platform/cars";
import { hotel_1_level, hotel_2_level, hotel_3_level, hotel_4_level, hotel_5_level } from "src/assets/svg/platform/hotels";
import { object_1_level, object_2_level, object_3_level, object_4_level, object_5_level } from "src/assets/svg/platform/objects";

export enum EPlatformItems {
    Hotel = 'hotel',
    Car = 'car',
    Object = 'object',
    // AdditionalObject = 'additionalObject'
}

export const getIconPlatformByLevel = (level: number, typeOfItem: EPlatformItems) => {
    if (typeOfItem === EPlatformItems.Hotel) {
        switch (level) {
            case 1: return hotel_1_level;
            case 2: return hotel_2_level;
            case 3: return hotel_3_level;
            case 4: return hotel_4_level;
            case 5: return hotel_5_level;
        }
    }

    if (typeOfItem === EPlatformItems.Car) {
        switch (level) {
            case 1: return car_1_level;
            case 2: return car_2_level;
            case 3: return car_3_level;
            case 4: return car_4_level;
            case 5: return car_5_level;
        }
    }

    if (typeOfItem === EPlatformItems.Object) {
        switch (level) {
            case 1: return object_1_level;
            case 2: return object_2_level;
            case 3: return object_3_level;
            case 4: return object_4_level;
            case 5: return object_5_level;
        }
    }
}
