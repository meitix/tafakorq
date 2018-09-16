import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import ImageSlider from "react-native-image-slider";
import { HomeStyles } from "./index.styles";
import { verticalScale } from "../../helpers/size-fixer.helper";
import { PostService } from "../../services/post.service";
import { ScrollView } from "react-native-gesture-handler";
import { ProductHorizontalList } from "../../components/product/product-horizontal-list/product-horizontal-list.component";
var Enumerable = require("linq");
import { SideBarComponent } from "../../components/Sidebar/sidebar";
import { colors } from "../../common/colors";
import { BottomNavigationComponent } from "../../components/bottom-navigation/bottom-navigation-component";
import {
  Drawer,
  Container
} from "native-base";
import { MainPageHeader } from '../../components/header/header.component'
export default class IndexScreen extends Component {
  static navigationOptions = {
    title: "صفحه اصلی",
    header: null
  };
  postService = new PostService();

  state = { data: [], slideImages: [], drawerIsOpen: false };

  componentWillMount() {
    this.getData();
  }

  onBackPressed = () => {
    BackHandler.exitApp();
    return false;
  };

  getData() {
    this.postService
      .getMainPageData(10, 10, 1)
      .then(response => response.json())
      .then(d => {
        let slides = Enumerable.from(d.Slides)
          .select(s => s.LargePath.toLowerCase())
          .toArray();
        this.setState({ data: d, slideImages: slides });
      })
      .catch(err => {
        Alert.alert("خطا", "خطا در دریافت اطلاعات", [
          {
            text: "باشه",
            onPress: () => {
              console.log("باشه کلیک شد.");
            }
          },
          {
            text: "لاگ در کنسول",
            onPress: () => {
              console.log(err);
            }
          }
        ]);
      });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          side={"right"}
          open={this.state.drawerIsOpen}
          captureGestures={true}
          acceptDoubleTap={true}
          onClose={() => {
            const state = this.state;
            state.drawerIsOpen = false;
            this.setState(state);
          }}
          content={<SideBarComponent navigation={this.props.navigation}/>}
        >
          {this.renderContent()}
        </Drawer>

      </View>
    );
  }

  renderContent() {
    return (
      <Container>
        <MainPageHeader onSearchButtonPressed={this.searchButtonPressed} onMenuButtonPressed={() => {
                const state = this.state;
                state.drawerIsOpen = true;
                this.setState(state);
              }}/>
        
        <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
          <View style={{ height: verticalScale(200) }}>
            <ImageSlider style={{ flex: 1 }} images={this.state.slideImages} />
          </View>
          <View>
            <Text style={HomeStyles.headerText}>تازه ها</Text>
          </View>
          <View>
            <ProductHorizontalList
              navigation={this.props.navigation}
              data={this.state.data.NewPosts}
            />
          </View>
          <View>
            <Text style={HomeStyles.headerText}>برترین ها</Text>
          </View>
          <View>
            <ProductHorizontalList
              navigation={this.props.navigation}
              data={this.state.data.PopularPosts}
            />
          </View>
        </ScrollView>
        <BottomNavigationComponent navigation={this.props.navigation} />
      </Container>
    );
  }

}
