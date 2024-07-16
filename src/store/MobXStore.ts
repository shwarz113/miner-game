import { action, makeAutoObservable } from 'mobx';
import { Client } from '@stomp/stompjs';
import { SOCKET_URL } from '../constants';
import {BalanceResponse} from "./types";

class MobXApp {
    client: Client | undefined;
    balance: number = 0;
    income: number = 0;
    battery: number = 0;
    userName: string = '';
    isLoading = true;

    constructor() {
        // @ts-ignore
        this.userName = window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'Это тест';
        makeAutoObservable(this);
        console.log('mobx');
        // this.client = new Client({
        //     brokerURL: SOCKET_URL,
        //     onConnect: () => {
        //         this.client?.subscribe('/user/topic/user', (message) => this.setUserInfo(message.body));
        //         this.client?.subscribe('/user/topic/errors', (message) => alert(message.body));
        //         this.client?.subscribe('/user/topic/balance', (message) => this.balanceWatcher(message.body));
        //         this.client?.subscribe('/user/topic/invest', (message) => this.investWatcher(message.body));
        //         this.client?.publish({ destination: '/ws/user', body: this.userName });
        //     },
        // });
        this.client?.activate();
        this.enablePassiveIncreaseBalance();
    }

    @action
    setUserInfo(value: string) {
    }

    @action
    handleTap() {
        this.client?.publish({
            destination: '/ws/tap',
            body: JSON.stringify({ balance: this.balance, userId: this.userName }),
        });
    }

    @action
    balanceWatcher(v: string) {
        const { balance, batteryValue} = JSON.parse(v) as BalanceResponse;
        this.balance = balance;
        this.battery = batteryValue;
    }
    @action
    handleBuyInvest(investId: string) {
        this.client?.publish({
            destination: '/ws/invest/buy',
            body: JSON.stringify({ balance: this.balance, userId: this.userName, investId }),
        });
    }
    @action
    investWatcher(v: string) {
    }

    @action
    enablePassiveIncreaseBalance() {
        if (this.income) this.balance += this.income;
        setTimeout(() => {
          this.enablePassiveIncreaseBalance();
        }, 1100)
    }
}

export type MobXAppStore = MobXApp;
export default new MobXApp();
