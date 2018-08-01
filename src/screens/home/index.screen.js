import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { RTLView, RTLText } from 'react-native-rtl-layout';
import { HomeStyles } from './index.styles';

export default class IndexScreen extends Component {
    static navigationOptions = { title: 'صفحه اصلی', header: null }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 500 }}>
                    <ImageSlider style={{ flex: 1 }} images={[
                        'https://www.abdn.ac.uk/music/feature-images/old_music_score-wallpaper-1600x900_rdax_450x253.jpg',
                        'http://www.breadalbane.pkc.sch.uk/BA/wp-content/uploads/2018/01/music-.jpg',
                        'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/YouTube-music-796x419.jpg'
                    ]} />

                </View>
                <View>
                    <Text style={HomeStyles.headerText}>تازه ها</Text>
                </View>
            </View>
        );
    }
}