import { action, makeAutoObservable } from 'mobx';
import { getUserInfoApi, initialUserInfo, updateUserInfoApi, UserData } from 'src/api/user';
import api from 'src/api';
import { buyObjectApi, getObjectsApi, getUserObjectsApi, ObjectItem } from 'src/api/objects';
import { getMinersInfoApi, initialMinersInfo, MinersData } from 'src/api/miner';
import {getLeadersApi, LeadersItem} from "src/api/leaders";

class MobXApp {
    userInfo: UserData = initialUserInfo;
    userObjects: ObjectItem[] = [];
    objects: ObjectItem[] = [];
    leaders: LeadersItem[] = [];
    minersInfo: MinersData = initialMinersInfo;
    isLoading = true;

    constructor() {
        // @ts-ignore
        // this.userName = window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'Это тест';
        makeAutoObservable(this);
        this.getUserInfo();
        this.getUserObjects();
        console.log('mobx');
    }

    @action
    getUserInfo() {
        getUserInfoApi()
            .then((resp) => {
                console.log('getUserInfoApi', resp);
                this.userInfo = resp.data;
            })
            .catch((e) => console.log(e));
    }
    @action
    getUserObjects() {
        getUserObjectsApi()
            .then((resp) => {
                console.log('getUserObjectsApi', resp);
                this.userObjects = resp.data;
            })
            .catch((e) => console.log(e));
    }
    @action
    getObjects() {
        getObjectsApi()
            .then((resp) => {
                console.log('getObjectsApi', resp);
                this.objects = resp.data;
            })
            .catch((e) => console.log(e));
    }
    @action
    getMinersInfo() {
        getMinersInfoApi()
            .then((resp) => {
                console.log('getMinersInfoApi', resp);
                this.minersInfo = resp.data;
            })
            .catch((e) => console.log(e));
    }
    @action
    getLeaders() {
        getLeadersApi()
            .then((resp) => {
                console.log('getLeadersApi', resp);
                this.leaders = resp.data;
            })
            .catch((e) => console.log(e));
    }

    @action
    updateUserInfo() {
        updateUserInfoApi({
            count_click: this.userInfo.count_click,
            count_points: this.userInfo.count_points,
        });
    }

    @action
    updateUserClicks() {
        updateUserInfoApi({
            count_click: this.userInfo.count_click,
        });
    }

    @action
    handleTapMiner() {
        this.userInfo.count_click = this.userInfo?.count_click - 1;
        // todo реализовать подсчет очков, учитывая: турбо режим(х5), частый таппинг (х5) и очки за тап (points_per_click)
    }

    @action
    handleBuyObject(id: string) {
        buyObjectApi(id).then(() => {
            const newObject = this.objects.find((object) => object.id === id) as ObjectItem;
            this.userObjects = [...this.userObjects, newObject];
        });
    }
    @action
    investWatcher() {}
}

export type MobXAppStore = MobXApp;
export default new MobXApp();
