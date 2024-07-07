import React, { FC } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import MinerWrapperPic from "../../assets/images/miner-wrapper.png";
import Miner1Pic from "../../assets/images/miner-1.png";

type Props = {
    onClick: () => void;
    level: number;
    disabled?: boolean;
};
export const MinerBlock: FC<Props> = ({ onClick, disabled = false }) => {
    return (
        <div className={classNames(styles.minerWrapper, disabled && styles.disabled)}>
            <img className={styles.minerWrapperPic} src={MinerWrapperPic} alt=""/>
            <div className={styles.miner}>
                <img className={styles.minerPic} src={Miner1Pic} alt="" onClick={onClick}/>
            </div>
        </div>
    );
};
