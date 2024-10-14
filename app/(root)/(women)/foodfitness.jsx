import { ImageBackground, Text } from "react-native";
import { ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";

const FoodFitness = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <Text>FoodFitness</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default FoodFitness;
