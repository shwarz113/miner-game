import { makeAutoObservable } from 'mobx';
import { ACCUM, ACCUM_LIMIT_REFRESH_AMOUNT, DEFAULT_INC_TAP_VALUE } from './constants';

export enum PopupsEnum {
}

type Store = {
    points: number;
    accum: number;
    accumCapacity: number;
    accumLimitAmount: number;
    incTapValue: number;
    isTurboTapMode: boolean;
    isTap: boolean;
    activePopup?: PopupsEnum;
};
const gameStore = () => {
    return makeAutoObservable<Store>({
        points: 0,
        accum: ACCUM,
        accumCapacity: ACCUM,
        accumLimitAmount: ACCUM_LIMIT_REFRESH_AMOUNT,
        incTapValue: DEFAULT_INC_TAP_VALUE,
        isTurboTapMode: false,
        isTap: false,
        activePopup: undefined,
    });
};

export default gameStore;