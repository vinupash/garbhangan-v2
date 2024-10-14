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
// import { router } from "expo-router";

const ListOfDoctorVisit = () => {
  // video popup
  const [promoVideo, setPromoVideo] = useState(false);
  useEffect(() => {
    handlePopupVideo();
  }, []);
  const handlePopupVideo = () => {
    setTimeout(() => {
      setPromoVideo(false);
    }, 7000);
  };

  // menu details
  const [isMainPageData] = useState([
    {
      id: 1,
      title: "Women's",
      sectionIcon: icons.Women,
      pathName: "/(root)/(women)/women",
    },
    {
      id: 2,
      title: "Kid's",
      sectionIcon: icons.Kid,
      pathName: "/(root)/(kid)/kid",
    },
    {
      id: 3,
      title: "Doctor",
      sectionIcon: icons.Doctor,
      pathName: "/(root)/(doctor)/doctor",
    },
  ]);
  return (
    <ScreenWrapper>
      {promoVideo ? (
        <Video
          source={videos.KidVideo}
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
          <View className="justify-between items-center flex-row mx-4"></View>
          <View className="mx-4 text-center justify-center items-center pb-5">
            <CopyRights />
          </View>
        </ImageBackground>
      )}
    </ScreenWrapper>
  );
};

export default ListOfDoctorVisit;

const styles = StyleSheet.create({});
