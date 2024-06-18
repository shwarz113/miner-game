import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { MainContainer } from './components/main-container';
import { Header } from './components/header';
import { IncomeContainer } from './components/income';
import { LootboxContainer } from './components/lootbox';
import { DOMAIN, PagesEnum } from './constants';
import { instrumentsMock, upgradesMock, upgradesRoomMock } from './components/main-container/constants';
import { Upgrades } from './components/upgrade';
import './App.css';
import { Init } from './Init';
import app from './store/MobXStore';
import { Loader } from './components/loader';
import { observer } from 'mobx-react-lite';
import CityPic from './components/main-container/city.png';
import LeadersPic from './components/main-container/leaders.png';
import MinerNavbarPic from './components/main-container/miner-navbar.png';
import IncomePic from './components/main-container/income.png';
import BoostPic from './components/main-container/boost.png';
import { LeadersContainer } from './components/leaders';

function App() {
    console.log('app', app);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const goToIncome = () => {
        navigate(`${DOMAIN}${PagesEnum.Income}`);
    };
    const goToMain = () => {
        navigate(DOMAIN);
    };
    const goToCity = () => {
        navigate(`${DOMAIN}${PagesEnum.City}`);
    };
    const goToLeaders = () => {
        navigate(`${DOMAIN}${PagesEnum.Leaders}`);
    };
    const goToBoost = () => {
        navigate(`${DOMAIN}${PagesEnum.Boost}`);
    };

    // if (app.isLoading) {
    //     return (
    //         <div className="App">
    //             <Loader />
    //         </div>
    //     )
    // }

    return (
        <div className="App">
            <Init />
            <Header app={app} isMainPage={pathname === DOMAIN} />
            <Routes>
                <Route path={DOMAIN} element={<MainContainer app={app} />} />
                <Route path={`${DOMAIN}${PagesEnum.Income}`} element={<IncomeContainer />} />
                <Route path={`${DOMAIN}${PagesEnum.Leaders}`} element={<LeadersContainer />} />
                <Route path={`${DOMAIN}${PagesEnum.Boost}`} element={<LeadersContainer />} />
                <Route path={`${DOMAIN}${PagesEnum.City}`} element={<IncomeContainer />} />
            </Routes>
            <div className={'navbar'}>
                <div
                    className={`navbarItem ${pathname === `${DOMAIN}${PagesEnum.City}` ? 'active' : ''}`}
                    onClick={goToCity}
                >
                    <img src={CityPic} alt="Город" />
                    <div>Город</div>
                </div>
                <div
                    className={`navbarItem ${pathname === `${DOMAIN}${PagesEnum.Leaders}` ? 'active' : ''}`}
                    onClick={goToLeaders}
                >
                    <img src={LeadersPic} alt="Лидеры" />
                    <div>Лидеры</div>
                </div>
                <div className={`navbarItem ${pathname === DOMAIN ? 'active' : ''}`} onClick={goToMain}>
                    <img src={MinerNavbarPic} alt="Майнер" />
                    <div>Майнер</div>
                </div>
                <div
                    className={`navbarItem ${pathname === `${DOMAIN}${PagesEnum.Income}` ? 'active' : ''}`}
                    onClick={goToIncome}
                >
                    <img src={IncomePic} alt="Доход" />
                    <div>Доход</div>
                </div>
                <div
                    className={`navbarItem ${pathname === `${DOMAIN}${PagesEnum.Boost}` ? 'active' : ''}`}
                    onClick={goToBoost}
                >
                    <img src={BoostPic} alt="Буст" />
                    <div>Буст</div>
                </div>
            </div>
        </div>
    );
}

export default observer(App);
