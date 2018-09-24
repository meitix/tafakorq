import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { ProductItemStyles } from './product-item.component.styles';
import { Card } from 'react-native-material-ui';

export class ProductItem extends Component {
    render() {
        const data = this.props.data;
        return (
            <View style={[ProductItemStyles.container, this.props.style]}>
                <Card key={data.Id} onPress={this.gotoDetails(data)}>
                    <Image style={ProductItemStyles.image} source={{ uri: data.MainPicMedium.toLowerCase() }} />
                    <View style={ProductItemStyles.body}>
                        <Text style={[ProductItemStyles.text, ProductItemStyles.title]}>{data.Title}</Text>
                        {
                            (() => {
                                if (data.Price) {
                                    return <Text style={[ProductItemStyles.text, ProductItemStyles.price, data.Price == 0 ? ProductItemStyles.free : ProductItemStyles.priceAmount]}>
                                        {data.Price != 0 ? data.Price + ' تومان' : 'رایگان'}</Text>
                                }
                                return null;
                            })()

                        }
                        <Text style={[ProductItemStyles.text, ProductItemStyles.views]}>{data.Viewer} بازدید</Text>
                    </View>
                </Card>
            </View>
        );
    }

    gotoDetails(data) {

        return () => { this.props.navigation.navigate('ProductDetails', { post: data }); };
    }

}