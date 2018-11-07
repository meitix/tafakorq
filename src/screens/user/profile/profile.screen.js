import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Container,
  Item,
  Form,
  Text,
  Label,
  Input,
  Card,
  Button,
  Thumbnail,
  Row,
  Left,
  Right
} from "native-base";
import { DefaultProfileImage } from "../../../components/images/profile-default/default-profile.component";
import { CommonStyles } from "../../../common/styles";
import { ProfilePageStyles } from "./profile.styles";
import { AuthService } from "../../../services/auth.service";
import ImagePicker from "react-native-image-picker";
import { PaymentService } from "../../../services/payment.service";

export default class ProfileScreen extends Component {
  state = { userInfo: undefined, isLoading: false };
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.getUserInfo();
    this.paymentService = new PaymentService();
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
            {this._renderBalance()}
            <Item floatingLabel>
              <Label style={[CommonStyles.text, CommonStyles.textRight]}>
                نام
              </Label>
              <Input
                value={this.state.userInfo ? this.state.userInfo.FirstName : ""}
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
                value={this.state.userInfo ? this.state.userInfo.LastName : ""}
                style={[CommonStyles.text, CommonStyles.textRight]}
                onChangeText={text => {
                  const state = this.state;
                  state.userInfo.LastName = text;
                  this.setState(state);
                }}
              />
            </Item>
          </Form>
          <Button
            onPress={this.update.bind(this)}
            style={ProfilePageStyles.button}
            block
            success
            rounded
          >
            <Text style={CommonStyles.text}>ثبت</Text>
          </Button>
        </Card>
      </Container>
    );
  }
  update() {
    // update user data in server.
    this._authService.updateUser(this.state.userInfo).then(res => {
      res = JSON.parse(res.response);
      // show the operation result to user.
      alert(res.message);

      // get new data from server.
      this._authService.fetchUserInfo().then(userData => {
        userData.json().then(userJsonData => {
          // sync the view with new data.
          this._authService.saveUserInfo(userJsonData);
          const state = this.state;
          state.userInfo = userJsonData;
          this.setState(state);
        });
      });
    });
  }

  _renderProfileImage() {
    if (this.state.userInfo) {
      if (this.state.userInfo.ThumbPath)
        return (
          <TouchableOpacity onPress={this._changePhoto.bind(this)}>
            <Thumbnail
              style={ProfilePageStyles.profilePicture}
              circular
              large
              source={{ uri: this.state.userInfo.ThumbPath.toLowerCase() }}
            />
          </TouchableOpacity>
        );
    }
    return <DefaultProfileImage style={ProfilePageStyles.profilePicture} />;
  }

  _renderBalance() {
    if (this.state.userInfo)
      return (
        <Row style={{ marginTop: 30, marginBottom: 30 }}>
          <Left>
            <Button
              warning
              small
              onPress={this.paymentService.chargeBalance.bind(this)}
            >
              <Text style={CommonStyles.text}>شارژ حساب</Text>
            </Button>
          </Left>
          <Right>
            <Text style={[CommonStyles.text, CommonStyles.textRight]}>
              اعتبار {this.state.userInfo.Balance} تومان
            </Text>
          </Right>
        </Row>
      );
  }
  _authService = new AuthService();
  getUserInfo() {
    this._authService.getUserInfo().then(userInfo => {
      const state = this.state;
      state.userInfo = userInfo;
      this.setState(state);
    });
  }

  _changePhoto() {
    const options = {
      title: "انتخاب تصویر",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, this._handleImageSelect.bind(this));
  }

  _handleImageSelect(response) {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      const state = this.state;
      state.userInfo.ThumbPath = "file://" + response.path;
      this.setState(state);
    }
  }
}
