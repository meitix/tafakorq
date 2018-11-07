import React, { Component } from "react";
import { View, Text, Image, Animated } from "react-native";
import { SplashStyles } from "./splash.style";
// import { Font } from "expo";

import { AuthService } from "../../services/auth.service";
import LoginScreen from "../login/login-screen/login.screen";
import IndexScreen from "../home/index.screen";
import LinearGradient from "react-native-linear-gradient";

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
    this._authService.getUserId().catch(err => {
      throw err;
    });
  }

  render() {
    this._authService.getUserInfo().then(userInfo => {
      setTimeout(() => {
        if (userInfo === null)
          this.setState({
            view: <LoginScreen navigation={this.props.navigation} />
          });
        else
          this.setState({
            view: <IndexScreen navigation={this.props.navigation} />
          });
      }, 1000);
    });

    if (this.state.view) {
      return this.state.view;
    }

    const progress = new Animated.Value(0);
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const translateY = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, -50]
    });

    Animated.timing(progress, {
      delay: 300,
      toValue: 1,
      duration: 1000
    }).start();

    return (
      <LinearGradient
        colors={["#931140","#ad1457","#78002e"]}
        style={SplashStyles.page}
      >
        <Animated.View>
          <Animated.Image
            style={{
              width: 230,
              height: 230,
              transform: [{ translateY }],
              opacity
            }}
            source={require("../../../assets/images/logo.png")}
          />
        </Animated.View>
      </LinearGradient>
    );
  }
}
