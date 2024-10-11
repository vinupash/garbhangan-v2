import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
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

const Women = () => {
  // video popup
  const [promoVideo, setPromoVideo] = useState(false);
  useEffect(() => {
    const handlePopupVideo = () => {
      setTimeout(() => {
        setPromoVideo(false);
      }, 7000);
    };
    handlePopupVideo();
  }, []);

  // menu details pathName: "/(root)/(women)/women",
  const [isMainPageData] = useState([
    {
      id: 1,
      title: "Garbha Sanskar",
      sectionIcon: icons.Women,
      pathName: "/(root)/(women)/garbhasanskar",
    },
    {
      id: 2,
      title: "Food & Fitness",
      sectionIcon: icons.Yoga,
      pathName: "/(root)/(women)/foodfitness",
    },
    {
      id: 3,
      title: "Growth & Changes",
      sectionIcon: icons.Food,
      pathName: "/(root)/(women)/growthchanges",
    },
    {
      id: 4,
      title: "List of Women's",
      sectionIcon: icons.Pregnantwomen,
      pathName: "/(root)/(women)/listwomens",
    },
    {
      id: 5,
      title: "Offline List of Women's",
      sectionIcon: icons.WomenOne,
      pathName: "/(root)/(women)/offlinelistwomens",
    },
    {
      id: 6,
      title: "All Offline List of Women's",
      sectionIcon: icons.WomenTow,
      pathName: "/(root)/(women)/offlinealllistwomens",
    },
  ]);

  return (
    <ScreenWrapper>
      {promoVideo ? (
        <Video
          source={videos.WomenVideo}
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
          <View className="justify-between items-center flex-row mx-4">
            <FlatList
              data={isMainPageData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(item.pathName)}
                  style={{ width: wp(32), height: hp(60) }}
                >
                  <View
                    style={{ width: wp(30), height: hp(60) }}
                    className="rounded-2xl shadow-md shadow-neutral-400/70 bg-white flex-col justify-between"
                  >
                    <View className="flex-1 justify-center items-center space-x-4">
                      <LottieWrapper
                        icon={item.sectionIcon}
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
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item) => item?.id}
            />
          </View>
          <View className="mx-4 text-center justify-center items-center pb-5">
            <CopyRights />
          </View>
        </ImageBackground>
      )}
    </ScreenWrapper>
  );
};

export default Women;

const styles = StyleSheet.create({});
