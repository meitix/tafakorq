import React, { Component } from "react";
import { View , Image } from 'react-native';
import { Container, Row, Input, Header, Item, Icon } from "native-base";
import { ProductsGridView } from "../../components/product/grid-view";
import { PostService } from "../../services/post.service";
import { NotFound } from "../../components/not-found";
import { AppSpinner } from "../../components/spinner";
import { NotFoundStyles } from "../../components/not-found/styles";

export default class ProductSearchScreen extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      q: undefined,
      isLoading: false,
      products: undefined
    };
    this.page = 1;
    this._postService = new PostService();
  }

  render() {
    return (
      <Container>
        <Header style={{ marginTop: 24 }} searchBar rounded>
          <Item>
            <Input
              onChangeText={text => {
                this.page = 1;
                this.state.products = [];
                this.setState(this.state.products);
                this.getProducts(text);
              }}
            />
            <Icon name="search" />
          </Item>
        </Header>

        <Row>{this._renderGrid()}</Row>
      </Container>
    );
  }

  _renderGrid() {
    if (this.state.isLoading) {
      return <AppSpinner />;
    } else if (this.state.products) {
      if (this.state.products.length === 0) {
        if (this.q.length > 3) return <NotFound />;
      } else
        return (
          <ProductsGridView
            endHandler={this.endHandler.bind(this)}
            products={this.state.products}
            navigation={this.props.navigation}
          />
        ); 
    }
        return <View style={NotFoundStyles.container}>
            <Image style={NotFoundStyles.icon} source={require('../../../assets/images/search.png')} />
        </View>;
  }

  q = "";
  endHandler() {
    this.page++;
    this.getProducts(this.q);
  }

  getProducts(q) {
    if (q.length < 3) return;
    this.q = q;
    const state = this.state;
    state.isLoading = true;
    this.setState(state);

    this._postService
      .getByCategoryId(null, this.page, 10, q, null, null)
      .then(res => {
        res.json().then(result => {
          state.isLoading = false;
          if (this.page > 1) state.products.concat(result.Posts);
          else this.setState((state.products = result.Posts));

          this.setState(state);
        });
      })
      .catch(err => {
        alert("لطفا اتصال به اینترنت را چک کنید");
      });
  }
}
