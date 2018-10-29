import React, { Component } from 'react';
import ImageView from 'react-native-image-view';

export default class AppImageView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.source)
    return (
        <ImageView backgroundColor="#000" images={this.props.source} />
    );
  }
}
