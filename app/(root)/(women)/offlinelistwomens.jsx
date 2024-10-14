import { ImageBackground, Text } from "react-native";
import { ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";

const OfflineListOfWomens = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <Text>OfflineListOfWomens</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default OfflineListOfWomens;
