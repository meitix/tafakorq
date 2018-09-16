import { scale, verticalScale } from "../../../helpers/size-fixer.helper";
import { CommonStyles } from "../../../common/styles";
import { colors } from "../../../common/colors";


export const ProductItemStyles = {
    image: {
        height: verticalScale(150)
    },
    text: CommonStyles.text,
    title: {
        fontSize: scale(10),
    },
    views: {
        fontSize: scale(8),
        textAlign: 'right',
        color: '#ccc',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: scale(12),
        textAlign: 'center',
    },
    free: {
        color: '#00c776',
    },
    priceAmount: {
        color: colors.price,
    },
    body: {
        padding: scale(5)
    },
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    }
}