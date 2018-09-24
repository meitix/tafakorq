import React , { Component } from 'react';
import {PDFViewStyles} from './pdf-view.styles';
import { AppPdfViewer } from '../../../components/product/files-view/pdf-view';


export default class PDFViewScreen extends Component {
    static navigationOptions = {header: null};
    render() {
        return <AppPdfViewer  type="file" style={PDFViewStyles} source={this.props.navigation.state.params.address} />
    }
}