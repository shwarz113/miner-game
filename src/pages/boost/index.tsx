import React, { FC, useEffect } from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import MinerMiniPic from '../../assets/images/miner-mini.png';
import RocketPic from '../../assets/images/rocket.png';
import EnergyPic from '../../assets/images/energy.png';
import { BlockWrapper } from 'src/components/block-wrapper';
import { Button } from 'src/components/button';
import { MinerBlock } from 'src/components/miner-block';
import { AssetItemWrapper } from 'src/components/asset-item-wrapper';
import { MobXAppStore } from 'src/store/MobXStore';
import styles from './index.module.css';
import {DOMAIN, PagesEnum} from 'src/constants';
import { useNavigate } from 'react-router-dom';

type Props = {
    app: MobXAppStore;
};
export const BoostContainer: FC<Props> = ({ app }) => {
    const { minersInfo, userInfo, getMinersInfo } = app;
    const navigate = useNavigate();

    const isDisabledButtonBuy = !minersInfo.price || userInfo.balance < minersInfo.price;

    const buyMiner = () => {
        if (isDisabledButtonBuy) return;

        app.buyMiner(minersInfo.newId);
    };

    const activateRecharge = () => {
        if (userInfo.boost) {
            navigate(`${DOMAIN}${PagesEnum.Main}`);
            app.handleRecharge();
        }
    };

    useEffect(() => {
        getMinersInfo(userInfo.minerId);
    }, []);

    return (
        <div className={styles.boostWrapper}>
            <div className={styles.row}>
                <AssetItemWrapper
                    img={EnergyPic}
                    middle={{ text: `${userInfo.boost} / ${minersInfo.boost}` }}
                    title={'Энергия'}
                    button={
                        <Button onClick={activateRecharge} size={'s'} disabled={!userInfo.boost}>
                            Получить
                        </Button>
                    }
                    status={userInfo.boost ? 'default' : 'ghost'}
                />
                <AssetItemWrapper
                    img={RocketPic}
                    middle={{ text: `${userInfo.turboBoost} / ${minersInfo.turboBoost}` }}
                    title={'Турбобуст'}
                    button={
                        <Button onClick={() => {}} size={'s'} disabled={!userInfo.turboBoost}>
                            Получить
                        </Button>
                    }
                    status={userInfo.turboBoost ? 'default' : 'ghost'}
                />
            </div>
            <BlockWrapper className={styles.blockWrapper}>
                <div className={styles.minerTop}>
                    <div className={styles.minerTopLeft}>
                        <img src={MinerMiniPic} alt="" />
                        <div>Майнер ур. {minersInfo.level}</div>
                    </div>
                    <div className={styles.minerTopRight}>
                        <div>
                            Очков: <span>{minersInfo.pointsPerClick} / тап</span>
                        </div>
                        <img src={CoinPic} alt="" />
                    </div>
                </div>
                <div className={styles.miner}>
                    <MinerBlock level={minersInfo.level} onClick={() => {}} />
                </div>
                <Button icon={CoinPic} onClick={buyMiner} disabled={isDisabledButtonBuy}>
                    Новый уровень за {minersInfo.price || 0}
                </Button>
            </BlockWrapper>
        </div>
    );
};
