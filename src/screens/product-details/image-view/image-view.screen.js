import React, { Component } from 'react';
import AppImageView from '../../../components/product/files-view/image-view/image-view.component';

export default class ImageViewScreen extends Component {

  static navigationOptions = {header: null}
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <AppImageView source={this.props.navigation.state.params.address} />
    );
  }
}
