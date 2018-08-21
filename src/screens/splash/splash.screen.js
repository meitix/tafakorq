import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SplashStyles } from './splash.style';
import { Font } from 'expo';

import { setCustomText } from 'react-native-global-props';


export default class SplashScreen extends Component {
    static navigationOptions = { title: 'Welcome', header: null };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Font.loadAsync({
            'IRANYekan': require('../../../assets/fonts/IRANYekan.ttf'),
        });
        const customTextOption = {
            fontFamily: 'IRANYekan',
        }
        setCustomText(customTextOption);
    }


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