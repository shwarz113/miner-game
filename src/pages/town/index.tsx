import React, { useRef, useState } from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import { BlockWrapper } from '../../components/block-wrapper';
import styles from './index.module.css';
import {
    imagesByObjectId,
    ObjectItemStatus,
    ObjectItemType,
    objectsByType,
    objectsImgByType,
    objectsNameByType
} from './constants';
import { Button } from '../../components/button';
import { AssetItemWrapper } from '../../components/asset-item-wrapper';
import { nFormatter } from '../../utils/formatters';

export const TownContainer = () => {
    const data = objectsByType;
    const refCars = useRef<HTMLDivElement>(null);
    const refHotels = useRef<HTMLDivElement>(null);
    const refObjects = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<ObjectItemType>(ObjectItemType.car);

    const scrollToCars = () => {
        refCars?.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setActiveTab(ObjectItemType.car);
    }
    const scrollToHotels = () => {
        refHotels?.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setActiveTab(ObjectItemType.hotel);
    }
    const scrollToObjects = () => {
        refObjects?.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setActiveTab(ObjectItemType.object);
    }

    // todo переписать в сторе
    const paidAmount: Record<ObjectItemType, number> = {
        [ObjectItemType.car]: objectsByType.car.findIndex(({ status }) => status !== ObjectItemStatus.paid),
        [ObjectItemType.hotel]: objectsByType.hotel.findIndex(({ status }) => status !== ObjectItemStatus.paid),
        [ObjectItemType.object]: objectsByType.object.findIndex(({ status }) => status !== ObjectItemStatus.paid),
    };

    return (
        <div className={styles.townWrapper}>
            <div className={styles.townTabs}>
                <div onClick={scrollToCars} className={activeTab === ObjectItemType.car ? styles.activeTab : ''}>
                    <img src={objectsImgByType.car} alt="" />
                    {objectsNameByType.car}
                </div>
                <div onClick={scrollToHotels} className={activeTab === ObjectItemType.hotel ? styles.activeTab : ''}>
                    <img src={objectsImgByType.hotel} alt="" />
                    {objectsNameByType.hotel}
                </div>
                <div onClick={scrollToObjects} className={activeTab === ObjectItemType.object ? styles.activeTab : ''}>
                    <img src={objectsImgByType.object} alt="" />
                    {objectsNameByType.object}
                </div>
            </div>
            <div className={styles.townContent}>
                {Object.entries(objectsByType).map(([key, items]) => (
                    <BlockWrapper className={styles.blockWrapper}>
                        <div
                            className={styles.top}
                            {...(key === ObjectItemType.car && { ref: refCars })}
                            {...(key === ObjectItemType.hotel && { ref: refHotels })}
                            {...(key === ObjectItemType.object && { ref: refObjects })}
                        >
                            <div>
                                <img src={objectsImgByType[key as ObjectItemType]} alt="" />
                                <div>{objectsNameByType[key as ObjectItemType]}</div>
                            </div>
                            <div>
                                {paidAmount[key as ObjectItemType]} из {items.length}
                            </div>
                        </div>
                        <div className={styles.items}>
                            {items.map(({ name, daily_income, price, status, id_object }) => (
                                <AssetItemWrapper
                                    img={imagesByObjectId[id_object]}
                                    middle={{ content: `+${nFormatter({ num: daily_income })} / день` }}
                                    title={name}
                                    button={
                                        <Button
                                            onClick={() => {}}
                                            size={'s'}
                                            icon={CoinPic}
                                            type={status === ObjectItemStatus.paid ? 'text' : 'default'}
                                            disabled={status === ObjectItemStatus.not_available}
                                            className={styles.buttonBuy}
                                        >
                                            {status === ObjectItemStatus.paid
                                                ? nFormatter({ num: price })
                                                : `Купить за ${nFormatter({ num: price })}`}
                                        </Button>
                                    }
                                    className={styles.assetItemWrapper}
                                    {...(status === ObjectItemStatus.paid && { status: 'primary' })}
                                    {...(status === ObjectItemStatus.not_available && { status: 'ghost' })}
                                />
                            ))}
                        </div>
                    </BlockWrapper>
                ))}
            </div>
        </div>
    );
};
