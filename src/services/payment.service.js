import { ApiManager } from './base.service';
import { AuthService } from './auth.service';
import { urls } from './urls';

export class PaymentService {


    constructor() {
        this._authService = new AuthService();
    }

    finalizePurchase = async(postId) => {
        const userId = await this._authService.getUserId();
        const url = urls.finalizePurchase.concat('?','UserId=',userId , '&','PostId=', postId);

        return ApiManager.getFromApi(url);
    }
}