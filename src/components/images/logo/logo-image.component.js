import React, { Component } from "react";
import { Image } from "react-native";

const logo = require("../../../../assets/images/logo.png");

export  class LogoImage extends Component {
  render() {
      return <Image source={logo} style={this.props.style} />
  }
}
