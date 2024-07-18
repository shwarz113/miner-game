import React, {FC} from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import MinerMiniPic from '../../assets/images/miner-mini.png';
import RocketPic from '../../assets/images/rocket.png';
import EnergyPic from '../../assets/images/energy.png';
import { BlockWrapper } from '../../components/block-wrapper';
import styles from './index.module.css';
import { Button } from '../../components/button';
import {MinerBlock} from "../../components/miner-block";
import {AssetItemWrapper} from "../../components/asset-item-wrapper";
import {MobXAppStore} from "src/store/MobXStore";

type Props = {
    app: MobXAppStore;
}
export const BoostContainer: FC<Props> = ({ app }) => {
    const { minersInfo, userInfo } = app;

    return (
        <div className={styles.boostWrapper}>
            <div className={styles.row}>
                <AssetItemWrapper
                    img={EnergyPic}
                    middle={{text: `${userInfo.boost} / ${minersInfo.boost}` }}
                    title={'Энергия'}
                    button={(<Button onClick={() => {}} size={'s'} disabled={!userInfo.boost}>Получить</Button>)}
                    status={userInfo.boost ? 'default': 'ghost'}
                />
                <AssetItemWrapper
                    img={RocketPic}
                    middle={{text: `${userInfo.turboBoost} / ${minersInfo.turboBoost}` }}
                    title={'Турбобуст'}
                    button={(<Button onClick={() => {}} size={'s'} disabled={!userInfo.turboBoost}>Получить</Button>)}
                    status={userInfo.turboBoost ? 'default': 'ghost'}
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
                    <MinerBlock level={minersInfo.level} onClick={()=>{}} />
                </div>
                <Button icon={CoinPic} onClick={() => {}}>
                    Новый уровень за 10 000
                </Button>
            </BlockWrapper>
        </div>
    );
};
