import React, { Component } from "react";
import { View, Text} from "react-native";
import { SplashStyles } from "./splash.style";
// import { Font } from "expo";

import { AuthService } from "../../services/auth.service";
import LoginScreen from '../login/login-screen/login.screen';
import IndexScreen from '../home/index.screen';
let context;

export default class SplashScreen extends Component {
  static navigationOptions = { title: "Welcome", header: null };
  _authService = new AuthService();
  state = { view: undefined };

  constructor(props) {
    super(props);
    context = this;
  }

  componentDidMount() {
    this._authService
      .getUserId()
      .then(userId => console.log(userId))
      .catch(err => {
        throw err;
      });

    // Font.loadAsync({
    //   IRANYekan: require("../../../assets/fonts/IRANYekan.ttf"),
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    // });

    // const customTextOption = {
    //   fontFamily: "IRANYekan"
    // };
    //setCustomText(customTextOption);
  }

  render() {
    this._authService.getUserInfo().then(userInfo => {
      setTimeout(() => {
        if (userInfo === null) this.setState({view: <LoginScreen navigation={this.props.navigation} />})
        else
        this.setState({ view: <IndexScreen navigation={this.props.navigation} />})
      }, 1000);
    });

    if (this.state.view) {
      return this.state.view;
    }

    return (
      <View style={SplashStyles.page}>
        <Text style={SplashStyles.text}>Splash</Text>
      </View>
    );
  }
}
