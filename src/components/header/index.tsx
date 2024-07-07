import { observer } from 'mobx-react-lite';
import React, {FC, useEffect} from 'react';
import {MobXAppStore} from "../../store/MobXStore";
import Coin from '../../assets/svg/coin-header.svg'
import Avatar from '../../assets/images/avatar.png'
import styles from './index.module.css';
import classNames from "classnames";

type Props = {
    app: MobXAppStore;
    isMainPage: boolean;
}
export const Header: FC<Props> = observer(({ app, isMainPage }) => {
    return (
        <div className={classNames(styles.header, !isMainPage && styles.headerMinimal)}>
            <div className={styles.headerItem}>
                <div className={styles.headerItemAvatar}><img src={Avatar} alt=":)"/></div>
                <div>Axel Tuogo</div>
            </div>
            <div className={styles.headerItem}>
                <div>152 350</div>
                <div className={styles.headerItemPic}><img src={Coin} alt="O"/></div>
            </div>
        </div>
    );
});
