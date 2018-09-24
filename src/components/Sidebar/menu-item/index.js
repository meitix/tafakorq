import React, { Component } from "react";
import { Text,ListItem } from "native-base";
import { CommonStyles } from "../../../common/styles";
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => MenuItem);

export class MenuItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <ListItem style={ {alignContent: 'flex-start'}} onPress={this._itemPressed(item.Id)}>
        <Text style={[CommonStyles.text, CommonStyles.textRight]}>{item.Title}</Text>
      </ListItem>
    );
  }
  _itemPressed(id) {
    return () => {
      this.props.navigation.navigate("Products", { categoryId: id });
    };
  }
}
