/// <reference types="react-scripts" />
import { TelegramWebApps } from 'telegram-webapps-types';

declare module 'animated-number-react';
declare module 'react-stomp';

declare global {
    interface Window {
        Telegram?: {
            WebApp?: TelegramWebApps.WebApp & {
                BackButton: { onClick: (cb: () => void) => void; show: () => void; hide: () => void };
                setHeaderColor: (color: string) => void;
                enableClosingConfirmation: () => void;
            };
        };
    }
}
