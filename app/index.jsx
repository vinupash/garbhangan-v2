import { View, Text, ImageBackground, Pressable } from "react-native";
import { LottieWrapper, ScreenWrapper } from "../components";
import { router } from "expo-router";
import { hp, wp } from "../helpers/common";
import { icons, posters } from "../constants";

const App = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.backgroundimage}
        resizeMode="cover"
        className="w-full h-full"
      >
        <View className="flex flex-row mx-4 justify-between items-center">
          <LottieWrapper
            icon={icons.Logoicons}
            autoPlay={true}
            loop={true}
            lottieStyle={{
              width: wp(12),
              height: hp(15),
            }}
            resizeMode={"contain"}
            speed={0.03}
          />

          <LottieWrapper
            icon={icons.Logo}
            autoPlay={true}
            loop={true}
            lottieStyle={{
              width: wp(27),
              height: hp(22),
            }}
            resizeMode={"contain"}
            speed={0.03}
          />

          <View style={{ width: wp(12), height: hp(15) }}></View>
        </View>

        <View className="absolute bottom-20 right-60 justify-center items-center space-y-5">
          <Pressable
            onPress={() => router.push("/(auth)/sign-in")}
            className="shadow-md shadow-neutral-400/70 rounded-full"
            style={{
              paddingVertical: 15,
              paddingHorizontal: 40,
              backgroundColor: "#1e40af",
            }}
          >
            <Text
              className="text-center font-semibold text-white"
              style={{ fontSize: wp(1.4) }}
            >
              Log In
            </Text>
          </Pressable>

          <View className="flex flex-row space-x-2 items-center justify-center">
            <Text className="font-RobotoBold" style={{ fontSize: wp(1.4) }}>
              MADE WITH
            </Text>
            <View>
              <LottieWrapper
                icon={icons.Hart}
                lottieStyle={{ width: wp(2), height: wp(2) }}
                autoPlay={true}
                loop={true}
                resizeMode={"contain"}
                speed={0.03}
              />
            </View>
            <Text className="font-RobotoBold" style={{ fontSize: wp(1.4) }}>
              BY REVOLT CREATIONS
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default App;
