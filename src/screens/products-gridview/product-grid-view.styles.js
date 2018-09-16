import { CommonStyles } from "../../common/styles";
import {scale} from '../../helpers/size-fixer.helper'
import { colors } from "../../common/colors";
export const Styles = {
    tabHeading: [CommonStyles.text , {
        fontSize: scale(14),
    }],
    tabBody: {
        backgroundColor: colors.background
    }
}