import { createStackNavigator } from 'react-navigation';
import IndexScreen from './src/screens/home/index.screen';
import SplashScreen from './src/screens/splash/splash.screen';
import ProductDetailsScreen from './src/screens/product-details/product-details.screen';

const App = createStackNavigator({
  Splash: { screen: SplashScreen},
  Home: {screen: IndexScreen },
  ProductDetails: {screen: ProductDetailsScreen}
});

export default App;