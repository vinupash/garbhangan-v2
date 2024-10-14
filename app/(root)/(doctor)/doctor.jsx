import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  CopyRights,
  LottieWrapper,
  PageMenu,
  ScreenWrapper,
} from "../../../components";
import { Video, ResizeMode } from "expo-av";
import { hp, wp } from "../../../helpers/common";
import { icons, posters, videos } from "../../../constants";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
// import { router } from "expo-router";

const Doctor = () => {
  // video popup
  const [isPromoVideo, setPromoVideo] = useState(false);
  useEffect(() => {
    const handlePopupVideo = () => {
      setTimeout(() => {
        setPromoVideo(false);
      }, 7000);
    };
    handlePopupVideo();
  }, []);

  // menu details
  const [isMainPageData] = useState([
    {
      id: 1,
      title: "Doctor Visit",
      sectionIcon: icons.Doctor,
      pathName: "/(root)/(doctor)/doctorvisit",
    },
    {
      id: 2,
      title: "List of Doctor Visit",
      sectionIcon: icons.DocterTwo,
      pathName: "/(root)/(doctor)/listdoctorvisit",
    },
  ]);
  return (
    <ScreenWrapper>
      {isPromoVideo ? (
        <Video
          source={videos.WelcomeVideo}
          shouldPlay={true}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping={false}
          style={{
            width: wp(100),
            height: hp(100),
          }}
        />
      ) : (
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
              <Pressable
                className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
                style={{ width: hp(10), height: hp(10) }}
                onPress={() => router.back()}
              >
                <SvgXml xml={icons.Back} width={wp(2.5)} height={wp(2.5)} />
              </Pressable>
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
              className="flex-row items-center justify-end"
              style={{ width: hp(45), height: hp(12) }}
            >
              <Pressable
                className="rounded-full shadow-md shadow-neutral-400/70 bg-white justify-center items-center"
                style={{ width: hp(10), height: hp(10) }}
              >
                <SvgXml xml={icons.Logout} width={wp(2.5)} height={wp(2.5)} />
              </Pressable>
            </View>
          </View>
          <View className="justify-start items-center flex-row mx-4 space-x-5">
            {isMainPageData?.map((menudata) => {
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
        </ImageBackground>
      )}
    </ScreenWrapper>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
