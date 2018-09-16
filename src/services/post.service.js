import { urls } from "./urls";
import {ApiManager} from './base.service';
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

    getPost(postId) {
        const url = urls.getPostDetails.concat(
            '?',
            'UserId', '=', 1, '&',
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
console.log(url)
        return ApiManager.getFromApi(url);
    }
  
}