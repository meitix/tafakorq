import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ProductItem } from '../product-item/product-item.component'
import { moderateScale, verticalScale } from '../../../helpers/size-fixer.helper';

export class ProductHorizontalList extends Component {

    render() {
      
        return (
            <FlatList style={{ height: verticalScale(270) }}
                direction='rtl'
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.props.data}
                keyExtractor={(item, i) => item.Id ? item.Id : i}
                renderItem={({ item }) => this.renderItem(item)}
            />
        );
    }

    renderItem(item) {
        return (<ProductItem style={{ width: moderateScale(130) }}
            data={item}
            navigation={this.props.navigation}
        />);
    }

    clickListener(item) {
        alert(item.Id)
    }
}