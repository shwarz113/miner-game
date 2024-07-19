import React, {FC, useEffect, useMemo, useState} from 'react';
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
import { Button } from '../../components/button';
import { MobXAppStore } from 'src/store/MobXStore';
import CheckSvg from "src/assets/svg/check.svg";

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

type Props = {
    app: MobXAppStore;
};
export const LeadersContainer: FC<Props> = ({ app }) => {
    const {
        leaders,
        userInfo: { id: userId, telegramId },
    } = app;
    const [isCopied, setIsCopied] = useState(false);
    const inviteLink = `https://t.me/tgame_crypto_bot/miner?startapp=${telegramId}`;
    const inviteContent = useMemo(
        () => (
            <div>
                <div className={styles.leadersInput}>
                    <div>{inviteLink}</div>
                    <img
                        src={isCopied ? CheckSvg: CopyPic}
                        alt=""
                        onClick={() => {
                            navigator.clipboard.writeText(inviteLink);
                            setIsCopied(true);
                            setTimeout(() => setIsCopied(false), 2000)
                        }}
                    />
                </div>
                <Button
                    icon={PlusCirclePic}
                    href={`https://t.me/share/url?url=${inviteLink}&text=Заходи в игру и зарабатывай!`}
                >
                    Пригласить друга
                </Button>
            </div>
        ),
        [isCopied]
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
        () =>
            leaders?.length ? (
                <div>
                    <div className={styles.tableHeader}>
                        <div>Место</div>
                        <div>Участник</div>
                        <div>Очки</div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        {leaders.map((player) => (
                            <LeaderItem key={player.id} player={player} isCurrentPlayer={player.id === userId} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>Данных по игрокам нет</div>
            ),
        [leaders]
    );

    useEffect(() => {
        app.getLeaders();
    }, []);

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
