import { Text, View } from "react-native";
import { BackgroudImage, CopyRights, ScreenWrapper } from "../../../components";
import { icons } from "../../../constants";
import CustomMenu from "../../../components/custommenu";
import { router } from "expo-router";

const FoodFitness = () => {
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
        <Text>FoodFitness</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </BackgroudImage>
    </ScreenWrapper>
  );
};

export default FoodFitness;
