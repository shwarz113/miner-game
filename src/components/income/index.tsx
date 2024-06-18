import React from 'react';
import Avatar from "../header/avatar.png";
import CoinPic from "../header/coin-header.svg";
import MinerNavbarPic from "../main-container/miner-navbar.png";
import CityPic from "../main-container/city.png";
import GoalPic from "./goal.png";
import CarPic from "./car.png";
import PlusPic from "./plus.png";
import './index.css';

export const IncomeContainer = () => {
    const data = {
        statistic: {
            balance: 152350,
            count_points: 100000,
            activity_income: 50000,
            city_income: 2350,
            total_costs: 12329,
        },
        city_income: [
            { name: 'Mercedes A', daily: 120, total: 500, date: '2024-06-10 12:44:20' },
            { name: 'Rodisson', daily: 50, total: 200, date: '2024-06-10 12:44:20' },
            { name: 'House', daily: 10, total: 50, date: '2024-06-10 12:44:20' },
        ],
        activity_income: [
            { name: 'Приглашение пользователя', total: 50000, date: '2024-06-10 12:44:20' },
            { name: 'Подписка на канал', total: 20000, date: '2024-06-10 12:44:20' },
        ],
    }
    return (
        <div className={'incomeWrapper'}>
            <div className="incomeBalance">
                <div>Общий баланс:</div>
                <div>{data.statistic.balance}</div>
                <div><img src={CoinPic} alt="O"/></div>
            </div>
            <div className="incomeTypesBalance">
                <div className={'incomeTypesBalanceItem'}>
                    <img src={MinerNavbarPic} alt="miner"/>
                    <div>Майнер</div>
                    <div>{data.statistic.count_points}</div>
                </div>
                <div className={'incomeTypesBalanceItem'}>
                    <img src={CityPic} alt="city"/>
                    <div>Город</div>
                    <div>{data.statistic.city_income}</div>
                </div>
                <div className={'incomeTypesBalanceItem'}>
                    <img src={GoalPic} alt="goal"/>
                    <div>Активность</div>
                    <div>{data.statistic.activity_income}</div>
                </div>
            </div>
            <div className="incomeCityTitle">
                <div className="incomeCityTitlePic"><img src={CityPic} alt=":)"/></div>
                <div>Доходы города</div>
            </div>
            <div className="incomeCitySubtitle">
                <div>Объект</div>
                <div>Доход</div>
            </div>
            {data.city_income.map(({ total, name }) => (
                <div key={name} className={'incomeCityItem'}>
                    <div>
                        <div><img src={CarPic} alt=" "/></div>
                        <div>{name}</div>
                    </div>
                    <div>{total}</div>
                </div>
            ))}
            <div className={'incomeCityDivider'}></div>
            <div className="incomeCityTitle">
                <div className="incomeCityTitlePic"><img src={GoalPic} alt=":)"/></div>
                <div>Доходы от активности</div>
            </div>
            <div className="incomeCitySubtitle">
                <div>Объект</div>
                <div>Доход</div>
            </div>
            {data.activity_income.map(({ total, name }) => (
                <div key={name} className={'incomeCityItem'}>
                    <div>
                        <div><img src={PlusPic} alt=" "/></div>
                        <div>{name}</div>
                    </div>
                    <div>{total}</div>
                </div>
            ))}
        </div>
    );
};
