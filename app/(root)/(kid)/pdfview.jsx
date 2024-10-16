import { Text } from "react-native";
import { ScreenWrapper } from "../../../components";

const PdfView = () => {
  return (
    <ScreenWrapper>
      {/* <Pdf
        source={source}
        onError={(error) => {
          console.log("Error while loading PDF: ", error);
        }}
        trustAllCerts={false}
        style={{ flex: 1, width: "100%" }}
      /> */}

      <Text>PdfView</Text>
    </ScreenWrapper>
  );
};

export default PdfView;
