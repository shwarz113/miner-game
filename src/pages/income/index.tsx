import React, { FC, useEffect } from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import MinerNavbarPic from '../../assets/images/miner-navbar.png';
import CityPic from '../../assets/images/city.png';
import CityBluePic from '../../assets/images/city-blue.png';
import GoalPic from '../../assets/images/goal.png';
import CarPic from '../../assets/images/car.png';
import PlusPic from '../../assets/images/plus.png';
import { BlockWrapper } from '../../components/block-wrapper';
import styles from './index.module.css';
import { MobXAppStore } from 'src/store/MobXStore';

type Props = {
    app: MobXAppStore;
};
export const IncomeContainer: FC<Props> = ({ app }) => {
    const { incomeStats } = app;
    // const data = {
    //     statistic: {
    //         balance: 152350,
    //         count_points: 100000,
    //         activity_income: 50000,
    //         city_income: 2350,
    //         total_costs: 12329,
    //     },
    //     city_income: [
    //         { name: 'Mercedes A', daily: 120, total: 500, date: '2024-06-10 12:44:20' },
    //         { name: 'Rodisson', daily: 50, total: 200, date: '2024-06-10 12:44:20' },
    //         { name: 'House', daily: 10, total: 50, date: '2024-06-10 12:44:20' },
    //     ],
    //     activity_income: [
    //         { name: 'Приглашение пользователя', total: 50000, date: '2024-06-10 12:44:20' },
    //         { name: 'Подписка на канал', total: 20000, date: '2024-06-10 12:44:20' },
    //     ],
    // };

    useEffect(() => {
        app.getIncomeStats();
    }, []);
    return (
        <div className={styles.incomeWrapper}>
            <div className={styles.incomeBalance}>
                <div>Общий баланс:</div>
                <div>{incomeStats?.statistics.balance || 0}</div>
                <div>
                    <img src={CoinPic} alt="O" />
                </div>
            </div>
            <div className={styles.incomeTypesBalance}>
                <div className={styles.incomeTypesBalanceItem}>
                    <img src={MinerNavbarPic} alt="miner" />
                    <div>Майнер</div>
                    <div>{incomeStats?.statistics.countPoints || 0}</div>
                </div>
                <div className={styles.incomeTypesBalanceItem}>
                    <img src={CityPic} alt="city" />
                    <div>Город</div>
                    <div>{incomeStats?.statistics.incomeFromObject || 0}</div>
                </div>
                <div className={styles.incomeTypesBalanceItem}>
                    <img src={GoalPic} alt="goal" />
                    <div>Активность</div>
                    <div>{incomeStats?.statistics.incomeFromActive || 0}</div>
                </div>
            </div>
            {incomeStats?.objectIncome.length ? (
                <BlockWrapper>
                    <div className={styles.incomeCityTitle}>
                        <div>
                            <img src={CityPic} alt="city" />
                        </div>
                        <div>Доходы города</div>
                    </div>
                    <div className={styles.incomeCitySubtitle}>
                        <div>Объект</div>
                        <div>Доход</div>
                    </div>
                    {incomeStats.objectIncome.map(({ totalIncome, name }) => (
                        <div key={name} className={styles.incomeCityItem}>
                            <div>
                                <div>
                                    <img src={CarPic} alt=" " />
                                </div>
                                <div>{name}</div>
                            </div>
                            <div>{totalIncome}</div>
                        </div>
                    ))}
                </BlockWrapper>
            ) : (
                <BlockWrapper className={styles.emptyBlock}>
                    <img src={CityBluePic} alt="city" />
                    <div>Доходы города</div>
                    <div>У вас пока нет доходов от города</div>
                </BlockWrapper>
            )}
            <div className={styles.incomeCityDivider}></div>
            {incomeStats?.activeIncome.length ? (
                <BlockWrapper>
                    <div className={styles.incomeCityTitle}>
                        <div>
                            <img src={GoalPic} alt=":)" />
                        </div>
                        <div>Доходы от активности</div>
                    </div>
                    <div className={styles.incomeCitySubtitle}>
                        <div>Объект</div>
                        <div>Доход</div>
                    </div>
                    {incomeStats.activeIncome.map(({ income, type }) => (
                        <div key={type} className={styles.incomeCityItem}>
                            <div>
                                <div>
                                    <img src={PlusPic} alt=" " />
                                </div>
                                <div>{type}</div>
                            </div>
                            <div>{income}</div>
                        </div>
                    ))}
                </BlockWrapper>
            ) : (
                <BlockWrapper className={styles.emptyBlock}>
                    <img src={GoalPic} alt=":)" />
                    <div>Доходы от активности</div>
                    <div>У вас пока нет доходов от активности</div>
                </BlockWrapper>
            )}
        </div>
    );
};
