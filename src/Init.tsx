import { DOMAIN } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import api from "src/api";
// @ts-ignore
const tg = window.Telegram?.WebApp;

type Props = {
    getInviteBonus: (refId: string) => void;
}
export const Init: FC<Props> = memo(({ getInviteBonus }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    console.log('tg', tg);
    const BackButton = tg?.BackButton;
    BackButton?.onClick(function () {
        navigate(DOMAIN);
    });

    useEffect(() => {
        tg?.expand();
        tg?.setHeaderColor('#000');
        document.querySelector('.main-container-bg')?.addEventListener('touchmove', (e) => {
            e.preventDefault();
        });
        if (tg?.initDataUnsafe.start_param) {
            getInviteBonus(tg?.initDataUnsafe.start_param);
        }
    }, []);

    useEffect(() => {
        tg?.onEvent('viewportChanged', () => tg?.expand());
    }, [tg?.isExpanded]);

    useEffect(() => {
        if (pathname === DOMAIN) {
            BackButton?.hide();
        } else {
            BackButton?.show();
        }
    }, [pathname]);

    return <></>;
});
