import { ImageBackground, Text, View } from "react-native";
import { CopyRights, ScreenWrapper } from "../../../components";
import { icons, posters } from "../../../constants";
import { router } from "expo-router";
import CustomMenu from "../../../components/custommenu";

const ListOfKids = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <CustomMenu
          title={"Kid's"}
          icon={icons.WomenIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(kid)/addkid")}
          onPressStackChange={() => router.push("/(root)/(women)/women")}
          onPressLogout={() => router.back()}
        />
        <Text>ListOfKids</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default ListOfKids;
