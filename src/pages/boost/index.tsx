import React from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import MinerMiniPic from '../../assets/images/miner-mini.png';
import RocketPic from '../../assets/images/rocket.png';
import EnergyPic from '../../assets/images/energy.png';
import Miner1Pic from '../../assets/images/miner-1.png';
import MinerWrapperPic from '../../assets/images/miner-wrapper.png';
import { BlockWrapper } from '../../components/block-wrapper';
import styles from './index.module.css';
import { userMock } from './constants';
import { Button } from '../../components/button';
import {MinerBlock} from "../../components/miner-block";
import {AssetItemWrapper} from "../../components/asset-item-wrapper";

export const BoostContainer = () => {
    const data = {
        statistic: userMock,
    };
    return (
        <div className={styles.boostWrapper}>
            <div className={styles.row}>
                <AssetItemWrapper
                    img={EnergyPic}
                    middle={{text: `${data.statistic.boost} / 3` }}
                    title={'Энергия'}
                    button={(<Button onClick={() => {}} size={'s'}>Получить</Button>)}
                />
                <AssetItemWrapper
                    img={RocketPic}
                    middle={{text: `${data.statistic.turbo_boost} / 3` }}
                    title={'Турбобуст'}
                    button={(<Button onClick={() => {}} size={'s'} disabled>Получить</Button>)}
                />
            </div>
            <BlockWrapper className={styles.blockWrapper}>
                <div className={styles.minerTop}>
                    <div className={styles.minerTopLeft}>
                        <img src={MinerMiniPic} alt="" />
                        <div>Майнер ур. {data.statistic.level}</div>
                    </div>
                    <div className={styles.minerTopRight}>
                        <div>
                            Очков: <span>{data.statistic.points_per_click} / тап</span>
                        </div>
                        <img src={CoinPic} alt="" />
                    </div>
                </div>
                <div className={styles.miner}>
                    <MinerBlock level={1} onClick={()=>{}} />
                </div>
                <Button icon={CoinPic} onClick={() => {}}>
                    Новый уровень за 10 000
                </Button>
            </BlockWrapper>
        </div>
    );
};
