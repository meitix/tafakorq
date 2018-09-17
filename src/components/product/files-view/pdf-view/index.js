import React, { Component } from "react";
import PDFView from "react-native-view-pdf";

export class AppPdfViewer extends Component {
  render() {
    return (
      <PDFView
        textEncoding="utf-8"
        style={this.props.style}
        resourceType={this.props.type}
        resource={this.props.source}
      />
    );
  }
}
