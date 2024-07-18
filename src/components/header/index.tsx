import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { MobXAppStore } from "src/store/MobXStore";
import Coin from '../../assets/svg/coin-header.svg'
import Avatar from '../../assets/images/avatar.png'
import styles from './index.module.css';
import classNames from "classnames";

type Props = {
    app: MobXAppStore;
    isMainPage: boolean;
}
export const Header: FC<Props> = observer(({ app, isMainPage }) => {
    const { userInfo: { balance, username, photo_url }} = app;

    const iconAvatar = photo_url ? photo_url: Avatar;
    return (
        <div className={classNames(styles.header, !isMainPage && styles.headerMinimal)}>
            <div className={styles.headerItem}>
                <div className={styles.headerItemAvatar}>
                    <img src={iconAvatar} alt=":)"/>
                </div>
                <div>{username}</div>
            </div>
            <div className={styles.headerItem}>
                <div>{balance}</div>
                <div className={styles.headerItemPic}><img src={Coin} alt="O"/></div>
            </div>
        </div>
    );
});
