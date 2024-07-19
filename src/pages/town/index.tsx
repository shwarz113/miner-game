import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import { BlockWrapper } from 'src/components/block-wrapper';
import styles from './index.module.css';
import { getObjectsByType, imagesByObjectId, objectsImgByType, objectsNameByType } from './constants';
import { Button } from 'src/components/button';
import { AssetItemWrapper } from 'src/components/asset-item-wrapper';
import { nFormatter } from 'src/utils/formatters';
import { MobXAppStore } from 'src/store/MobXStore';
import { ObjectItemStatus, ObjectItemType } from 'src/api/objects';

type Props = {
    app: MobXAppStore;
};
export const TownContainer: FC<Props> = ({ app }) => {
    const {
        objects,
        userInfo: { balance },
    } = app;
    const refCars = useRef<HTMLDivElement>(null);
    const refHotels = useRef<HTMLDivElement>(null);
    const refObjects = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<ObjectItemType>(ObjectItemType.car);

    const scrollToCars = () => {
        refCars?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        setActiveTab(ObjectItemType.car);
    };
    const scrollToHotels = () => {
        refHotels?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        setActiveTab(ObjectItemType.hotel);
    };
    const scrollToObjects = () => {
        refObjects?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        setActiveTab(ObjectItemType.object);
    };

    const objectsByType = useMemo(() => getObjectsByType(objects || []), [objects?.length]);

    const ownedAmount: Record<ObjectItemType, number> = useMemo(() => {
        return {
            [ObjectItemType.car]:
                objectsByType.CAR?.findIndex(({ status }) => status !== ObjectItemStatus.ownedStatus) || 0,
            [ObjectItemType.hotel]:
                objectsByType.BUILDING?.findIndex(({ status }) => status !== ObjectItemStatus.ownedStatus) || 0,
            [ObjectItemType.object]:
                objectsByType.OBJECT?.findIndex(({ status }) => status !== ObjectItemStatus.ownedStatus) || 0,
        };
    }, []);

    useEffect(() => {
        app.getObjects();
    }, []);

    return (
        <div className={styles.townWrapper}>
            <div className={styles.townTabs}>
                <div onClick={scrollToCars} className={activeTab === ObjectItemType.car ? styles.activeTab : ''}>
                    <img src={objectsImgByType.CAR} alt="" />
                    {objectsNameByType.CAR}
                </div>
                <div onClick={scrollToHotels} className={activeTab === ObjectItemType.hotel ? styles.activeTab : ''}>
                    <img src={objectsImgByType.BUILDING} alt="" />
                    {objectsNameByType.BUILDING}
                </div>
                <div
                    onClick={scrollToObjects}
                    className={activeTab === ObjectItemType.object ? styles.activeTab : ''}
                >
                    <img src={objectsImgByType.OBJECT} alt="" />
                    {objectsNameByType.OBJECT}
                </div>
            </div>
            <div className={styles.townContent}>
                {Object.entries(objectsByType).length ? (
                    Object.entries(objectsByType).map(([key, items]) => (
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
                                    {ownedAmount[key as ObjectItemType]} из {items.length}
                                </div>
                            </div>
                            <div className={styles.items}>
                                {items.map(({ name, dailyIncome, price, status, id }) => {
                                    const available =
                                        status === ObjectItemStatus.availableStatus ||
                                        (balance >= price && status !== ObjectItemStatus.ownedStatus);
                                    const notAvailable = status === ObjectItemStatus.notAvailableStatus && !available;
                                    const owned = status === ObjectItemStatus.ownedStatus;
                                    return (
                                        <AssetItemWrapper
                                            img={imagesByObjectId[id]}
                                            middle={{ content: `+${nFormatter({ num: dailyIncome })} / день` }}
                                            title={name}
                                            button={
                                                <Button
                                                    onClick={() => app.handleBuyObject(id)}
                                                    size={'s'}
                                                    icon={CoinPic}
                                                    type={owned ? 'text' : 'default'}
                                                    disabled={notAvailable}
                                                    className={styles.buttonBuy}
                                                >
                                                    {owned
                                                        ? nFormatter({ num: price })
                                                        : `Купить за ${nFormatter({ num: price })}`}
                                                </Button>
                                            }
                                            className={styles.assetItemWrapper}
                                            {...(owned && {
                                                status: 'primary',
                                            })}
                                            {...(notAvailable && {
                                                status: 'ghost',
                                            })}
                                        />
                                    );
                                })}
                            </div>
                        </BlockWrapper>
                    ))
                ) : (
                    <div>Данных по объектам нет</div>
                )}
            </div>
        </div>
    );
};
