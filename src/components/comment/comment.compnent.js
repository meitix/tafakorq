import React, { Component } from "react";
import {
  List,
  ListItem,
} from "native-base";
import { CommentService } from "../../services/comment.service";
import { CommentItem } from './comment-item.component';

export class Comments extends Component {

  constructor() {
    super();
    this._commentService = new CommentService();
  }

  render() {
    return (
      <List dataArray={this.props.data} renderRow={this._renderListItem} />
    );
  }

  _renderListItem(item) {
    return (
      <ListItem>
        <CommentItem item={item} />
      </ListItem>
    );
  }
}
