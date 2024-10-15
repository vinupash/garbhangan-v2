import { ImageBackground, Text, View } from "react-native";
import { CopyRights, ScreenWrapper } from "../../../components";
import { icons, posters } from "../../../constants";
import CustomMenu from "../../../components/custommenu";

const AddWomen = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <CustomMenu
          title={"women's"}
          icon={icons.ChildIcon}
          onPressNotification={() => router.push("/(root)/notificationscreen")}
          onPressAddUser={() => router.push("/(root)/(women)/addwomen")}
          onPressStackChange={() => router.push("/(root)/(kid)/kid")}
          onPressLogout={() => router.back()}
        />
        <Text>AddWomen</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default AddWomen;
