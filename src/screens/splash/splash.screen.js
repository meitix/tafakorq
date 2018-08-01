import React, { Component } from 'react';
import {View , Text } from 'react-native';
import { SplashStyles } from './splash.style';

export default class SplashScreen extends Component {
    static navigationOptions = { title: 'Welcome', header: null };
    render() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 1000);
        return (
            <View style={SplashStyles.page}>
            <Text style={SplashStyles.text}>Splash</Text>
            </View>
        );
    }
}  