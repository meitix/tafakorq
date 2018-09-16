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

// import Snackbar from 'react-native-snackbar';


export default class LoginScreen extends Component {
  static navigationOptions = { title: "Welcome", header: null };
  state = { mobile: "" };

 
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header />
        <Content>
          <LogoImage
            style={{
              width: moderateScale(150),
              height: verticalScale(150),
              marginTop: scale(50),
              alignSelf: "center"
            }}
          />
          <Form style={{ marginTop: scale(50), padding: scale(25) }}>
            <Item floatingLabel>
              <Label style={CommonStyles.text}>شماره تلفن همراه</Label>
              <Input 
              keyboardType="numeric"
              onChangeText={text => {
                this.setState({ mobile: text })
                }} />
            </Item>
            <Button
              style={{ marginTop: scale(20) }}
              block
              rounded
              disabled={this.state.isLoading}
              info
              onPress={ () => this.sendMobileNumber(this.state.mobile)}
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

  sendMobileNumber() {
    const state = this.state;
    state.isLoading = true;
    this.setState(state);

    const mobile = this.state.mobile;
    const authService = new AuthService();
    authService
      .sendMobile(mobile)
      .then(result => {
       result.json().then(res => {
        if (res.Status) {
          authService.saveUserId(res.UserId).then(() => {
            this.props.navigation.navigate("VerifyMobile");
          }).catch(err => {
            throw err;
          });
          
        } else {
          authService.saveUserId(2);
          alert(
            "مشکل در عملیات ، سرور با مشکل مواجه شده است لطفا بعدا امتحان کنید."
          );
        }
        state.isLoading = false;  
        this.setState(state);
      })
    })
      .catch(err => {
        // Snackbar.show({
        //   title: 'عدم دسترسی به اینترنت',
        //   duration: Snackbar.LENGTH_SHORT
        // })
        console.log(err)
        alert("خطا در عملیات");
        state.isLoading = false;  
        this.setState(state);
      });
  }
}
