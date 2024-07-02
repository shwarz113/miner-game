import React, {FC, useCallback, useRef, useState} from 'react';
import AnimatedNumber from 'animated-number-react';
import { action } from 'mobx';
// import { useStore } from '../../store/store';
// import { TURBO_TIME } from '../../store/constants';
import { observer } from 'mobx-react-lite';
import {useNavigate} from "react-router-dom";
import './index.css';
import app, {MobXAppStore} from "../../store/MobXStore";
import BalanceTapsPic from "../../assets/images/balance-taps.png";

type Props = {
    app: MobXAppStore;
}
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
        const p = points.length > 30 ? [...points.slice(25), key]: [...points, key];
        setPoints(p);
    }, [points.length])

    const handleCoinClick = action((e: any) => {
        if (app.battery) {
            // gameStore.isTap = true;
            app.handleTap();
            handleDebounceClick();
            animatePoints();
        }
    });
    const touchStart = () => el?.classList.add('clicked');
    const touchEnd = () => el?.classList.remove('clicked');

    // const formatTimerValue = (v: number) => ((TURBO_TIME - v) / 1000).toFixed(2);

    return (
        <div className={'main-container'}>
            <div
                className="main-container-bg"
                // style={{backgroundImage: roomUpgrades.main}}
            >
                {/*<img src={roomUpgrades.main}*/}
                {/*     onTouchStart={touchStart}*/}
                {/*     onTouchEnd={touchEnd}*/}
                {/*     onClick={handleCoinClick}*/}
                {/*/>*/}
                <div className="fake-scroll"></div>
                {points.map((v) => (
                    <div key={v} className={`coin-wrapper anim${v[0]}`}>
                        <div>+{app.commonInfo?.coinPerTap.currentValue || 1}</div>
                    </div>
                ))}
            </div>
            <div className="balanceTaps">
                <div className="balanceTapsPic"><img src={BalanceTapsPic} alt=""/></div>
                <div>240/1000</div>
            </div>
        </div>
    );
});
