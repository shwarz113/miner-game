import { observer } from 'mobx-react-lite';
import React, {FC, useEffect} from 'react';
// import { useStore } from '../../store/store';
import './index.css';
import {MobXAppStore} from "../../store/MobXStore";
import Coin from '../../assets/svg/coin-header.svg'
import Avatar from '../../assets/images/avatar.png'

type Props = {
    app: MobXAppStore;
    isMainPage: boolean;
}
export const Header: FC<Props> = observer(({ app, isMainPage }) => {
    return (
        <div className={`header ${isMainPage ? '' : 'headerMinimal'}`}>
            <div className="headerItem">
                <div className="headerItemAvatar"><img src={Avatar} alt=":)"/></div>
                <div>Axel Tuogo</div>
            </div>
            <div className="headerItem">
                <div>152 350</div>
                <div className="headerItemPic"><img src={Coin} alt="O"/></div>
            </div>
        </div>
    );
});
