import { moderateScale } from '../../helpers/size-fixer.helper';

export const CommonStyles = {
    text: {
        fontFamily: 'IRANYekan',
    },
    textRight:  {width: '100%' , textAlign: 'right'},
    activeTabTextStyle: {
        color: '#fff'
    },
    tabTextStyle: {
        color: '#eee'
    },
    tabIcon: {
        width: moderateScale(25),
        marginLeft: moderateScale(10)
    }
}