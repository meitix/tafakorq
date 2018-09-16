import { createStackNavigator } from 'react-navigation';
import IndexScreen from './src/screens/home/index.screen';
import SplashScreen from './src/screens/splash/splash.screen';
import ProductDetailsScreen from './src/screens/product-details/product-details.screen';
import LoginScreen from './src/screens/login/login-screen/login.screen';
import VerifyScreen from './src/screens/login/verify-screen/verify-code.screen';
import ProductsGridViewScreen from './src/screens/products-gridview/products-gridview.screen';
import ProfileScreen from './src/screens/user/profile/profile.screen';

const App = createStackNavigator({
  Splash: { screen: SplashScreen},
  Home: {screen: IndexScreen },
  ProductDetails: {screen: ProductDetailsScreen},
  LoginSign: { screen: LoginScreen },
  VerifyMobile: {screen: VerifyScreen},
  Products: {screen: ProductsGridViewScreen},
  Profile: {screen: ProfileScreen}
});

export default App;