import { useEffect } from 'react';
import StartBg from 'src/assets/images/start-bg.png';
import LogoPic from 'src/assets/images/logo-game.png';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { DOMAIN, PagesEnum } from 'src/constants';
export const StartContainer = () => {
    const isShowIntro = !localStorage.getItem('intro');
    const navigate = useNavigate();

    const whereToGo = () => {
        setTimeout(() => {
            if (isShowIntro) {
                navigate(`${DOMAIN}${PagesEnum.Intro}`);
            } else {
                navigate(DOMAIN);
            }
        }, 2000)
    }

    useEffect(() => {
        whereToGo();
    }, [isShowIntro]);

    return <div className={styles.wrapper}>
        <div className={styles.body}>
            <img className={styles.startBg} src={StartBg} alt=""/>
            <div className={styles.gradient}></div>
            <img className={styles.logo} src={LogoPic} alt=""/>
            <div className={styles.text}>Загрузка</div>
        </div>
    </div>;
};
