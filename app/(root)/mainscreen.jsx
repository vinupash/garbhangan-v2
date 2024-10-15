import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CopyRights, LottieWrapper, ScreenWrapper } from "../../components";
import { Video, ResizeMode } from "expo-av";
import { hp, wp } from "../../helpers/common";
import { posters, videos } from "../../constants";
import { router } from "expo-router";
import CustomMainMenu from "../../components/custommainmenu";
import { mainmenudata } from "../../helpers/dummydata";

const Mainscreen = () => {
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
          <CustomMainMenu />
          <View className="justify-between items-center flex-row mx-4">
            {mainmenudata?.map((menudata) => {
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

export default Mainscreen;

const styles = StyleSheet.create({});
