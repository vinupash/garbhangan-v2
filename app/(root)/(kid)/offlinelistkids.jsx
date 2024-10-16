import { Text, View } from "react-native";
import { BackgroudImage, CopyRights, ScreenWrapper } from "../../../components";
import { icons } from "../../../constants";
import { router } from "expo-router";
import CustomMenu from "../../../components/custommenu";

const OfflineListOfKids = () => {
  return (
    <ScreenWrapper>
      <BackgroudImage>
        <CustomMenu
          title={"Kid's"}
          icon={icons.WomenIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(kid)/addkid")}
          onPressStackChange={() => router.push("/(root)/(women)/women")}
          onPressLogout={() => router.back()}
        />
        <Text>OfflineListOfKids</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </BackgroudImage>
    </ScreenWrapper>
  );
};

export default OfflineListOfKids;
