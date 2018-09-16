import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  Container,
  Item,
  Form,
  Text,
  Label,
  Input,
  Card,
  Button,
  Thumbnail
} from "native-base";
import { DefaultProfileImage } from "../../../components/images/profile-default/default-profile.component";
import { CommonStyles } from "../../../common/styles";
import { ProfilePageStyles } from "./profile.styles";
import { AuthService } from "../../../services/auth.service";

export default class ProfileScreen extends Component {
  state = { userInfo: undefined, isLoading: false };
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.getUserInfo();
  }

  render() {
    return (
      <Container style={ProfilePageStyles.container}>
        <Image
          style={ProfilePageStyles.backgroundImage}
          source={require("../../../../assets/images/full-bg.jpg")}
        />
        <Card style={ProfilePageStyles.card}>
          <Form>
            {this._renderProfileImage()}
            <Item floatingLabel>
              <Label style={[CommonStyles.text, CommonStyles.textRight]}>
                نام
              </Label>
              <Input 
              value={this.state.userInfo ? this.state.userInfo.FirstName : ''}
              style={[CommonStyles.text, CommonStyles.textRight]}
              onChangeText={text => {
                const state = this.state;
                state.userInfo.FirstName = text;
                this.setState(state);
              }}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={[CommonStyles.text, CommonStyles.textRight]}>
                نام خانوادگی
              </Label>
              <Input
               value={this.state.userInfo ? this.state.userInfo.LastName : ''} 
              style={[CommonStyles.text, CommonStyles.textRight]}
              onChangeText={text => {
                const state = this.state;
                state.userInfo.LastName = text;
                this.setState(state);
              }}
              />
            </Item>
          </Form>
          <Button onPress={this.update}
           style={ProfilePageStyles.button} block success rounded>
            <Text style={CommonStyles.text}>ثبت</Text>
          </Button>
        </Card>
      </Container>
    );
  }
update() {
  console.log('این قسمت انجام نشد')
}
  _renderProfileImage() {
    console.log(this.state.userInfo)
    if (this.state.userInfo ) {
      if(this.state.userInfo.ThumbPath)
      return (
        <Thumbnail
          style={ProfilePageStyles.profilePicture}
          circular
          large
          source={{ uri: this.state.userInfo.ThumbPath.toLowerCase() }}
        />
        
      );
    } 
      return <DefaultProfileImage style={ProfilePageStyles.profilePicture} />;
  
  }

  _authService = new AuthService();
  getUserInfo() {
    this._authService.getUserInfo().then(userInfo => {
      const state = this.state;
      state.userInfo = userInfo;
      this.setState(state);
    });
  }
}
