import {AuthService} from './auth.service';
import {LocalManager} from './base.service';
import { RNFetchBlob } from 'react-native-fetch-blob';
import { urls } from './urls';
export class FileService {

//    static _authService = new AuthService();
//     static dirs = RNFetchBlob.fs.dirs;
//     static getFile = async (postId , fileId) => {

//        const userId = await this._authService.getUserId();
//         const url = urls.getFile.concat(
//             '?',
//             'userId=',userId,
//             '&',
//             'PostId=',postId,
//             '&',
//             'fileId=',fileId
//             );

//       return RNFetchBlob
//        .config({
//          fileCache : true,
//          appendExt : 'tfkq'
//        })
//        .fetch('GET', url)
//        .then((res) => {
//         console.log('The file saved to ', res.path());
//         LocalManager.saveToDevice('file_'.concat(fileId) , res.path()).then(() => LocalManager.saveToDevice('SavedFiles' , fileId))
//        });
    // }
}