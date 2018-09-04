import { CommonStyles } from "../../common/styles";
import { scale, verticalScale } from "../../helpers/size-fixer.helper";
import { colors } from "../../common/colors";

export const productDetailsStyle = {
  title: [
    CommonStyles.text,
    {
      fontSize: scale(15),
      writingDirection: "rtl"
    }
  ],
  price: [
    CommonStyles.text,
    {
      textAlign: "center",
      flexDirection: "column",
      flex: 2,
      fontSize: scale(18)
    }
  ],
  content: [
    CommonStyles.text,
    {
      textAlign: "right",
      writingDirection: "rtl",
      fontSize: scale(10),
      padding: scale(10)
    }
  ],
  createDate: {
    textAlign: "left",
    fontSize: scale(12),
    color: "#ccc",
    flexDirection: "column",
    flex: 2
  },
  image: {
    width: "100%",
    height: verticalScale(250)
  },
  addToCardButton: {
    container: {
      backgroundColor: colors.secoundary,
      width: "60%",
      margin: scale(5),
      padding: scale(20),
      alignSelf: "center"
    },
    text: [
      CommonStyles.text,
      {
        color: "black",
        fontSize: scale(16),
        fontFamily: "IRANYekan"
      }
    ]
  }
};
