import React, { FC } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import MinerWrapperPic from "../../assets/images/miner-wrapper.png";
import Miner1Pic from "../../assets/images/miner-1.png";

type Props = {
    onClick: () => void;
    touchStart?: () => void;
    touchEnd?: () => void;
    level: number;
    disabled?: boolean;
    ref?: React.Ref<any>;
};
export const MinerBlock: FC<Props> = ({ onClick, disabled = false, ref, touchStart, touchEnd }) => {
    return (
        <div className={classNames(styles.minerWrapper, disabled && styles.disabled)}>
            <img className={styles.minerWrapperPic} src={MinerWrapperPic} alt=""/>
            <div className={styles.miner}>
                <img ref={ref} className={styles.minerPic} src={Miner1Pic} alt="" onClick={onClick} onTouchStart={touchStart} onTouchEnd={touchEnd}/>
            </div>
        </div>
    );
};
