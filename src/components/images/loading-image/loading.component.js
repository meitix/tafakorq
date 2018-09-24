import React, { Component } from "react";
import { Image} from "react-native";
// AppRegistry.registerComponent("tafakorq" , () => LoadingImage);

export class LoadingImage extends Component {
  state = { show: this.props.visible };
  image = require('../../../../assets/images/loading-gif.gif');
componentWillReceiveProps (props) {
  this.setState({show: props.visible});
}


  render() {
    if (this.state.show === true)
      return (
        <Image
        style={this.props.style}
          source={this.image}
        />
      );
    else return null;
  }
}
