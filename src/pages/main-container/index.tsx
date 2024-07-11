import React, { FC, useCallback, useRef, useState } from 'react';
// import AnimatedNumber from 'animated-number-react';
import { action } from 'mobx';
// import { useStore } from '../../store/store';
// import { TURBO_TIME } from '../../store/constants';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import app, { MobXAppStore } from '../../store/MobXStore';
import BalanceTapsPic from '../../assets/images/balance-taps.png';
import {MinerBlock} from "../../components/miner-block";
import styles from './index.module.css';
import classNames from "classnames";

type Props = {
    app: MobXAppStore;
};
export const MainContainer: FC<Props> = observer(({ app }) => {
    const [points, setPoints] = useState<string[]>([]);
    const el = document.querySelector('.main-container-bg');
    // const { gameStore } = useStore();
    const navigate = useNavigate();
    // const {
    // } = gameStore;

    const tapTimerDebounceRef = useRef<any>();

    // const handleTapAction = action((v: boolean) => {
    //     gameStore.isTap = v;
    // });

    function handleDebounceClick() {
        if (tapTimerDebounceRef.current) {
            clearTimeout(tapTimerDebounceRef.current);
        }
        tapTimerDebounceRef.current = setTimeout(() => {
            // handleTapAction(false);
            setPoints([]);
        }, 1000);
    }
    const animatePoints = useCallback(() => {
        const key = Math.floor(Math.random() * 3) + 1 + Math.random().toFixed(6);
        const p = points.length > 30 ? [...points.slice(25), key] : [...points, key];
        setPoints(p);
    }, [points.length]);

    const handleCoinClick = () => {
        handleDebounceClick();
        animatePoints();
    }

    // const handleCoinClick = action((e: any) => {
    //     handleDebounceClick();
    //     animatePoints();
    //     if (app.battery) {
    //         gameStore.isTap = true;
    //         app.handleTap();
    //         handleDebounceClick();
    //         animatePoints();
    //     }
    // });
    const touchStart = () => el?.classList.add('clicked');
    const touchEnd = () => el?.classList.remove('clicked');

    // const formatTimerValue = (v: number) => ((TURBO_TIME - v) / 1000).toFixed(2);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerBg}>
                <div className="fake-scroll"></div>
                {points.map((v) => (
                    <div key={v} className={classNames(styles.coinWrapper, styles[`anim${v[0]}`])}/>
                ))}
                <MinerBlock level={1} onClick={handleCoinClick} disabled={true} />
            </div>
            <div className={styles.balanceTaps}>
                <img src={BalanceTapsPic} alt=""/>
                <div>240/1000</div>
            </div>
        </div>
    );
});