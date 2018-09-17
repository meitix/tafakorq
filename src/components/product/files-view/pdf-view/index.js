import React , { Component } from 'react';
import PDFView from 'react-native-view-pdf';

export class AppPdfViewer extends Component {

    render() {
       return <PDFView style={this.props.style} resourceType={this.props.type} fadeInDuration={.2} resource={this.props.source} />
    }
}