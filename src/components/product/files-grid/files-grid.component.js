import React, { Component } from "react";
import { Thumbnail, List, ListItem, Text, Right, Body } from "native-base";
import * as Progress from "react-native-progress";
import { CommonStyles } from "../../../common/styles";
import { FileService } from "../../../services/file.service";
import { Linking } from 'expo';

export class FilesGrid extends Component {
  render() {
    return (
      <List
        dataArray={this.props.data}
        renderRow={this._renderItem.bind(this)}
      />
    );
  }

  _renderItem(item) {
    const image = fileImages[item.Type];
    return (
      <ListItem
        style={{ alignContent: "center" }}
        onPress={this._itemPressed(item)}
      >
        <Body>
          <Text
            style={[CommonStyles.text, { textAlign: "right", marginRight: 20 }]}
          >
            {item.Title}
          </Text>
          <Progress.Bar progress={0.25} animated indeterminate />
        </Body>

        <Right>
          <Thumbnail large source={image} />
        </Right>
      </ListItem>
    );
  }

  _itemPressed(item) {
    return () => {
      const fileService = new FileService();
      fileService
        .getFile(this.props.postId, item.Id)
        .then(fileAddr => {
          if (fileAddr) {
            this._openFile(item.Type, fileAddr);
          }
        })
        .catch(err => {
          // TODO: Handle Error.
        });
    };
  }

  _openFile(type, url) {
    switch (type) {
      case "متن": {
        console.log( this.props.navigation)
        this.props.navigation.navigate("PDFView", { address: url });
        break;
      }
      default: {
        alert(type)
      }
    }
  }
}

const fileImages = {
  "پی دی اف": require("../../../../assets/images/files/pdf.png"),
  تصویر: require("../../../../assets/images/files/image.png"),
  فیلم: require("../../../../assets/images/files/video.png"),
  متن: require("../../../../assets/images/files/pdf.png")
};
