import { Text } from "react-native";
import { ScreenWrapper } from "../../../components";
import { posters } from "../../../constants";

const ListOfWomens = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <Text>ListOfWomens</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default ListOfWomens;
