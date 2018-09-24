import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { verticalScale } from "../../helpers/size-fixer.helper";
import { LayoutService } from "../../services/layout.service";
import { Container, List, ListItem, Thumbnail, Icon } from "native-base";
import { CommonStyles } from "../../common/styles";
import { MenuItem } from "./menu-item";
import { ScrollView } from "react-native-gesture-handler";
import { AuthService } from "../../services/auth.service";
import { SideBarStyles } from './sidebar.style';
import { DefaultProfileImage } from '../images/profile-default/default-profile.component';
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => SideBarComponent);

export class SideBarComponent extends Component {
  state = { menuItems: [], userInfo: undefined };
  _authService = new AuthService();

  constructor(props) {
    super(props);

    this.getUserInfo().then();

    this.getMenuItems()
      .then(res => {
        this.setState({ menuItems: res });
      })
      .catch(err => {});
  }

  getUserInfo = async () => {
    userInfo = await this._authService.getUserInfo();
    const state = this.state;
    state.userInfo = userInfo;
    this.setState(state);
  };

  _renderUserInfo() {
    const state = this.state.userInfo;
    if (!state) return null;
    let pic = null;
    if (state.ThumbPath)
      pic = (
        <Thumbnail circular large source={{ uri: state.ThumbPath.toLowerCase() }} />
      );
      else
      pic = <DefaultProfileImage />

    return (
      <View style={SideBarStyles.profilePicContainer}>
        {pic}
        <Text style={SideBarStyles.profileText}>{state.FullName ? state.FullName : 'کاربر'}</Text>
        <Icon type='MaterialIcons' name="person" />
      </View>
    );
  }

  gotoProfile() {
    this.props.navigation.navigate('Profile');
  }
  render() {
    return (
      <Container>
        <ScrollView>
           <View style={{ height: verticalScale(200), width: "100%" }}>
          <Image
            style={{ height: verticalScale(200), width: "100%" }}
            source={require("../../../assets/images/sidebar-header.jpg")}
          />
          {this._renderUserInfo()}
          </View>
          {this._renderMenu(this.state.menuItems)}
        </ScrollView>
      </Container>
    );
  }

  _renderMenu(menuItems) {
    if (!menuItems.TopMenus) menuItems.TopMenus = [];
    if (!menuItems.BottonMenus) menuItems.BottonMenus = [];
    return (
      <List>
        <ListItem>
          <Text onPress={this.gotoProfile.bind(this)} style={[CommonStyles.text, CommonStyles.textRight]}>پروفایل</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text style={[CommonStyles.text, CommonStyles.textRight]}>
            {" "}
          </Text>
        </ListItem>
        {this._renderMenuItems(menuItems.TopMenus)}
        <ListItem itemDivider>
          <Text style={[CommonStyles.text, CommonStyles.textRight]}>
            {" "}
          </Text>
        </ListItem>
        {this._renderMenuItems(menuItems.BottonMenus)}
        <ListItem itemDivider>
          <Text style={[CommonStyles.text, CommonStyles.textRight]}>
            شبکه های اجتماعی
          </Text>
        </ListItem>
        {this._renderSocialIcons()}
      </List>
    );
  }

  _renderMenuItems(items) {
    return (
      <List
        dataArray={items}
        renderRow={item => (
          <MenuItem navigation={this.props.navigation} item={item} />
        )}
      />
    );
  }

  _renderSocialIcons(items) {
    return <Text />;
  }

  getMenuItems = async () => {
    const res = await LayoutService.getLayoutData();
    const data = await res.json();
    return data;
  };
}
