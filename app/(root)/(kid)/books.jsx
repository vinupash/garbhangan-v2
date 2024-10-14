import { ImageBackground, Text, View } from "react-native";
import { CopyRights, ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";
import CustomMenuKid from "../../../components/custommenukid";
// import CustomMenu from "../../../components/custommenu";

const Books = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <CustomMenuKid />
        <Text>Books</Text>
        <View className="mx-4 text-center justify-center items-center pb-5">
          <CopyRights />
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default Books;
