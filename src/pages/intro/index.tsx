import {useEffect, useState} from 'react';
import IntroBg from 'src/assets/images/intro-bg.png';
import IntroPic1 from 'src/assets/images/intro-step-1.png';
import IntroPic2 from 'src/assets/images/intro-step-2.png';
import IntroPic3 from 'src/assets/images/intro-step-3.png';
import ChevronRight from 'src/assets/svg/chevron-right.svg';
import ChevronRightBlack from 'src/assets/svg/chevron-right-black.svg';
import LogoPic from 'src/assets/images/logo-game.png';
import { Button } from 'src/components/button';
import styles from './index.module.css';
import {useNavigate} from "react-router-dom";
import {DOMAIN, PagesEnum} from "src/constants";
export const IntroContainer = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const goToMain = () => {
        navigate(`${DOMAIN}${PagesEnum.Main}`);
        // todo вернуть установку параметра
        // localStorage.setItem('intro', '1');
    };
    const nextStep = () => setStep(step + 1);

    const step1 = (
        <div className={styles.step}>
            <img className={styles.introBg} src={IntroBg} alt="" />
            <div className={styles.title}>Кликайте на экран и зарабатывайте монеты</div>
            <div className={styles.subtitle}>
                Вы можете использовать бусты и пополнять энергию чтобы получить больше монет
            </div>
            <img className={styles.phone} src={IntroPic1} alt="" />
        </div>
    );

    const step2 = (
        <div className={styles.step}>
            <img className={styles.introBg} src={IntroBg} alt="" />
            <div className={styles.title}>Улучшайте свой город</div>
            <div className={styles.subtitle}>Покупайте недвижимость, чтобы увеличить свой пассивный доход</div>
            <img className={styles.phone} src={IntroPic2} alt="" />
        </div>
    );

    const step3 = (
        <div className={styles.step}>
            <img className={styles.introBg} src={IntroBg} alt="" />
            <div className={styles.title}>Приглашайте друзей и получайте бонусы вместе</div>
            <div className={styles.subtitle}>Монеты получите вы и ваш друг</div>
            <img className={styles.phone} src={IntroPic3} alt="" />
        </div>
    );

    const step4 = (
        <div className={styles.step}>
            <img className={styles.introBg} src={IntroBg} alt="" />
            <div className={styles.title}>Зарабатывайте монеты и станьте первым в таблице лидеров</div>
            <div className={styles.subtitle}>Не забудьте пригласить своих друзей. Удачи!</div>
            <div className={styles.coin}></div>
        </div>
    );

    return (
        <div className={styles.wrapper}>
            {step === 1 && step1}
            {step === 2 && step2}
            {step === 3 && step3}
            {step === 4 && step4}
            <div className={styles.footer}>
                {step === 4 ? (
                    <Button className={styles.buttonFinal} icon={ChevronRightBlack} onClick={goToMain}>
                        Играть
                    </Button>
                ) : (
                    <div className={styles.button} onClick={nextStep}>
                        Пропустить <img src={ChevronRight} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};
