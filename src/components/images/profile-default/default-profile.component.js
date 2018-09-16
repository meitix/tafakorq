import React , { Component } from 'react';
import { Thumbnail } from 'native-base';
export class DefaultProfileImage extends Component {

    render() {
        return  <Thumbnail style={this.props.style} circular large source={ require('../../../../assets/images/user-default.png')} />
    }
}