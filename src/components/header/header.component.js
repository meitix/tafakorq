import React, { Component } from "react";
import { Header, Button, Icon, Right, Left } from "native-base";
import { colors } from "../../common/colors";
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => MainPageHeader);

export class MainPageHeader extends Component {
  render() {
    return (
      <Header
      transparent
        androidStatusBarColor={colors.primary}
        style={{ backgroundColor: colors.primary }}
      >
        <Left>
          <Button transparent onPress={this.props.onSearchButtonPressed}>
            <Icon name="search" />
          </Button>
        </Left>
        <Right>
          <Button transparent onPress={this.props.onMenuButtonPressed}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }


}
