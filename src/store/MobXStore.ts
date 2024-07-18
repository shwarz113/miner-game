import { action, makeAutoObservable } from 'mobx';
import {
    completeTaskApi,
    getUserInfoApi,
    initialUserInfo,
    inviteApi,
    updateUserInfoApi,
    UserData,
    getLeadersApi,
    LeadersItem, getIncomeStatsApi, UserIncomeStats,
} from 'src/api/user';
import { buyObjectApi, getObjectsApi, getUserObjectsApi, ObjectItem } from 'src/api/objects';
import { getMinersInfoApi, initialMinersInfo, MinersData } from 'src/api/miner';

class MobXApp {
    userInfo: UserData = initialUserInfo;
    userObjects: ObjectItem[] = [];
    objects: ObjectItem[] = [];
    leaders: LeadersItem[] = [];
    minersInfo: MinersData = initialMinersInfo;
    incomeStats?: UserIncomeStats;
    isLoading = true;

    constructor() {
        // @ts-ignore
        // this.userName = window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'Это тест';
        makeAutoObservable(this);
        this.getUserInfo();
        this.getUserObjects();
        setInterval(this.updateUserInfo, 5000);
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
    getIncomeStats() {
        getIncomeStatsApi()
            .then((resp) => {
                console.log('getIncomeStatsApi', resp);
                this.incomeStats = resp.data;
            })
            .catch((e) => console.log(e));
    }

    @action
    updateUserInfo() {
        console.log('user', this.userInfo);
        if (this.userInfo) {
            updateUserInfoApi({
                countClick: this.userInfo.countClick,
                countPoints: this.userInfo.countPoints,
            });
        }
    }

    @action
    updateUserClicks() {
        updateUserInfoApi({
            countClick: this.userInfo.countClick,
        });
    }

    @action
    handleTapMiner() {
        console.log('this.userInfo', this.userInfo)
        this.userInfo.countClick = this.userInfo.countClick - 1;
        this.userInfo.countPoints = this.userInfo.countPoints + this.userInfo.pointsPerClick;
        this.userInfo.balance = this.userInfo.balance + this.userInfo.pointsPerClick;
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
    inviteByRef(refUserId: string) {
        inviteApi(refUserId);
    }
    @action
    completeTask(taskId: string) {
        completeTaskApi(taskId);
    }
}

export type MobXAppStore = MobXApp;
export default new MobXApp();
