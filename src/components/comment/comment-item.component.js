import React, { Component } from "react";
import { Grid, Row, Col, Icon } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import { ErrorHandler } from "../../helpers/error-handler";
import { CommonStyles } from "../../common/styles";
import { CommentService } from "../../services/comment.service";

export class CommentItem extends Component {
  state = { item: this.props.item };
  constructor(props) {
    super(props);
    this._commentService = new CommentService();
  }
  render() {
    const item = this.state.item;
    return (
      <Grid>
        <Row>
          <Text
            style={[
              CommonStyles.text,
              CommonStyles.textRight,
              { color: "#000", fontSize: 20 }
            ]}
          >
            {item.FullName}
          </Text>
        </Row>
        <Row>
          <Col size={1}>
            <TouchableOpacity onPress={() => this._likeComment(item.Id)}>
              {this._renderLikeIcon()}
            </TouchableOpacity>
          </Col>
          <Col size={11}>
            <Text style={[CommonStyles.text, CommonStyles.textRight]}>
              {item.Text}
            </Text>
          </Col>
        </Row>
      </Grid>
    );
  }

  _renderLikeIcon() {
    if (this.state.item.UserLikeThis) {
      return (
        <Icon
          type="Entypo"
          name="heart"
          style={{ width: "100%", color: "#f00" }}
        />
      );
    } else {
      return (
        <Icon
          type="Entypo"
          name="heart-outlined"
          style={{ width: "100%", color: "#f00" }}
        />
      );
    }
  }

  _likeComment(commentId) {
    const state = this.state;
    state.item.UserLikeThis = !state.item.UserLikeThis;
    this.setState(state);
    this._commentService
      .likeComment(commentId)
      .then(response => {
        response.json().then(res => {
          if (res.Status) {
          } else {
            alert(res.Message);
          }
        });
      })
      .catch(err => {
        ErrorHandler.handle(err);
        return null;
      });
  }
}
