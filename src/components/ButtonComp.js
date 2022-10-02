import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";

export const ButtonComp = ({ title, onPress, disabled }) => {
  const { width } = Dimensions.get("screen");
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "grey" : "blue",
        marginTop: 0.03 * width,
        paddingVertical: 10,
        alignSelf: "center",
        borderRadius: 20,
        height: 45,
        width: 0.85 * width,
      }}
    >
      <Text style={{ color: "white", alignSelf: "center", paddingTop: 5 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
