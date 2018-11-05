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
          icon="search"
          style={{
            label: BottomNavigationStyles.label
          }}
          label="سرچ"
          onPress={() => {
            this.props.navigation.navigate('Search')
          } }
        />
        <BottomNavigation.Action
          key="profile"
          icon="person"
          label="پروفایل"
          style={{
            label: BottomNavigationStyles.label
          }}
          onPress={() => { 
            this.props.navigation.navigate('Profile')
          }
        }
        />
        <BottomNavigation.Action
          key="credit"
          icon="toc"
          style={{
            label: BottomNavigationStyles.label
          }}
          label="مطالب انگیزشی"
          onPress={() => { 
            this.props.navigation.navigate('Products' , {id: 4})
          }
        }
        />
      </BottomNavigation>
    );
  }
}
