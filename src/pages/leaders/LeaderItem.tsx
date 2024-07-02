import {Leader} from "./mock";
import {FC} from "react";
import styles from './LeaderItem.module.css';
import {numberWithSeparationThousands} from "../../utils/formatters";

interface Props {
    player: Leader;
    isCurrentPlayer: boolean;
}
export const LeaderItem: FC<Props> = ({ player, isCurrentPlayer }) => {
    const rankStyle = player.ranking_place <= 3 ? styles[`rank-${player.ranking_place}`]: '';
    return (
        <div className={`${styles.leaderItem} ${isCurrentPlayer ? styles.leaderItem_current : '' }`}>
            <div>
                <div className={`${styles.rank} ${rankStyle}`}>
                    <div className={styles.rankValue}>
                        { player.ranking_place > 10000 ? '10000+' : player.ranking_place}
                    </div>
                </div>
            </div>
            <div className={styles.nameWrapper}>
                <div className={styles.avatar}><img src={player.photo} alt={''}/></div>
                <div className={styles.name}>{player.nickname}</div>
            </div>
            <div className={styles.points}>{numberWithSeparationThousands(player.points_rating)}</div>
        </div>
    )
}