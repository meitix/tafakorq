import { PermissionsAndroid } from "react-native";
import { urls } from './urls';
import { AuthService } from './auth.service';
import RNFetchBlob from 'rn-fetch-blob';

export class FileService {

  _authService = new AuthService();

  getFile = async (postId, fileId) => {

    // this.checkPermission().then(granted => {
    const granted = await this.checkPermission();
    
    if (!granted) {
      alert("متاسفانه، بدون مجوز های لازم قادر به دریافت فایل نیستیم");
    } else {
      // make folder address.
      const dir = RNFetchBlob.fs.dirs.DocumentDir;
      const folderAddr = dir.concat("/", "tfakorq");
      const fileAddr = folderAddr.concat("/", fileId, ".pdf");
      // if file downloaded before it will be loaded.
      const fileIsExists = await RNFetchBlob.fs.exists(fileAddr);
      if (fileIsExists) {
        return fileAddr;
      }

      // get user id.
      const userId = await this._authService.getUserId();

      // create request url.
      const url = urls.getFile.concat(
        "?",
        "userId=",
        userId,
        "&",
        "PostId=",
        postId,
        "&",
        "fileId=",
        fileId
      );

      // check folder exists.
      const folderIsExists = await RNFetchBlob.fs.exists(folderAddr);

      if (!folderIsExists)
        // make folder.
        await RNFetchBlob.fs.mkdir(folderAddr);

      // download file.
      const dlRes = await RNFetchBlob.config({fileCache: true , path: fileAddr}).fetch('get', url);
      console.log('response');
      console.log(dlRes)
      if (dlRes.respInfo.status === 200) {
        // return fileAddress
        return dlRes.data;
      } else {
        return null;
      }
    }
  };

  // چک کردن پرمیشن مموری برای نوشت فایل دانلود شده.
  checkPermission = async () => {
    let getPerm = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
       getPerm = getPerm && await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

    if (!getPerm) {
      const askPerm = await PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] , 
         {title: 'درخواست مجوز', message: "ما برای دانلود فایل ها نیاز به دسترسی های لازم داریم ، لطفا آن را اعمال کنید"}
         );
      if (askPerm === "denied") return false;
    }
    return true;
  };
}
