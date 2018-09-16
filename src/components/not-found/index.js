import React, { Component } from "react";
import { Text, Container} from "native-base";
import { NotFoundStyles } from "./styles";
import { View , Image} from 'react-native';
export class NotFound extends Component {

    image = require('../../../assets/images/alert.png');

  render() {
    return (
      <View style={NotFoundStyles.container}>
          <Image source={this.image} style={NotFoundStyles.icon} />
        <Text style={NotFoundStyles.text}>مطلبی یافت نشد</Text>
      </View>
    );
  }
}
