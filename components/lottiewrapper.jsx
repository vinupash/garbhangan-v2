import LottieView from 'lottie-react-native'

const LottieWrapper = ({
    icon,
    lottieStyle,
    resizeMode,
    speed,
    loop = false,
    autoPlay = false
}) => {
    return (
        <LottieView
            source={icon}
            autoPlay
            loop
            style={lottieStyle}
            resizeMode={resizeMode}
            speed={speed}
        />
    )
}

export default LottieWrapper;