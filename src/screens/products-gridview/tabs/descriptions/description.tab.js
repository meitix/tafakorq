import React, { Component } from "react";
import { CategoryService } from "../../../../services/category.service";
import { ErrorHandler } from "../../../../helpers/error-handler";
import { Container, Card, Text, CardItem, Title } from "native-base";
import { AppSpinner } from "../../../../components/spinner";
import { DescriptionTabStyles } from "./description.tab.styles";

export class DescriptionTab extends Component {
  state = { category: undefined };

  componentWillMount() {
    CategoryService.getDetails(this.props.navigation.state.params.categoryId)
      .then(res => {
        res.json().then(category => {
          this.setState({ category });
        });
      })
      .catch(err => {
        ErrorHandler.handle(err);
      });
  }

  render() {

    if (this.state.category)
      return (
        <Container style={DescriptionTabStyles.container}>
          <Card>
            <CardItem>
              <Text style={DescriptionTabStyles.title}>{this.state.category.Title}</Text>
            </CardItem>
            <CardItem cardBody>
              <Text style={DescriptionTabStyles.content}>{this.state.category.Description}</Text>
            </CardItem>
          </Card>
        </Container>
      );
    else {
      return <AppSpinner />;
    }
  }
}
