import React, {useMemo} from 'react';
import CoinPic from "../header/coin-header.svg";
import MinerNavbarPic from "../main-container/miner-navbar.png";
import CityPic from "../main-container/city.png";
import GoalPic from "./goal.png";
import CarPic from "./car.png";
import PlusPic from "./plus.png";
import PlusCirclePic from "./plus-circle.png";
import GiftPic from "./gift.png";
import CopyPic from "./copy.png";
import ArrowRightPic from "./arrow-right-circle.png";
import CheckPic from "./check.png";
import LeadersPic from "./leaders-pic.png";
import './index.css';

const Block = ({ points, title, pic, content }: { pic: string; title: string; points?: number; content: React.ReactElement }) => (
    <div className={'leadersBlock'}>
        <div className="leadersBlockHeader">
            <div className="incomeCityTitle">
                <div className="incomeCityTitlePic"><img src={pic} alt=":)"/></div>
                <div>{title}</div>
            </div>
            {points ? (
                <div>
                    <div>+{points}</div>
                    <img src={CoinPic} alt="O"/>
                </div>
            ) : null}
        </div>
        {content}
    </div>
)
export const LeadersContainer = () => {
    const data = {
        statistic: {
            balance: 152350,
            count_points: 100000,
            activity_income: 50000,
            city_income: 2350,
            total_costs: 12329,
        },
        city_income: [
            {name: 'Mercedes A', daily: 120, total: 500, date: '2024-06-10 12:44:20'},
            {name: 'Rodisson', daily: 50, total: 200, date: '2024-06-10 12:44:20' },
            { name: 'House', daily: 10, total: 50, date: '2024-06-10 12:44:20' },
        ],
        activity_income: [
            { name: 'Приглашение пользователя', total: 50000, date: '2024-06-10 12:44:20' },
            { name: 'Подписка на канал', total: 20000, date: '2024-06-10 12:44:20' },
        ],
    }
    const inviteContent = useMemo(() => (
        <div>
            <div className={'leadersInput'}>
                <div>https://t.me/miner_bot_rq9u9vweuvewujfuqe09u9w0qufiw</div>
                <img src={CopyPic} alt=""/>
            </div>
            <div className={'leadersButton'}>
                <div>Пригласить друга</div>
                <img src={PlusCirclePic} alt=""/>
            </div>
        </div>
    ), []);
    const bonusesContent = useMemo(() => (
        <div>
            <div className={`bonusBlock bonusBlock-completed`}>
                <div>Подпишись на канал о криптовалюте</div>
                <div><img src={CheckPic} alt=""/></div>
            </div>
            <div className={'bonusBlock'}>
                <div>Подпишись на канал о финансах</div>
                <div><img src={ArrowRightPic} alt=""/></div>
            </div>
        </div>
    ), []);

    return (
        <div className={'leadersWrapper'}>
            <Block
                title={'Пригласи друга'}
                pic={PlusPic}
                points={50000}
                content={inviteContent}
            />
            <Block
                title={'Бонусы от партнеров'}
                pic={GiftPic}
                points={1000}
                content={bonusesContent}
            />
            <Block
                title={'Список лидеров'}
                pic={LeadersPic}
                content={<></>}
            />
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
