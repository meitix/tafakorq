import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IndexScreen from './src/screens/home/index.screen';
import SplashScreen from './src/screens/splash/splash.screen';

const App = createStackNavigator({
  Splash: { screen: SplashScreen},
  Home: {screen: IndexScreen }
});

export default App;
