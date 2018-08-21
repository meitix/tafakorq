import React , { Component } from 'react';
import { View , Image ,Text} from 'react-native';
import { verticalScale } from '../../helpers/size-fixer.helper';

export class SideBarComponent extends Component {
   render() {
       return (
        <View style={{flex:1}}>
            <Image style={{height:verticalScale(200) , width:'100%'}}
            source={require('../../../assets/images/sidebar-header.jpg')} />
            <Text>مهدی ولی زاده</Text>
        </View>
       );
   } 
}