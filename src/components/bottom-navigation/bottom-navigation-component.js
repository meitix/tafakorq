import React, { Component } from "react";
import { BottomNavigation } from "react-native-material-ui";
import { BottomNavigationStyles } from "./bottom-navigation-styles";

export class BottomNavigationComponent extends Component {
  state = { active: "people" };
  render() {
    return (
      <BottomNavigation active={this.state.active} hidden={false}>
        <BottomNavigation.Action
          key="category"
          icon="toc"
          style={{
            label: BottomNavigationStyles.label
          }}
          label="موضوعات"
          onPress={() => this.setState({ active: "category" })}
        />
        <BottomNavigation.Action
          key="orders"
          icon="shopping-cart"
          label="خریدها"
          style={{
            label: BottomNavigationStyles.label
          }}
          onPress={() => this.setState({ active: "orders" })}
        />
        <BottomNavigation.Action
          key="credit"
          icon="credit-card"
          style={{
            label: BottomNavigationStyles.label
          }}
          label="اعتبار حساب"
          onPress={() => this.setState({ active: "credit" })}
        />
      </BottomNavigation>
    );
  }
}
