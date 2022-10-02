import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { Dimensions } from "react-native";
import { ButtonComp } from "../components/ButtonComp";
import { Constants } from "../Constants";
export const InitialScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");

  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL("https://signal.org/legal/");

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL("https://signal.org/legal/");
    } else {
      Alert.alert(
        `Don't know how to open this URL: ${"https://www.google.com"}`
      );
    }
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/appImages/home.jpg")}
        style={{
          width: 1 * width,
          height: 0.5 * height,
          padding: 0,
        }}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {Constants.Privacytext}
      </Text>

      <Text
        style={{
          color: "grey",
          fontWeight: "500",
          alignSelf: "center",
          paddingTop: 0.1 * height,
          paddingBottom: 0.1 * width,
        }}
        onPress={() => handlePress()}
      >
        Terms & Privacy Policy
      </Text>
      <ButtonComp
        title={"Continue"}
        onPress={() => navigation.navigate("PhoneNumber")}
      />
      <Pressable>
        <Text
          style={{
            color: "blue",
            alignSelf: "center",
            fontWeight: "600",
            paddingTop: 0.06 * height,
            paddingBottom: 20,
          }}
        >
          Transfer or restore account
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
