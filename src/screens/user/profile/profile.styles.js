import {
  verticalScale,
  moderateScale,
  scale
} from "../../../helpers/size-fixer.helper";
import { CommonStyles } from "../../../common/styles";

export const ProfilePageStyles = {
  container: {
    justifyContent: "center"
  },
  profilePicture: {
    alignSelf: "center",
    marginTop: verticalScale(10),
    width: moderateScale(110),
    height: verticalScale(120),
    borderRadius: 1000
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  card: {
    width: "85%",
    alignSelf: "center",
    padding: scale(20)
  },
  button: {
    alignSelf: "center",
    marginTop: verticalScale(30)
  }
};
