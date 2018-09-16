import React, { Component } from "react";
import { Thumbnail, List, ListItem, Text, Right, Body } from "native-base";
import * as Progress from 'react-native-progress';
import { CommonStyles } from "../../../common/styles";
import {FileService} from '../../../services/file.service';
export class FilesGrid extends Component {
  render() {
    return <List dataArray={this.props.data} renderRow={this._renderItem} />;
  }

  _renderItem(item) {
    const image = fileImages[item.Type];
    return (
      <ListItem style={{alignContent: 'center'}} onPress={ () => this._itemPressed(item)}>
        <Body>
          <Text style={[CommonStyles.text, { textAlign: "right" , marginRight: 20 }]}>
            {item.Title}
          </Text>
          <Progress.Bar  progress={.25} animated  />
        </Body>

        <Right>
          <Thumbnail large source={image} />
        </Right>
      </ListItem>
    );
  }

  _itemPressed(item) {
    FileService.getFile(this.props.postId,item.Id).then()
  }

}

const fileImages = {
  "پی دی اف": require("../../../../assets/images/files/pdf.png"),
  تصویر: require("../../../../assets/images/files/image.png"),
  فیلم: require("../../../../assets/images/files/video.png"),
  متن: require("../../../../assets/images/files/pdf.png")
};
