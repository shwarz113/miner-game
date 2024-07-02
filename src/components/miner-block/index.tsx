import React, { FC } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import MinerWrapperPic from "../../assets/images/miner-wrapper.png";
import Miner1Pic from "../../assets/images/miner-1.png";

type Props = {
    onClick: () => void;
    level: number;
};
export const MinerBlock: FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.minerWrapper}>
            <img className={styles.minerWrapperPic} src={MinerWrapperPic} alt=""/>
            <div className={styles.miner}>
                <img className={styles.minerPic} src={Miner1Pic} alt="" onClick={onClick}/>
            </div>
        </div>
    );
};
