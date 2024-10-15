import { Text, ImageBackground, View } from "react-native";
import { ScreenWrapper, CopyRights } from "../../../components";
import { posters, icons } from "../../../constants";
import CustomMenu from "../../../components/custommenu";

const ListOfWomens = () => {
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
        <Text>ListOfWomens</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default ListOfWomens;
