import { urls } from "./urls";

export class PostService {
    getMainPageData(newPostsCount, popularPostsCount, userId) {

        const url = urls.getMainPageItems
            .concat('?',
                'NewPostsCount', '=', newPostsCount, '&',
                'PopularPostsCount', '=', popularPostsCount, '&',
                'UserId', '=', userId
            );

        return this.getFromApi(url);
    }

    getPost(postId) {
        const url = urls.getPostDetails.concat(
            '?',
            'UserId', '=', 1, '&',
            'PostId', '=', postId
        );

        return this.getFromApi(url);
    }

    getFromApi(url) {
        return fetch(url, {
            method: 'get',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            }
        });
    }

    postToApi(url, body) {
        return fetch(url, {
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: body
        });
    }
}