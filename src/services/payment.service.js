import { ApiManager } from './base.service';
import { AuthService } from './auth.service';
import { urls } from './urls';
import { Linking } from 'react-native';

export class PaymentService {


    constructor() {
        this._authService = new AuthService();
    }

    finalizePurchase = async(postId) => {
        const userId = await this._authService.getUserId();
        const url = urls.finalizePurchase.concat('?','UserId=',userId , '&','PostId=', postId);
        return ApiManager.getFromApi(url);
    }

    checkUserBalance = async (postId) => {
        const userId = await this._authService.getUserId();
        const url = urls.checkUserBalance;
        return ApiManager.postToApi(url,{userId , postId});
    }

    payWithBalance = async (postId) => {
        const userId = await this._authService.getUserId();
        return ApiManager.postToApi(urls.payWithBalance , {userId , postId});
    }

    payWithBalanceUrl = async (postId) => {
        const userId = await this._authService.getUserId();
        return url = urls.payWithGetway.concat('?','userId=',userId ,'&', 'postId=' , postId);
    }

    chargeBalance () {
        this._authService.getUserId().then(userId => {
            Linking.openURL(urls.chargeBalance.concat('/' + userId))
        })
    }
}