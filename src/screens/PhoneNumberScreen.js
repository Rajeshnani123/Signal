import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Iconh, { Icons } from "../../assets/Icons";
import { ButtonComp } from "../components/ButtonComp";

const { width, height } = Dimensions.get("screen");
export const PhoneNumberScreen = ({ navigation }) => {
  const [country, setCountry] = React.useState("INDIA");
  const [phone, setPhone] = React.useState("");
  const [enabled, setEnabled] = React.useState(false);
  React.useEffect(() => {
    if (phone.length > 15) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [phone]);

  const register = () => {
    navigation.navigate("OtpScreen", { phone });
  };

  return (
    <SafeAreaView style={{ paddingTop: 0.1 * height, alignItems: "center" }}>
      <Text
        style={{
          alignSelf: "auto",
          fontSize: 28,
          fontWeight: "320",
          paddingHorizontal: 0.08 * width,
        }}
      >
        Enter your phone number to get started
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 17,
          fontWeight: "450",
          padding: 0.08 * width,
        }}
      >
        You will receive a verification code. Carrier rates may apply
      </Text>
      <View style={styleSheet.inputViewContainer}>
        <TextInput
          value={country}
          onChangeText={(text) => setCountry(text)}
          placeholder="India"
          style={[styleSheet.inputContainer]}
        />
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <Iconh
            name={"caretdown"}
            type={Icons.AntDesign}
            size={12}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styleSheet.inputViewContainer}>
        <TextInput
          value={phone}
          onChangeText={(text) => setPhone(text)}
          onPressIn={() => setPhone("+91   ")}
          placeholder="PhoneNumber"
          keyboardType={"number-pad"}
          style={[styleSheet.inputContainer]}
        />
      </View>

      <ButtonComp
        title={"Next"}
        onPress={() => register()}
        disabled={!enabled}
      />
    </SafeAreaView>
  );
};

const styleSheet = new StyleSheet.create({
  inputContainer: {
    width: 0.7 * width,
    alignSelf: "center",
    marginLeft: 0.07 * width,
  },
  inputViewContainer: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
    width: 0.85 * width,
    height: 0.06 * height,
    marginTop: 0.01 * height,
    marginBottom: 0.01 * height,
  },
});
