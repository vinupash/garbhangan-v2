import { Text } from "react-native";
import { ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";

const OfflineAllListOfWomens = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <Text>OfflineAllListOfWomens</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default OfflineAllListOfWomens;
