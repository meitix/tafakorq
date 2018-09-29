import { urls } from "./urls";
import {ApiManager} from './base.service';
import { AuthService } from "./auth.service";
export class PostService {
    getMainPageData(newPostsCount, popularPostsCount, userId) {

        const url = urls.getMainPageItems
            .concat('?',
                'NewPostsCount', '=', newPostsCount, '&',
                'PopularPostsCount', '=', popularPostsCount, '&',
                'UserId', '=', userId
            );

        return ApiManager.getFromApi(url);
    }

    getPost = async(postId) => {
        const authService = new AuthService();
        const userId = await authService.getUserId(); 
        const url = urls.getPostDetails.concat(
            '?',
            'UserId', '=', userId, '&',
            'PostId', '=', postId
        );
        return ApiManager.getFromApi(url);
    }

    getByCategoryId(categoryId , page, pageSize , q , userId, priceState) {
        const url = urls.getByCategoryId.concat(
            '?',
            'MenuId=', categoryId,
            '&',
            'page=',page,
            '&',
            'pageSize=', pageSize,
            '&',
            'srch=',q,
            '&',
            'userId=',userId,
            '&',
            'priceState=', priceState
        )
        return ApiManager.getFromApi(url);
    }
  
}