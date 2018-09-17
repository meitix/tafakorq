import { FileSystem, Permissions } from "expo";
import {urls} from './urls';
import {AuthService} from './auth.service';

export class FileService {

    _authService = new AuthService();

  getFile = async (postId, fileId) => {
    
    // this.checkPermission().then(granted => {
    const granted = await this.checkPermission();

    if (!granted) {
      alert("متاسفانه، بدون مجوز های لازم قادر به دریافت فایل نیستیم");
    } else {
      // make folder address.
      const folderAddr = FileSystem.documentDirectory.concat("/", "tfakorq");
      const fileAddr = folderAddr.concat("/", fileId, ".pdf");
      // if file downloaded before it will be loaded.
      const file = await FileSystem.getInfoAsync(fileAddr);
      if (file.exists) {
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
      const chkFolder = await FileSystem.getInfoAsync(folderAddr);

      if (!chkFolder.exists)
        // make folder.
        await FileSystem.makeDirectoryAsync(folderAddr);
        
      // download file.
      const dlRes = await FileSystem.downloadAsync(url, fileAddr);
      if (dlRes.status === 200) {
        // return fileAddress
        return dlRes.uri;
      } else {
        return null;
      }
    }
  };

  // چک کردن پرمیشن مموری برای نوشت فایل دانلود شده.
  checkPermission = async () => {
    const getPerm = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (getPerm.status !== "granted") {
      alert(
        "ما برای دانلود فایل ها نیاز به دسترسی های لازم داریم ، لطفا آن را اعمال کنید"
      );
      const askPerm = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (askPerm.status === "denied") return false;
    }
    return true;
  };
}
