import React, { Component } from "react";
import { scale, moderateScale, verticalScale } from "../../../helpers/size-fixer.helper";
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { CommonStyles } from "../../../common/styles/index";
import { AuthService } from "../../../services/auth.service";
import { LoadingImage } from "../../../components/images/loading-image/loading.component";
import { LogoImage } from "../../../components/images/logo/logo-image.component";
import { ErrorHandler } from '../.././../helpers/error-handler';
import {AppRegistry} from 'react-native';

export default class VerifyScreen extends Component {
  static navigationOptions = { title: "Welcome", header: null };
  state = { code: "", isLoading: false };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header />
        <Content>
          <LogoImage
            style={{
                width: moderateScale(200),
              height: verticalScale(215),
              marginTop: scale(50),
              alignSelf: "center"
            }}
          />
          <Form style={{ marginTop: scale(20), padding: scale(25) }}>
            <Item floatingLabel>
              <Label style={CommonStyles.text}>
                کد دریافت شده را وارد نمایید
              </Label>
              <Input
                onChangeText={text => {
                  this.setState({ code: text });
                }}
                keyboardType="numeric"
              />
            </Item>
            <Button
              style={{ marginTop: scale(20), direction: "rtl" }}
              block
              rounded
              disabled={this.state.isLoading}
              info
              onPress={() => this.verifyCode(this.state.code)}
            >
              <Text style={CommonStyles.text}>ارسال</Text>
              <LoadingImage
                style={{ width: moderateScale(20), height: verticalScale(20) }}
                visible={this.state.isLoading}
              />
            </Button>

           
          </Form>
        </Content>
      </Container>
    );
  }

  verifyCode = async code => {
    console.log('code: '+ code)
    const state = this.state;
    state.isLoading = true;
    this.setState(state);
    
    const authService = new AuthService();

    var userId = await authService.getUserId();

    authService
      .verifyCode(userId, code)
      .then(result => {
        
         result.json().then(res => {
        if (res.status) {
          authService.saveUserInfo(res.Customer).then(() => {
               this.props.navigation.navigate("Home");
          }).catch( err => {
            ErrorHandler.handle(err);
          })
       
        } else {
          alert(res.message);
        }
        state.isLoading = false;  
        this.setState(state);
      })
    })
      .catch(err => {
        Snackbar.show({
          title: 'عدم دسترسی به اینترنت'
        })
        // console.log(err);
        // alert("خطا در عملیات");
        state.isLoading = false;  
        this.setState(state);
      });
  };
}