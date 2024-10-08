import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Pressable,
} from "react-native";
import { SvgXml } from "react-native-svg";

const CustomInput = ({
  label,
  labelStyle,
  icon,
  containerStyle,
  secureTextEntry = false,
  inputStyle,
  iconWidth,
  iconHeight,
  inputStyleWrapper,
  buttonIcon,
  onPress,
  iconBtnWidth,
  iconBtnHeight,
  buttonIconSec,
  placeholder,
  placeholderTextColor,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="mx-4 space-y-2">
          <Text className={`text-lg font-RobotoMedium ${labelStyle} pl-5`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 px-5 ${containerStyle}`}
          >
            {icon && (
              <SvgXml xml={icon} width={iconWidth} height={iconHeight} />
            )}

            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              style={inputStyleWrapper}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              {...props}
            />

            {buttonIcon && (
              <Pressable onPress={onPress}>
                <SvgXml
                  xml={!secureTextEntry ? buttonIconSec : buttonIcon}
                  width={iconBtnWidth}
                  height={iconBtnHeight}
                />
              </Pressable>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default CustomInput;
