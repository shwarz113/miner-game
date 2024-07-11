import React, { useMemo } from 'react';
import CoinPic from '../../assets/svg/coin-header.svg';
import PlusPic from '../../assets/images/plus.png';
import PlusCirclePic from '../../assets/images/plus-circle.png';
import GiftPic from '../../assets/images/gift.png';
import CopyPic from '../../assets/images/copy.png';
import ArrowRightPic from '../../assets/images/arrow-right-circle.png';
import CheckPic from '../../assets/images/check.png';
import LeadersPic from '../../assets/images/leaders-pic.png';
import styles from './index.module.css';
import { BlockWrapper } from '../../components/block-wrapper';
import { leadersMock } from './mock';
import { LeaderItem } from './LeaderItem';
import {Button} from "../../components/button";

const Block = ({
    points,
    title,
    pic,
    content,
    className,
}: {
    pic: string;
    title: string;
    className?: string;
    points?: number;
    content: React.ReactElement;
}) => (
    <BlockWrapper className={className}>
        <div className={styles.leadersBlockHeader}>
            <div className={styles.incomeCityTitle}>
                <div className={styles.incomeCityTitlePic}>
                    <img src={pic} alt=":)" />
                </div>
                <div>{title}</div>
            </div>
            {points ? (
                <div>
                    <div>+{points}</div>
                    <img src={CoinPic} alt="O" />
                </div>
            ) : null}
        </div>
        {content}
    </BlockWrapper>
);
export const LeadersContainer = () => {
    const data = {
        leaders: [
            ...leadersMock,
            {
                user_id: '1',
                nickname: 'Test User',
                photo: `https://randomuser.me/api/portraits/thumb/women/50.jpg`,
                points_rating: 123333,
                ranking_place: 123333,
            },
        ],
    };
    const inviteContent = useMemo(
        () => (
            <div>
                <div className={styles.leadersInput}>
                    <div>https://t.me/miner_bot_rq9u9vweuvewujfuqe09u9w0qufiw</div>
                    <img src={CopyPic} alt="" />
                </div>
                <Button onClick={() => {}} icon={PlusCirclePic}>
                    Пригласить друга
                </Button>
            </div>
        ),
        []
    );
    const bonusesContent = useMemo(
        () => (
            <div>
                <div className={`${styles.bonusBlock} ${styles.bonusBlock_completed}`}>
                    <div>Подпишись на канал о криптовалюте</div>
                    <div>
                        <img src={CheckPic} alt="" />
                    </div>
                </div>
                <div className={styles.bonusBlock}>
                    <div>Подпишись на канал о финансах</div>
                    <div>
                        <img src={ArrowRightPic} alt="" />
                    </div>
                </div>
            </div>
        ),
        []
    );
    const leadersContent = useMemo(
        () => (
            <div>
                <div className={styles.tableHeader}>
                    <div>Место</div>
                    <div>Участник</div>
                    <div>Очки</div>
                </div>
                <div style={{ position: 'relative' }}>
                    {data.leaders.map((player) => (
                        <LeaderItem key={player.user_id} player={player} isCurrentPlayer={player.user_id === '1'} />
                    ))}
                </div>
            </div>
        ),
        [data]
    );

    return (
        <div className={styles.leadersWrapper}>
            <Block title={'Пригласи друга'} pic={PlusPic} points={50000} content={inviteContent} />
            <Block title={'Бонусы от партнеров'} pic={GiftPic} points={1000} content={bonusesContent} />
            <Block
                title={'Список лидеров'}
                pic={LeadersPic}
                content={leadersContent}
                className={styles.blockWrapper}
            />
        </div>
    );
};