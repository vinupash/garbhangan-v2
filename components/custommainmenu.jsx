import { ImageBackground, Text, Pressable, View } from "react-native";
import { LottieWrapper, ScreenWrapper } from "../components";
import { icons, posters } from "../constants";
import { hp, wp } from "../helpers/common";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";

const CustomMainMenu = ({ notification = true, ...props }) => {
  return (
    <View
      className="mx-4 flex-row justify-between items-center"
      style={{ height: hp(20) }}
    >
      <View className="" style={{ width: hp(45), height: hp(12) }}>
        <LottieWrapper
          icon={icons.Logoicons}
          autoPlay={true}
          loop={true}
          lottieStyle={{
            width: wp(5),
            height: hp(12),
          }}
          resizeMode={"contain"}
          speed={0.03}
        />
      </View>
      <View>
        <LottieWrapper
          icon={icons.Logo}
          autoPlay={true}
          loop={true}
          lottieStyle={{
            width: wp(25),
            height: hp(22),
          }}
          resizeMode={"contain"}
          speed={0.03}
        />
      </View>
      <View
        className="flex-row items-center justify-end space-x-5"
        style={{ width: hp(45), height: hp(12) }}
      >
        {notification === true ? (
          <Pressable
            className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
            style={{ width: hp(10), height: hp(10) }}
            onPress={() => router.push("/(root)/notificationscreen")}
          >
            <SvgXml xml={icons.BellIcon} width={wp(2.5)} height={wp(2.5)} />
          </Pressable>
        ) : (
          <Pressable
            className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
            style={{ width: hp(10), height: hp(10) }}
            onPress={() => router.push("/(root)/mainscreen")}
          >
            <SvgXml xml={icons.HomeIcon} width={wp(2.5)} height={wp(2.5)} />
          </Pressable>
        )}

        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={() => router.push("/(root)/(women)/women")}
          // onPress={onPressStackChange}
        >
          <SvgXml xml={icons.WomenIcon} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={() => router.push("/(root)/(kid)/kid")}
          // onPress={onPressStackChange}
        >
          <SvgXml xml={icons.ChildIcon} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
        >
          <SvgXml xml={icons.Logout} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomMainMenu;
