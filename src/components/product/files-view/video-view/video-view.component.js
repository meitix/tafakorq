import React, { Component } from "react";
import VideoPlayer from "react-native-video-player";

export default class AppVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <VideoPlayer
        video={ this.props.source }
        videoWidth="100%"
        videoHeight="100%"
      />
    );
  }
}
