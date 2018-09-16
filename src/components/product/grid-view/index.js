import React, { Component } from "react";
import { Text, Container, View, Content } from "native-base";

import Grid from "react-native-grid-component";
import { ProductItem } from "../product-item/product-item.component";

export class ProductsGridView extends Component {
  state = { gridItems: undefined };

  componentWillMount() {
    this.makeGrid();
  }
  styles = {
    item: {
      flex: 1,
      margin: 1
    },
    list: {
      flex: 1
    }
  };
  _renderPlaceholder = i => (
    <View style={this.styles.item} key={i}>
      <Text>place holder</Text>
    </View>
  );

  _renderItem = (data, i) => (
    <ProductItem
      style={this.styles.item}
      data={data}
      key={i}
      navigation={this.props.navigation}
    />
  );
  makeGrid() {
    const posts = this.props.products;
    this.setState({ gridItems: posts });
  }

  render() {
    return (
      <Container>
        <Content>
          <Grid
          onEndReached={this.props.endHandler}
            style={this.styles.list}
            renderItem={this._renderItem}
            data={this.state.gridItems}
            itemsPerRow={2}
          />
        </Content>
      </Container>
    );
  }
}
