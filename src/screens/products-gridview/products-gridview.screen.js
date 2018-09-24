import React, { Component } from "react";
import {
  Tabs,
  Text,
  TabHeading,
  Tab,
  Header,
  Container,
  Icon
} from "native-base";
import { colors } from "../../common/colors";
import { Styles } from "./product-grid-view.styles";
import { ProductsTab } from "./tabs/products";
import { DescriptionTab } from './tabs/descriptions/description.tab';

// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => ProductsGridViewScreen);

export default class ProductsGridViewScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Header />
        <Tabs
          tabContainerStyle={{ backgroundColor: colors.primary }}
          tabBarBackgroundColor={colors.primary}
        >
          <Tab
           style={Styles.tabBody}
            heading={
              <TabHeading>
                <Text style={Styles.tabHeading}>رایگان</Text>
                <Icon name="checkmark" />
              </TabHeading>
            }
          >
           <ProductsTab priceState="0" navigation={this.props.navigation} />
          </Tab>
          <Tab
           style={Styles.tabBody}
            heading={
              <TabHeading>
                <Text style={Styles.tabHeading}>غیر رایگان</Text>
                <Icon name="cart" />
              </TabHeading>
            }
          >
          <ProductsTab categoryId={this.props.categoryId} priceState="1" navigation={this.props.navigation}  />
          </Tab>
          <Tab
           style={Styles.tabBody}
            heading={
              <TabHeading>
                <Text style={Styles.tabHeading}>توضیحات</Text>
                <Icon name="text" />
              </TabHeading>
            }
          >
            <DescriptionTab categoryId={this.props.categoryId} navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
