import React , { Component } from 'react';
import { Thumbnail } from 'native-base';
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => DefaultProfileImage);

export class DefaultProfileImage extends Component {

    render() {
        return  <Thumbnail style={this.props.style} circular large source={ require('../../../../assets/images/user-default.png')} />
    }
}