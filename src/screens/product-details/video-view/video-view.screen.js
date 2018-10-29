import React, { Component } from "react";
import AppVideoPlayer from "../../../components/product/files-view/video-view/video-view.component";
import { VideoViewStyles } from "./video-view.styles";

export default class VideoViewScreen extends Component {
  static navigationOptions = {header: null}
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppVideoPlayer source={this.props.navigation.state.params.address} style={VideoViewStyles} />
    );
  }
}
