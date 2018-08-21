import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Image from 'react-native-image-progress';
import { Card } from 'react-native-material-ui';
import ProgressBar from 'react-native-progress/Bar';
import { ProductHorizontalList } from '../../components/product/product-horizontal-list/product-horizontal-list.component';
import { PostService } from '../../services/post.service';
import { productDetailsStyle } from './product-details.styles';
var Enumerable = require('linq');
import ImageCarousel from 'react-native-image-carousel';

export default class ProductDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.post.title });
    _imageCarouse;
    state = {
        post: this.props.navigation.state.params.post,
        sliderImages: [this.props.navigation.state.params.post.MainPicLarge.toLowerCase()]
    };

    sliderImages = [];

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getPostDetails();
    }

    makeSliderArray(post) {
        this.sliderImages = Enumerable.from(post.Pictures).select(p => p.Large).toArray();
    }

    getPostDetails() {
        const postService = new PostService();
        postService.getPost(this.state.post.Id)
            .then(res => res.json())
            .then(post => {
                this.setState({ post: post });
                this.makeSliderArray(post);
                console.log(this.state.post.MainPicLarge);
            }).catch(err => {
                console.error(err);
                alert('خطا');
            })
    }
    render() {

        return (
            <View>
                <ImageCarousel
                    ref={(imageCarousel) => {
                        this._imageCarousel = imageCarousel;
                    }}
                    renderContent={this._renderContent}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                >
                    {this.state.sliderImages.map((url) => (
                        <Image
                            key={url}
                            style={productDetailsStyle.image}
                            source={{ uri: url, height: 100 }}
                            resizeMode={'contain'}
                        />
                    ))}
                </ImageCarousel>


            </View>
        );


    }

    _renderContent() {
        return (
        <View>
        <Card>
            <Text style={productDetailsStyle.title}>{this.state.post.Title}</Text>
            <Text style={productDetailsStyle.Price}>{this.state.post.Price}</Text>
            <Text style={productDetailsStyle.createDate}>{this.state.post.CreateDate} </Text>
        </Card>

            <Card>
                <Text style={productDetailsStyle.content}>
                    {this.state.post.Summary}
                </Text>

                <Text style={productDetailsStyle.content}>
                    {this.state.post.Content}
                </Text>
            </Card>
            </View>);
        }

        _renderHeader () {
            return (<Text>Header</Text>)
        }

        _renderFooter () {
            return (<Text>Footer</Text>)
        }
}