import { Video, ResizeMode } from "expo-av";
import { hp, wp } from "../helpers/common";
const PromoVideoWrapper = ({ videosPath }) => {
  return (
    <Video
      source={videosPath}
      shouldPlay={true}
      useNativeControls={false}
      resizeMode={ResizeMode.COVER}
      isLooping={false}
      style={{
        width: wp(100),
        height: hp(100),
      }}
    />
  );
};

export default PromoVideoWrapper;
