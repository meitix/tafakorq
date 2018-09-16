import { CommonStyles } from '../../common/styles';
import { scale, verticalScale, moderateScale } from '../../helpers/size-fixer.helper';


export const NotFoundStyles = {
    container: {
        flex: 1
    },
    icon: {
        marginTop: verticalScale(50),
        width: moderateScale(130),
        alignSelf: 'center',
        height: verticalScale(140)
    },
    text:[CommonStyles.text , {
        alignSelf: 'center',
        fontSize: scale(20),
        marginTop: verticalScale(20)
    }]
}