import {
  FlatList,
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

const Kid = () => {
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

  // menu details pathName: "/(root)/(women)/women",
  const [isMainPageData] = useState([
    {
      id: 1,
      title: "Kid's Education",
      sectionIcon: icons.KidOne,
      pathName: "/(root)/(kid)/kideducation",
    },
    {
      id: 2,
      title: "Book's",
      sectionIcon: icons.KidTwo,
      pathName: "/(root)/(kid)/books",
    },
    {
      id: 3,
      title: "List of Kid's",
      sectionIcon: icons.KidThree,
      pathName: "/(root)/(kid)/listkids",
    },
    {
      id: 4,
      title: "Offline List of Kid's",
      sectionIcon: icons.KidFour,
      pathName: "/(root)/(kid)/offlinelistkids",
    },
    {
      id: 5,
      title: "All Offline List of Kid's",
      sectionIcon: icons.KidFive,
      pathName: "/(root)/(kid)/offlinealllistkids",
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

export default Kid;

const styles = StyleSheet.create({});
