import React, { Component } from "react";
import { Text, View } from "react-native";
import Image from "react-native-image-progress";
import { Card } from "react-native-material-ui";
import { Button, Row, Col, Icon, Tab, Tabs, TabHeading } from "native-base";
import ProgressBar from "react-native-progress/Bar";
import { ProductHorizontalList } from "../../components/product/product-horizontal-list/product-horizontal-list.component";
import { PostService } from "../../services/post.service";
import { productDetailsStyle } from "./product-details.styles";
var Enumerable = require("linq");
import HeaderImageScrollView, {
  TriggeringView
} from "react-native-image-header-scroll-view";
import { verticalScale } from "../../helpers/size-fixer.helper";
import { CommonStyles } from "../../common/styles";
import { colors } from "../../common/colors";
import {FilesGrid} from '../../components/product/files-grid/files-grid.component'
import { Comments } from "../../components/comment/comment.compnent";
// ignor warning.
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
    ],
    relatedPosts: [],
    comments: [],
    tags: [],
    files: []
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getPostDetails();
  }

  makeSliderArray(post) {
    return Enumerable.from(post.Pictures)
      .select(p => p.Large)
      .toArray();
  }

  getPostDetails() {
    const postService = new PostService();
    postService
      .getPost(this.state.post.Id)
      .then(res => res.json())
      .then(post => {
        const state = this.state;
        state.post = post.Post;
        state.sliderImages = post.Pictures;
        state.relatedPosts = post.RelatedPosts;
        state.comments = post.Comments;
        state.tags = post.Tags;
        state.files = post.Files;
        this.setState(state);
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
        //headerImage={{ uri: this.state.sliderImages[0] }}
        foregroundParallaxRatio={4}
      >
        {this._renderContent()}
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

  _renderContent() {
    return (
      <View>
        <TriggeringView onHide={() => console.log("text hidden")}>
        {this._renderProductTopInfo()}
       
          <Tabs 
            tabContainerStyle={{ backgroundColor: colors.primary }}
            tabBarBackgroundColor={colors.primary}
          >
            {this._renderCommentsTab()}
            {this._renderFilesTab()}
            {this._renderDescriptionTab()}
          </Tabs>

        </TriggeringView>
          <ProductHorizontalList
            navigation={this.props.navigation}
            data={this.state.relatedPosts}
          />
      </View>
    );

  }

_renderProductTopInfo() {
    return (
        <Card>
        <Row>
          <Text style={productDetailsStyle.title}>
            {this.state.post.Title}
          </Text>
        </Row>
        <Row>
          <Col>
            <Text style={productDetailsStyle.createDate}>
              {this.state.post.CreateDate}{" "}
            </Text>
          </Col>
          <Col>
            <Text style={productDetailsStyle.price}>
              {this.state.post.Price} تومان
            </Text>
          </Col>
        </Row>
      </Card>
    );
}


_renderCommentsTab() {
    return (
      <Tab
        heading={
          <TabHeading>
            <Text style={[CommonStyles.text, CommonStyles.tabTextStyle]}>
              نظرات کاربران
            </Text>
            <Icon style={CommonStyles.tabIcon} type="MaterialIcons" name="comment" />
          </TabHeading>
        }
      >
       <Comments data={this.state.comments} />
      </Tab>
    );
  }


  _renderFilesTab() {
    return (
      <Tab
        heading={
          <TabHeading>
            <Text style={[CommonStyles.text, CommonStyles.tabTextStyle]}>
              فایل ها
            </Text>
            <Icon style={CommonStyles.tabIcon} type="MaterialIcons" name="archive" />
          </TabHeading>
        }
      >
        <FilesGrid isPaid={this.state.post.IsAvailable} navigation={this.props.navigation} postId={this.state.post.Id} data={this.state.files} />
      </Tab>
    );
  }

  _renderDescriptionTab() {
    return (
      <Tab
        heading={
          <TabHeading>
            <Text style={[CommonStyles.text, CommonStyles.tabTextStyle]}>
              توضیحات
            </Text>
            <Icon style={CommonStyles.tabIcon} type="MaterialIcons" name="toc" />
          </TabHeading>
        }
      >
        <Text style={productDetailsStyle.content}>
          {this.state.post.Summary}
          {this.state.post.Content}
        </Text>
      </Tab>
    );
  }
}
