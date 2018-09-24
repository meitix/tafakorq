import React , { Component } from 'react';
import { Spinner } from 'native-base';
import { verticalScale } from '../../helpers/size-fixer.helper';
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => AppSpinner);

export class AppSpinner extends Component {
    render() {
        return <Spinner
        size="large"
        color="#01579B"
        style={{ marginTop: verticalScale(30) }}
      />
    }
}