import { Text, View, ImageBackground } from "react-native";
import { ScreenWrapper } from "../../components";
import { posters } from "../../constants";
import CustomMainMenu from "../../components/custommainmenu";

const NotificationScreen = () => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={posters.park_element}
        resizeMode="cover"
        className="w-full h-full justify-between flex-col"
      >
        <CustomMainMenu notification={false} />
        <Text>NotificationScreen</Text>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default NotificationScreen;
