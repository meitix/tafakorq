import React, { Component } from "react";
import { Thumbnail, List, ListItem, Text, Right, Body , Toast} from "native-base";
import * as Progress from "react-native-progress";
import { CommonStyles } from "../../../common/styles";
import { FileService } from "../../../services/file.service";
import { Alert, Linking } from 'react-native';
import { PaymentService } from "../../../services/payment.service";
import { ErrorHandler } from '../../../helpers/error-handler';

export class FilesGrid extends Component {
  state = { downloadingFilesId: [] }
  postId = this.props.postId;

  render() {
    return (
      <List
        dataArray={this.props.data}
        renderRow={this._renderItem.bind(this)}
      />
    );
  }

  _renderItem(item) {
    const image = fileImages[item.Type];
    return (
      <ListItem
        style={{ alignContent: "center" }}
        onPress={this._itemPressed(item)}
      >
        <Body>
          <Text
            style={[CommonStyles.text, { textAlign: "right", marginRight: 20 }]}
          >
            {item.Title}
          </Text>
          {
            (() => {
              if (this.state.downloadingFilesId.includes(item.Id)) {
                return <Progress.Bar key={item.Id + ''} progress={0.25} animated indeterminate />
              }

              return null;
            })()
          }

        </Body>

        <Right>
          <Thumbnail large source={image} />
        </Right>
      </ListItem>
    );
  }

  _itemPressed(item) {
    return () => {
      if (this.props.isPaid) {
        this.getFile(item);
      } else {
        this.aksForPayment();
      }
    };
  }

  aksForPayment() {
    Alert.alert(null, 'آیا مایل به پرداخت هستید ؟', [
      {
        text: 'بله',
        onPress: () => {
          const paymentService = new PaymentService()
          // check user balance.
          paymentService.checkUserBalance(this.postId).then(res => {
            res.json().then(result => {
              if (result.status) {
                // call payment api.
                paymentService.payWithBalance(this.postId).then(resp => {
                  // handle payment result.
                  resp.json().then(paymentResult => {
                    alert(paymentResult.message);
                  })
                }).catch(err => {
                  ErrorHandler.handle(err);
                  return null;
                });
              } else {
                // open payment getway.
                paymentService.payWithBalanceUrl(this.postId).then(url => {
                  Linking.openURL(url);
                });
              }
            })
          }).catch(err => {
            ErrorHandler.handle(err);
            return null;
          })
          paymentService.finalizePurchase(this.postId)
        }
      },
      {
        text: 'خیر',
        style: 'cancel'
      }
    ])

  }

  navigateToPaymentScreen() {
alert('going to navigation screen')
  }

  getFile(item) {
    this.showProgress(item.Id);
    // get file.
    const fileService = new FileService();
    fileService
      .getFile(this.postId, item)
      .then(fileAddr => {
        if (fileAddr) {
          this._openFile(item.Type, fileAddr);
        }
        this.hideProgress(item.Id);
      })
      .catch(err => {
        this.hideProgress(item.Id);
        return null;
      });
  }

  hideProgress(itemId) {
    const state = this.state;
    const itemIdIndex = state.downloadingFilesId.indexOf(itemId);
    state.downloadingFilesId.splice(itemIdIndex, 1);
    this.setState(state);
  }

  showProgress(itemId) {
    const state = this.state;
    state.downloadingFilesId.push(itemId);
    this.setState(state);
  }

  _openFile(type, url) {
    console.log(type)
    switch (type) {
      case "متن": {
        this.props.navigation.navigate("PDFView", { address: url });
        break;
      } 
      case "تصویر": {
        this.props.navigation.navigate("ImageView", { address: [{ isStatic: true ,uri: url}] });
        break;
      }
      case "فیلم": {
        this.props.navigation.navigate("VideoView", { address: url });
        break;
      }
      default: {
        alert(type)
      }
    }
  }
}

const fileImages = {
  "پی دی اف": require("../../../../assets/images/files/pdf.png"),
  تصویر: require("../../../../assets/images/files/image.png"),
  فیلم: require("../../../../assets/images/files/video.png"),
  متن: require("../../../../assets/images/files/pdf.png")
};
