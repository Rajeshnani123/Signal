import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Iconh, { Icons } from "../../assets/Icons";
const { width, height } = Dimensions.get("screen");
export const BorderInput = ({
  placeholder,
  value,
  setValue,
  icon,
  iconName,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "grey",
        borderWidth: 1,
        width: 0.85 * width,
        height: 0.06 * height,
      }}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        style={[styleSheet.inputContainer, { marginLeft: 0.07 * width }]}
      />
      {icon && (
        <Iconh
          name={iconName}
          type={Icons.AntDesign}
          size={12}
          color={"black"}
          style={{
            position: "absolute",
            alignSelf: "center",
            paddingLeft: 0.75 * width,
          }}
        />
      )}
    </View>
  );
};
