import React, { Component } from "react";
import {WebView} from 'react-native';

export class AppPdfViewer extends Component {
  render() {
    return (
      <WebView
        style={this.props.style}
        source={this.props.source}
      />
    );
  }
}
