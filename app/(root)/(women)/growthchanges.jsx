import { Text, View } from "react-native";
import { ScreenWrapper, CopyRights, BackgroudImage } from "../../../components";
import { icons } from "../../../constants";
import CustomMenu from "../../../components/custommenu";

const GrowthChanges = () => {
  return (
    <ScreenWrapper>
      <BackgroudImage>
        <CustomMenu
          title={"women's"}
          icon={icons.ChildIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(women)/addwomen")}
          onPressStackChange={() => router.push("/(root)/(kid)/kid")}
          onPressLogout={() => router.back()}
        />
        <Text>GrowthChanges</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </BackgroudImage>
    </ScreenWrapper>
  );
};

export default GrowthChanges;
