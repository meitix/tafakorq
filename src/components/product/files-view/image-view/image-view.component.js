import React, { Component } from 'react';
import {Image} from 'react-native';

export default class AppImageView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.source)
    return (
        <Image source={this.props.source} style={{flex: 1}} />
    );
  }
}
