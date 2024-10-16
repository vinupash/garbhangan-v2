import { Text, View, Pressable } from "react-native";
import {
  BackgroudImage,
  CopyRights,
  LottieWrapper,
  ScreenWrapper,
} from "../../../components";
import { icons } from "../../../constants";
import { router } from "expo-router";
import CustomMenu from "../../../components/custommenu";
import { kideducationdata, mainmenudata } from "../../../helpers/dummydata";
import { hp, wp } from "../../../helpers/common";

const KidEducation = () => {
  return (
    <ScreenWrapper>
      <BackgroudImage>
        <CustomMenu
          title={"Kid's"}
          icon={icons.WomenIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(kid)/addkid")}
          onPressStackChange={() => router.push("/(root)/(women)/women")}
          onPressLogout={() => router.back()}
        />
        <View className="justify-between items-center flex-row mx-4">
          {kideducationdata?.map((menudata) => {
            return (
              <Pressable
                key={menudata.id}
                onPress={() => router.push(menudata.pathName)}
                style={{ width: "32%", height: hp(60) }}
                className="rounded-2xl shadow-md shadow-neutral-400/70 bg-white flex-col justify-between"
              >
                <View className="flex-1 justify-center items-center">
                  <LottieWrapper
                    icon={menudata.sectionIcon}
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
                    {menudata.title}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </BackgroudImage>
    </ScreenWrapper>
  );
};

export default KidEducation;
