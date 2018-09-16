import { scale } from "../../../../helpers/size-fixer.helper";
import { CommonStyles } from "../../../../common/styles";

export const DescriptionTabStyles = {
    container: {
        padding: scale(10),
    },
    title: [
      CommonStyles.text  ,
    CommonStyles.textRight
    ],
    content: [
        CommonStyles.text,
        CommonStyles.textRight,
        { direction: 'rtl',
        padding: scale(10),}
    ]
}