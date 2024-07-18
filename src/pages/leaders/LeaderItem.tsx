import {FC} from "react";
import {numberWithSeparationThousands} from "../../utils/formatters";
import {LeadersItem} from "src/api/user";
import avatar from '../../assets/images/avatar.png'
import styles from './LeaderItem.module.css';

interface Props {
    player: LeadersItem;
    isCurrentPlayer: boolean;
}
export const LeaderItem: FC<Props> = ({ player, isCurrentPlayer }) => {
    const rankStyle = player.rankingPlace <= 3 ? styles[`rank-${player.rankingPlace}`]: '';
    return (
        <div className={`${styles.leaderItem} ${isCurrentPlayer ? styles.leaderItem_current : '' }`}>
            <div>
                <div className={`${styles.rank} ${rankStyle}`}>
                    <div className={styles.rankValue}>
                        { player.rankingPlace > 10000 ? '10000+' : player.rankingPlace}
                    </div>
                </div>
            </div>
            <div className={styles.nameWrapper}>
                <div className={styles.avatar}><img src={avatar} alt={''}/></div>
                <div className={styles.name}>{player.username}</div>
            </div>
            <div className={styles.points}>{numberWithSeparationThousands(player.balance)}</div>
        </div>
    )
}