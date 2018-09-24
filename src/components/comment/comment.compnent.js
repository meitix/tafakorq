import React, { Component } from "react";
import {
  List,
  ListItem,
  Text,
  Right,
  Left,
  Icon,
  Col,
  Grid,
  Row
} from "native-base";
import { CommonStyles } from "../../common/styles";
import { colors } from "../../common/colors";
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent("tafakorq" , () => Comments);

export class Comments extends Component {
  render() {
    return (
      <List dataArray={this.props.data} renderRow={this._renderListItem} />
    );
  }

  _renderListItem(item) {
    return (
      <ListItem>
        <Grid>
          <Row>
            <Text style={[CommonStyles.text, CommonStyles.textRight]}>
              {item.FullName}
            </Text>
          </Row>
          <Row>
            <Col size={1}>
              <Icon type="Entypo" name="heart-outlined" color='#ff0' />
            </Col>
            <Col size={11}>
              <Text style={[CommonStyles.text, CommonStyles.textRight]}>
                {item.Text}
              </Text>
            </Col>
          </Row>
        </Grid>
      </ListItem>
    );
  }
}
