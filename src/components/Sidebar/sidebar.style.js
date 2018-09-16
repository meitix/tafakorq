import { CommonStyles } from "../../common/styles";
import {scale, moderateScale, verticalScale } from "../../helpers/size-fixer.helper";

export const SideBarStyles = {
    profileText: [CommonStyles.text , {alignSelf: 'center', color: '#fff', fontSize: scale(15),}],
    profilePicContainer: {alignItems: 'center', marginTop: verticalScale(-150),},
    profilePic: {width: moderateScale(150) , height: verticalScale(150) }
}