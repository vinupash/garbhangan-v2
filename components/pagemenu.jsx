import { router } from "expo-router";
import { Text, Pressable, View } from "react-native";
import { hp, wp } from "../helpers/common";
import LottieWrapper from "./lottiewrapper";

const PageMenu = ({ key, icon, title, onPress }) => {
  return (
    <Pressable
      key={key}
      onPress={onPress}
      style={{ width: "32%", height: hp(60) }}
      className="rounded-2xl shadow-md shadow-neutral-400/70 bg-white flex-col justify-between"
    >
      <View className="flex-1 justify-center items-center">
        <LottieWrapper
          icon={icon}
          autoPlay={true}
          loop={true}
          lottieStyle={{
            width: wp(30),
            height: hp(50),
          }}
          resizeMode={"contain"}
        />
      </View>
      <View className="justify-center items-center py-4 bg-blue-900 rounded-b-2xl">
        <Text
          className="font-RobotoBold text-white"
          style={{ fontSize: wp(1.6) }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};
export default PageMenu;
