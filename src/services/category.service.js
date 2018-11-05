import { ApiManager } from './base.service';
import { urls } from './urls';

export class CategoryService {

    static getDetails(categoryId) {
        const url = urls.categoryDetails.concat(
            '?',
            'MenuId=', categoryId
    )
       return ApiManager.getFromApi(url);
    }

}