import React from "react";
import { SafeAreaView, Text, TextInput, Dimensions } from "react-native";
import { Constants } from "../Constants";

const { width, height } = Dimensions.get("screen");

export const CreatePinScreen = () => {
  return (
    <SafeAreaView style={{ paddingTop: 0.1 * height, alignItems: "center" }}>
      <Text style={{ fontSize: 0.06 * width }}>Create your PIN</Text>
      <Text style={{ padding: 0.03 * width, textAlign: "justify" }}>
        {Constants.pinText}
      </Text>
      <TextInput
        placeholder="PIN"
        style={{
          width: 0.4 * width,
          height: 0.1 * width,
          borderBottomColor: "blue",
          borderBottomWidth: 2,
          textAlign: "center",
        }}
        secureTextEntry={true}
        maxLength={4}
        spellCheck={false}
        keyboardType={"number-pad"}
      />
      <Text style={{ paddingTop: 0.03 * width }}>
        PIN must be at least 4-digits
      </Text>
    </SafeAreaView>
  );
};
