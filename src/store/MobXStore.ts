import { action, makeAutoObservable, toJS } from 'mobx';
import {
    completeTaskApi,
    getIncomeStatsApi,
    getLeadersApi,
    getUserInfoApi,
    initialUserInfo,
    inviteApi,
    LeadersItem,
    updateUserInfoApi,
    UserData,
    UserIncomeStats,
} from 'src/api/user';
import { buyObjectApi, getObjectsApi, ObjectItem, ObjectItemStatus } from 'src/api/objects';
import { getMinersInfoApi, initialMinersInfo, MinersData } from 'src/api/miner';

class MobXApp {
    userInfo: UserData = initialUserInfo;
    objects?: ObjectItem[];
    leaders?: LeadersItem[];
    minersInfo: MinersData = initialMinersInfo;
    incomeStats?: UserIncomeStats;
    isLoading = true;

    constructor() {
        // @ts-ignore
        // this.userName = window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'Это тест';
        makeAutoObservable(this);
        this.getUserInfo();
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
                this.leaders = resp.data.leaders;
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
        const userInfo = toJS(this.userInfo);
        if (userInfo) {
            updateUserInfoApi({
                countClick: userInfo.countClick,
                countPoints: userInfo.countPoints,
            });
        }
    }

    @action
    updateUserClicks() {
        updateUserInfoApi({
            countClick: toJS(this.userInfo.countClick),
        });
    }

    @action
    handleTapMiner() {
        const userInfo = toJS(this.userInfo);
        userInfo.countClick -= 1;
        userInfo.countPoints += userInfo.pointsPerClick;
        userInfo.balance += userInfo.pointsPerClick;
        this.userInfo = userInfo;
        // todo реализовать подсчет очков, учитывая: турбо режим(х5), частый таппинг (х5) и очки за тап (points_per_click)
    }

    @action
    handleBuyObject(id: string) {
        buyObjectApi(id).then(() => {
            this.objects = toJS(this.objects || []).map((v) =>
                v.id === id ? { ...v, status: ObjectItemStatus.ownedStatus } : v
            );
        });
        this.getObjects();
        this.getUserInfo();
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
