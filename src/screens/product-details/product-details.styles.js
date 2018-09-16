import { CommonStyles } from "../../common/styles";
import {
  scale,
  verticalScale,
  moderateScale
} from "../../helpers/size-fixer.helper";
import { colors } from "../../common/colors";

export const productDetailsStyle = {
  title: [
    CommonStyles.text,
    {
      fontSize: scale(15),
      writingDirection: "rtl",
      padding: scale(10)
    }
  ],
  price: [
    CommonStyles.text,
    {
      textAlign: "right",
      fontSize: scale(20),
      color: colors.price,
      marginRight: moderateScale(20)
    }
  ],
  content: [
    CommonStyles.text,
    {
      textAlign: "right",
      writingDirection: "rtl",
      fontSize: scale(13),
      padding: scale(10)
    }
  ],
  createDate: [CommonStyles.text , {
    textAlign: "left",
    fontSize: scale(12),
    color: "#ccc",
  }],
  image: {
    width: "100%",
    height: verticalScale(250)
  },
  addToCardButton: {
    width: "60%",
    margin: scale(5),
    padding: scale(20),
    alignSelf: "center"
  }
};
