import { Text, Pressable, View } from "react-native";
import { LottieWrapper } from "../components";
import { icons } from "../constants";
import { hp, wp } from "../helpers/common";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";

const CustomDoctorMenu = ({
  title,
  icon,
  iconKid,
  onPressNotification,
  onPressStackChange,
  onPressAddUser,
  onPressLogout,
  ...props
}) => {
  return (
    <View
      className="mx-4 flex-row justify-between items-center"
      style={{ height: hp(20) }}
      {...props}
    >
      <View className="" style={{ width: hp(45), height: hp(12) }}>
        <View className="space-x-5 items-center flex-row">
          <Pressable
            className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
            style={{ width: hp(10), height: hp(10) }}
            onPress={() => router.back()}
          >
            <SvgXml xml={icons.Back} width={wp(2.5)} height={wp(2.5)} />
          </Pressable>
          <Text
            className="text-white font-RobotoBold"
            style={{ fontSize: wp(3) }}
          >
            {title}
          </Text>
        </View>
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
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={onPressNotification}
        >
          <SvgXml xml={icons.BellIcon} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={onPressStackChange}
        >
          <SvgXml xml={icon} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={onPressAddUser}
        >
          <SvgXml xml={iconKid} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
        <Pressable
          className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
          style={{ width: hp(10), height: hp(10) }}
          onPress={onPressLogout}
        >
          <SvgXml xml={icons.Logout} width={wp(2.5)} height={wp(2.5)} />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDoctorMenu;
