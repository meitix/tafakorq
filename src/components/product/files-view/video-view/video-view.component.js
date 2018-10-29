import React, { Component } from "react";
import VideoPlayer from "react-native-video-player";
import orientation from "react-native-orientation";

export default class AppVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 90, height: 160 };
  }
  componentDidMount() {
    orientation.getOrientation(this.setTheWidthAndHeightOfVideo.bind(this));
    orientation.addOrientationListener(this._onOrientationChange.bind(this));
  }

  componentWillUnmount() {
    orientation.removeOrientationListener(this._onOrientationChange);
  }

  render() {
    return (
      <VideoPlayer
        video={{ uri: this.props.source }}
        videoHeight={this.state.height}
        videoWidth={this.state.width}
      />
    );
  }

  _onOrientationChange(orientation) {
   this.setTheWidthAndHeightOfVideo(null , orientation);
  }

  setTheWidthAndHeightOfVideo(err , orientation) {
    if (orientation === "LANDSCAPE")
      this.setState(this.landscapeSize);
    else
      this.setState(this.portraitSize);
  }

  landscapeSize = { width: 160, height: 90 };
  portraitSize = { width: 90, height: 160 };
}
