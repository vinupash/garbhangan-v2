import { StyleSheet, View } from "react-native";
import React from "react";
import { BackgroudImage, NoInternet, ScreenWrapper } from "../../../components";
import { icons } from "../../../constants";
import CustomDoctorMenu from "../../../components/customdotormenu";
import { useInternetStatus } from "../../../hooks";

const ListOfDoctorVisit = () => {
  const { isConnected } = useInternetStatus();
  return (
    <ScreenWrapper>
      <BackgroudImage>
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
          {/* {!isConnected ? <NoInternet /> : <Text>connected</Text>} */}

          <View></View>
        </View>
        {/* <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View> */}
      </BackgroudImage>
    </ScreenWrapper>
  );
};

export default ListOfDoctorVisit;

const styles = StyleSheet.create({});
