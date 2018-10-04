import { ApiManager } from "./base.service";
import { AuthService } from "./auth.service";
import { urls } from "./urls";

export class CommentService {
  constructor() {
    this._authService = new AuthService();
  }

  // like a comment.
  likeComment = async commentId => {
    const userId = await this._authService.getUserId();
    const url = urls.likeComment;
    return ApiManager.postToApi(url, { userId, commentId });
  };
}
