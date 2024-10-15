import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CopyRights, LottieWrapper, ScreenWrapper } from "../../../components";
import { Video, ResizeMode } from "expo-av";
import { hp, wp } from "../../../helpers/common";
import { icons, posters, videos } from "../../../constants";
import { router } from "expo-router";
import CustomMenu from "../../../components/custommenu";
import { kidmenudata } from "../../../helpers/dummydata";

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
          <CustomMenu
            title={"Kid's"}
            icon={icons.WomenIcon}
            onPressNotification={() =>
              router.push("/(root)/notificationscreen")
            }
            onPressAddUser={() => router.push("/(root)/(kid)/addkid")}
            onPressStackChange={() => router.push("/(root)/(women)/women")}
            onPressLogout={() => router.back()}
          />
          <View className="justify-between items-center flex-row mx-4">
            <FlatList
              data={kidmenudata}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(item.pathName)}
                  style={{ width: wp(33), height: hp(60) }}
                >
                  <View
                    style={{ width: wp(31), height: hp(60) }}
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
