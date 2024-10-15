import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { CopyRights, NoInternet, ScreenWrapper } from "../../../components";
import { icons, posters } from "../../../constants";
import CustomDoctorMenu from "../../../components/customdotormenu";
import { useInternetStatus } from "../../../hooks";

const ListOfDoctorVisit = () => {
  const { isConnected } = useInternetStatus();
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <CustomDoctorMenu
          title={"Doctor"}
          icon={icons.WomenIcon}
          iconKid={icons.ChildIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(kid)/kid")}
          onPressStackChange={() => router.push("/(root)/(women)/women")}
          onPressLogout={() => router.back()}
        />
        <View className="mx-4 flex-1">
          {!isConnected ? <NoInternet /> : <Text>connected</Text>}
        </View>
        {/* <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View> */}
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default ListOfDoctorVisit;

const styles = StyleSheet.create({});
