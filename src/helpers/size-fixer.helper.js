import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// const scale = size => width / guidelineBaseWidth * size;
// const verticalScale = size => height / guidelineBaseHeight * size;
// const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

// const scale = size => size;
// const verticalScale = size => size * vh;
// const moderateScale = size => size * vw;

const scale = size => size;
const verticalScale = size => size;
const moderateScale = size => size ;

export {scale, verticalScale, moderateScale};