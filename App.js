import {AppRegistry} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IndexScreen from './src/screens/home/index.screen';
import SplashScreen from './src/screens/splash/splash.screen';
import ProductDetailsScreen from './src/screens/product-details/product-details.screen';
import LoginScreen from './src/screens/login/login-screen/login.screen';
import VerifyScreen from './src/screens/login/verify-screen/verify-code.screen';
import ProductsGridViewScreen from './src/screens/products-gridview/products-gridview.screen';
import ProfileScreen from './src/screens/user/profile/profile.screen';
import PDFViewScreen from './src/screens/product-details/pdf-view/pdf-view.screen';
import VideoViewScreen from './src/screens/product-details/video-view/video-view.screen';
import ImageViewScreen from './src/screens/product-details/image-view/image-view.screen';
import ProductSearchScreen from './src/screens/products-search/product-search.screen';

const App = createStackNavigator({
  Splash: { screen: SplashScreen},
  LoginSign: { screen: LoginScreen },
  VerifyMobile: {screen: VerifyScreen},
  Home: {screen: IndexScreen },
  Products: {screen: ProductsGridViewScreen},
  ProductDetails: {screen: ProductDetailsScreen},
  Profile: {screen: ProfileScreen},
  PDFView: {screen: PDFViewScreen},
  VideoView: {screen: VideoViewScreen},
  ImageView: {screen: ImageViewScreen},
  Search: { screen: ProductSearchScreen}
});


AppRegistry.registerComponent('tafakorq' , () => App)

export default App;