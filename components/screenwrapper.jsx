import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, containerStyle }) => {
  return (
    <SafeAreaView className={`bg-white w-full h-full`} style={containerStyle}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
