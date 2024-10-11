import { Text, View } from "react-native";
import { wp } from "../helpers/common";
import LottieWrapper from "./lottiewrapper";
import { icons } from "../constants";

const CopyRights = () => {
  return (
    <View className="flex flex-row space-x-2 items-center justify-center">
      <Text
        className="font-RobotoBold text-white"
        style={{ fontSize: wp(1.4) }}
      >
        MADE WITH
      </Text>
      <View>
        <LottieWrapper
          icon={icons.Hart}
          lottieStyle={{ width: wp(2), height: wp(2) }}
          autoPlay={true}
          loop={true}
          resizeMode={"contain"}
          speed={0.03}
        />
      </View>
      <Text
        className="font-RobotoBold text-white"
        style={{ fontSize: wp(1.4) }}
      >
        BY REVOLT CREATIONS
      </Text>
    </View>
  );
};

export default CopyRights;
