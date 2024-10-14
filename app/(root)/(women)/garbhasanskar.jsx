import { ImageBackground, Text } from "react-native";
import { ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";

const GarbhaSanskar = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <Text>GarbhaSanskar</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default GarbhaSanskar;
