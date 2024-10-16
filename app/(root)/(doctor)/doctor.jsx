import { Pressable, Text, View } from "react-native";
import React from "react";
import {
  BackgroudImage,
  CopyRights,
  LottieWrapper,
  PromoVideoWrapper,
  ScreenWrapper,
} from "../../../components";
import { hp, wp } from "../../../helpers/common";
import { icons, posters, videos } from "../../../constants";
import { router } from "expo-router";
import CustomDoctorMenu from "../../../components/customdotormenu";
import { doctormenudata } from "../../../helpers/dummydata";
import { usePromoVideo } from "../../../hooks";

const Doctor = () => {
  const { promoVideo } = usePromoVideo(7000);

  return (
    <ScreenWrapper>
      {promoVideo ? (
        <PromoVideoWrapper videosPath={videos.DoctorVideo} />
      ) : (
        <BackgroudImage
          source={posters.park_element}
          resizeMode="cover"
          className="w-full h-full justify-between flex-col"
        >
          <CustomDoctorMenu
            title={"Kid's"}
            icon={icons.WomenIcon}
            iconKid={icons.ChildIcon}
            onPressNotification={() =>
              router.push("/(root)/notificationscreen")
            }
            onPressAddUser={() => router.push("/(root)/(kid)/kid")}
            onPressStackChange={() => router.push("/(root)/(women)/women")}
            onPressLogout={() => router.back()}
          />
          <View className="justify-start items-center flex-row mx-4 space-x-5">
            {doctormenudata?.map((menudata) => {
              return (
                <Pressable
                  key={menudata.id}
                  onPress={() => router.push(menudata.pathName)}
                  style={{ width: "33%", height: hp(60) }}
                  className="rounded-2xl shadow-md shadow-neutral-400/70 bg-white flex-col justify-between"
                >
                  <View className="flex-1 justify-center items-center">
                    <LottieWrapper
                      icon={menudata.sectionIcon}
                      autoPlay={true}
                      loop={true}
                      lottieStyle={{
                        width: wp(31),
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
      )}
    </ScreenWrapper>
  );
};

export default Doctor;
