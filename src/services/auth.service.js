import { ApiManager , LocalManager } from './base.service';
import { urls } from './urls';

export class AuthService {


    sendMobile(mobile) {
       return ApiManager.postToApi(urls.sendMobile , { Mobile: mobile})
    }

    saveUserId(userId) {
      return LocalManager.saveToDevice('userId' , userId+ '');
    }

    getUserInfo = async () => {
      infoStr = await LocalManager.getFromDevice('userInfo');
      return JSON.parse(infoStr);
    }

    verifyCode (userId , code) { 
      const url = urls.verifyCode.concat(
        '?', 'UserId=', userId,
        '&',
        'Code=', code
      )
      alert(url)
      return ApiManager.postToApi(url);
    }

    getUserId() {
      return LocalManager.getFromDevice('userId');
    }

    saveUserInfo(userInfo) {
      return LocalManager.saveToDevice('userInfo' , JSON.stringify(userInfo));
    } 

    updateUser(userInfo) {
      return ApiManager.postToApi(user)
    }
}