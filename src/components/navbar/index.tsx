import {useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {DOMAIN, PagesEnum} from "../../constants";
import CityPic from "../../assets/images/city.png";
import LeadersPic from "../../assets/images/leaders.png";
import MinerNavbarPic from "../../assets/images/miner-navbar.png";
import IncomePic from "../../assets/images/income.png";
import BoostPic from "../../assets/images/boost.png";
import styles from './index.module.css';
import classNames from "classnames";

export const Navbar = () => {
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

    return (
        <div className={styles.navbar}>
            <div
                className={classNames(styles.navbarItem, pathname === `${DOMAIN}${PagesEnum.City}` && styles.active)}
                onClick={goToCity}
            >
                <img src={CityPic} alt="Город"/>
                <div>Город</div>
            </div>
            <div
                className={classNames(styles.navbarItem, pathname === `${DOMAIN}${PagesEnum.Leaders}` && styles.active)}
                onClick={goToLeaders}
            >
                <img src={LeadersPic} alt="Лидеры"/>
                <div>Лидеры</div>
            </div>
            <div className={classNames(styles.navbarItem, pathname === DOMAIN && styles.active)} onClick={goToMain}>
                <img src={MinerNavbarPic} alt="Майнер"/>
                <div>Майнер</div>
            </div>
            <div
                className={classNames(styles.navbarItem, pathname === `${DOMAIN}${PagesEnum.Income}` && styles.active)}
                onClick={goToIncome}
            >
                <img src={IncomePic} alt="Доход"/>
                <div>Доход</div>
            </div>
            <div
                className={classNames(styles.navbarItem, pathname === `${DOMAIN}${PagesEnum.Boost}` && styles.active)}
                onClick={goToBoost}
            >
                <img src={BoostPic} alt="Буст"/>
                <div>Буст</div>
            </div>
        </div>
    )
}