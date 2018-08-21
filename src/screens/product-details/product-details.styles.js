import { CommonStyles } from "../../common/styles";
import { scale, verticalScale } from "../../helpers/size-fixer.helper";

export const productDetailsStyle = {
    title: [CommonStyles.text, {
        fontSize: scale(15),
        writingDirection: 'rtl',
    }],
    price: [CommonStyles.text, {
        textAlign: 'center',
        fontSize: scale(18)
    }],
    content: [CommonStyles.text, {
        textAlign: 'right',
        writingDirection: 'rtl',
        fontSize: scale(18)
    }],
    createDate: {
        textAlign: 'left',
        fontSize: scale(12),
        color: '#ccc'
    },
image: {
    width: '100%',
    height: verticalScale(250)
}
}