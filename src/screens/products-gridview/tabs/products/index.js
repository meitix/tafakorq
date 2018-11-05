import React, { Component } from "react";
import { ProductsGridView } from "../../../../components/product/grid-view";
import { PostService } from "../../../../services/post.service";
import { AppSpinner } from "../../../../components/spinner";

import { NotFound } from "../../../../components/not-found";

export class ProductsTab extends Component {
  state = { products: undefined };
  page = 1;
  _postService = new PostService();

  componentWillMount() {
    this.getProducts();
  }

  getProducts() {
    this._postService
      .getByCategoryId(
        this.props.navigation.state.params.categoryId,
        this.page,
        10,
        "",
        1,
        this.props.priceState
      )
      .then(res => {
        res.json().then(result => {
          if(this.page> 1)
          this.state.products.concat(result.Posts);
          else
          this.setState({ products: result.Posts });
        });
      })
      .catch(err => {
        alert("لطفا اتصال به اینترنت را چک کنید");
      });
  }

  endHandler() {
    this.page++;
    this.getProducts();
  }

  render() {
    if (!this.state.products) {
      return <AppSpinner />;
    } else if (this.state.products.length === 0) {
      return <NotFound />;
    }

    return (
      <ProductsGridView
        endHandler={this.endHandler.bind(this)}
        products={this.state.products}
        navigation={this.props.navigation}
      />
    );
  }
}
