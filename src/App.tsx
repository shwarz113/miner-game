import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MainContainer } from './pages/main-container';
import { Header } from './components/header';
import { IncomeContainer } from './pages/income';
import { DOMAIN, PagesEnum } from './constants';
import './App.css';
import { Init } from './Init';
import app from './store/MobXStore';
import { Loader } from './components/loader';
import { observer } from 'mobx-react-lite';
import CityPic from './assets/images/city.png';
import LeadersPic from './assets/images/leaders.png';
import MinerNavbarPic from './assets/images/miner-navbar.png';
import IncomePic from './assets/images/income.png';
import BoostPic from './assets/images/boost.png';
import { LeadersContainer } from './pages/leaders';
import {BoostContainer} from "./pages/boost";
import {TownContainer} from "./pages/town";
import {Navbar} from "./components/navbar";
import { toJS } from 'mobx'
import {IntroContainer} from "src/pages/intro";
import {StartContainer} from "src/pages/start";

function App() {
    console.log('app', toJS(app));
    const { pathname } = useLocation();
    const getInviteBonus = (refId: string) => app.inviteByRef(refId);

    // if (app.isLoading) {
    //     return (
    //         <div className="App">
    //             <Loader />
    //         </div>
    //     )
    // }

    if (pathname === `/${PagesEnum.Start}`) {
        return <StartContainer />
    }

    if (pathname === `/${PagesEnum.Intro}`) {
        return <IntroContainer />
    }
    return (
        <div className="App">
            <Init getInviteBonus={getInviteBonus} />
            <Header app={app} isMainPage={pathname === DOMAIN} />
            <Routes>
                <Route path={DOMAIN} element={<MainContainer app={app} />} />
                <Route path={`${DOMAIN}${PagesEnum.Income}`} element={<IncomeContainer app={app} />} />
                <Route path={`${DOMAIN}${PagesEnum.Leaders}`} element={<LeadersContainer app={app} />} />
                <Route path={`${DOMAIN}${PagesEnum.Boost}`} element={<BoostContainer app={app} />} />
                <Route path={`${DOMAIN}${PagesEnum.City}`} element={<TownContainer app={app} />} />
            </Routes>
            <Navbar />
        </div>
    );
}

export default observer(App);
