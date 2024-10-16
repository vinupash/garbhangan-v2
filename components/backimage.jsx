import { ImageBackground } from "react-native";
import { posters } from "../constants";

const BackgroudImage = ({ children }) => {
  return (
    <ImageBackground
      source={posters.park_element}
      resizeMode="cover"
      className="w-full h-full justify-between flex-col"
    >
      {children}
    </ImageBackground>
  );
};
export default BackgroudImage;
