import { View, Text } from "react-native";
import { icons } from "../constants";
import { hp, wp } from "../helpers/common";
import LottieWrapper from "./lottiewrapper";

const NoInternet = () => {
  return (
    <View className="justify-center items-center">
      <LottieWrapper
        icon={icons.NoConnectionone}
        autoPlay={true}
        loop={true}
        lottieStyle={{
          width: wp(50),
          height: hp(50),
        }}
        resizeMode={"contain"}
        speed={0.9}
      />
      <Text
        className="font-RobotoBold text-white"
        style={{ fontSize: wp(2.5) }}
      >
        Oops! No internet connections
      </Text>
    </View>
  );
};

export default NoInternet;
