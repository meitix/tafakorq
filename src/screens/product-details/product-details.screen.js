import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Image from "react-native-image-progress";
import { Card, Button  } from "react-native-material-ui";
import ProgressBar from "react-native-progress/Bar";
import { ProductHorizontalList } from "../../components/product/product-horizontal-list/product-horizontal-list.component";
import { PostService } from "../../services/post.service";
import { productDetailsStyle } from "./product-details.styles";
var Enumerable = require("linq");
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { verticalScale } from "../../helpers/size-fixer.helper";
import { CommonStyles } from "../../common/styles";
import { colors } from "../../common/colors";

export default class ProductDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.post.title,
     header: null
  });
  _imageCarouse;
  state = {
    post: this.props.navigation.state.params.post,
    sliderImages: [
      this.props.navigation.state.params.post.MainPicLarge.toLowerCase()
    ]
  };

  sliderImages = [];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getPostDetails();
  }

  makeSliderArray(post) {
    this.sliderImages = Enumerable.from(post.Pictures)
      .select(p => p.Large)
      .toArray();
  }

  getPostDetails() {
    const postService = new PostService();
    postService
      .getPost(this.state.post.Id)
      .then(res => res.json())
      .then(post => {
        this.setState({ post: post.Post });
        this.makeSliderArray(post.Post);
      })
      .catch(err => {
        console.error(err);
        alert("خطا");
      });
  }
  render() {
    return (
      <HeaderImageScrollView
      maxHeight={verticalScale(400)}
      minHeight={verticalScale(50)}
      scrollViewBackgroundColor={colors.background}
      headerImage={{uri:this.state.sliderImages[0]}}
      foregroundParallaxRatio={4}
    >
      <View>
        <TriggeringView onHide={() => console.log('text hidden')} >
        <Card>
          <Text style={productDetailsStyle.title}>{this.state.post.Title}</Text>
          <Text style={productDetailsStyle.Price}>{this.state.post.Price}</Text>
          <Text style={productDetailsStyle.createDate}>
            {this.state.post.CreateDate}{" "}
          </Text>
        </Card>
        <Button
          text="نمایش فایل ها"
          style={productDetailsStyle.addToCardButton}
        />
        <Card>
          <Text style={productDetailsStyle.content}>
            {this.state.post.Summary}
          </Text>

          <Text style={productDetailsStyle.content}>
            {this.state.post.Content}
          </Text>
        </Card>
        </TriggeringView>
      </View>
        
    </HeaderImageScrollView>
    );
  }

  _renderCrousel(images) {
    return (
      // <ImageCarousel
      //   renderContent={this._renderContent}
      //   renderHeader={this._renderHeader}
      //   renderFooter={this._renderFooter}
      // >
      //   {images.map(url => {
      //     console.log("url: " + url);

      //     return (
      //       <Image key={url} source={{ uri: url }} style={{ height: 100 }} />
      //     );
      //   })}
      // </ImageCarousel>
      <Image source={{ uri: images[0] }} style={productDetailsStyle.image} />
    );
  }


  renderNavBar() {
    return (
      <View>
       <Text>navbar</Text>
      </View>
    );
  }

  _renderContent(post) {
    return null;
  }

  _renderHeader() {
    return <Text>Header</Text>;
  }

  _renderFooter() {
    return <Text>Footer</Text>;
  }
}
