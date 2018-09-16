import { ApiManager } from "./base.service";
import { urls } from "./urls";

export class LayoutService {
    static getLayoutData () {
        return ApiManager.getFromApi(urls.layoutUrl);
    }
}