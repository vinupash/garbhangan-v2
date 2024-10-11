import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Platform,
} from "react-native";
import { CustomInput, LottieWrapper, ScreenWrapper } from "../../components";
import { router } from "expo-router";
import { hp, wp } from "../../helpers/common";
import { icons, posters } from "../../constants";
import { useState } from "react";

const Signin = () => {
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

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

          {/* <Text onPress={() => router.push("/(auth)/sign-in")} className="text-center">this is app page</Text> */}

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

        <View className="flex justify-center items-center">
          <View
            style={{ width: wp(60) }}
            className="flex justify-center items-center space-y-4"
          >
            <Text
              className="text-blue-900 font-RobotoBold"
              style={{ fontSize: hp(4) }}
            >
              User Login
            </Text>
            <View className="w-full space-y-5">
              <View>
                <CustomInput
                  label={"User Id"}
                  icon={icons.User}
                  iconWidth={hp(4)}
                  iconHeight={hp(4)}
                  inputStyleWrapper={{ fontSize: hp(2.5) }}
                  iconBtnWidth={hp(4)}
                  iconBtnHeight={hp(4)}
                  placeholder={"Enter user id"}
                  placeholderTextColor={"#727c95"}
                />
              </View>

              <View>
                <CustomInput
                  label={"Password"}
                  icon={icons.Lock}
                  iconWidth={hp(4)}
                  iconHeight={hp(4)}
                  inputStyleWrapper={{ fontSize: hp(2.5) }}
                  buttonIcon={icons.Eye}
                  iconBtnWidth={hp(4)}
                  iconBtnHeight={hp(4)}
                  onPress={() => setSecureText(!secureText)}
                  secureTextEntry={secureText}
                  buttonIconSec={icons.Eyeopen}
                  placeholder={"Enter password"}
                  placeholderTextColor={"#727c95"}
                />
              </View>
              <View className="justify-center items-center">
                {!loading ? (
                  <Pressable
                    className="shadow-md shadow-neutral-400/70 rounded-full"
                    onPress={() => router.push("/(root)/mainscreen")}
                    style={{
                      width: 200,
                      paddingVertical: 15,
                      backgroundColor: "#1e40af",
                    }}
                  >
                    <Text
                      className="text-center font-semibold text-white"
                      style={{ fontSize: wp(1.4) }}
                    >
                      Submit
                    </Text>
                  </Pressable>
                ) : (
                  <View
                    className="shadow-md shadow-neutral-400/70 rounded-full"
                    style={{
                      width: 200,
                      paddingVertical: 20,
                      backgroundColor: "#1e40af",
                    }}
                  >
                    <ActivityIndicator size={"small"} color={"#ffffff"} />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>

        <View className="absolute bottom-10 right-10 justify-center items-center space-y-5">
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

export default Signin;
