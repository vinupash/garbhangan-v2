import { ImageBackground, Text, Pressable, View } from "react-native";
import { CopyRights, LottieWrapper, ScreenWrapper } from "../../../components";
import { icons, posters } from "../../../constants";
import { hp, wp } from "../../../helpers/common";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";

const OfflineAllListOfKids = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <View
          className="mx-4 flex-row justify-between items-center"
          style={{ height: hp(20) }}
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
                Kid's
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
              onPress={() => router.replace("/(root)/notificationscreen")}
            >
              <SvgXml xml={icons.BellIcon} width={wp(2.5)} height={wp(2.5)} />
            </Pressable>
            <Pressable
              className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
              style={{ width: hp(10), height: hp(10) }}
            >
              <SvgXml xml={icons.AddUser} width={wp(2.5)} height={wp(2.5)} />
            </Pressable>
            <Pressable
              className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
              style={{ width: hp(10), height: hp(10) }}
              onPress={() => router.replace("/(root)/(women)/women")}
            >
              <SvgXml xml={icons.WomenIcon} width={wp(2.5)} height={wp(2.5)} />
            </Pressable>
            <Pressable
              className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
              style={{ width: hp(10), height: hp(10) }}
            >
              <SvgXml xml={icons.Logout} width={wp(2.5)} height={wp(2.5)} />
            </Pressable>
          </View>
        </View>
        <Text>OfflineAllListOfKids</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default OfflineAllListOfKids;
