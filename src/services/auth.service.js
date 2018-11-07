import { ApiManager, LocalManager } from "./base.service";
import { urls } from "./urls";
import Futch from "../helpers/futch.helper";

export class AuthService {
  sendMobile(mobile) {
    return ApiManager.postToApi(urls.sendMobile, { Mobile: mobile });
  }

  saveUserId(userId) {
    return LocalManager.saveToDevice("userId", userId + "");
  }

  getUserInfo = async () => {
    infoStr = await LocalManager.getFromDevice("userInfo");
    return JSON.parse(infoStr);
  };

  verifyCode(userId, code) {
    const url = urls.verifyCode.concat(
      "?",
      "UserId=",
      userId,
      "&",
      "Code=",
      code
    );
    return ApiManager.postToApi(url);
  }

  getUserId() {
    return LocalManager.getFromDevice("userId");
  }

  saveUserInfo(userInfo) {
    return LocalManager.saveToDevice("userInfo", JSON.stringify(userInfo));
  }

  updateUser = async (user, onProgressHandler) => {
    const data = new FormData();
    data.append("Id", await this.getUserId());
    data.append("FirstName", user.FirstName);
    data.append("LastName", user.LastName);

    if (user.ThumbPath.startsWith("file:"))
      data.append("file", {
        uri: user.ThumbPath,
        type: "image/jpeg",
        name: "user-profile.jpg"
      });

    data.append("Mobile", user.Mobile);
    const options = {
      method: "post",
      body: data
    };

    return Futch(urls.updateUser, options, onProgressHandler);
  };

  fetchUserInfo = async () => {
    const userId = await this.getUserId();
    return ApiManager.getFromApi(urls.userInfo.concat('?','UserId=',userId));
  }
}
