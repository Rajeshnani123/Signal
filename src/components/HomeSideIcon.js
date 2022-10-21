import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import Iconh, { Icons } from "../../assets/Icons";

const { width, height } = Dimensions.get("screen");
export const HomeSideIcon = ({ onPress, name }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        shadowOpacity: 0.8,
        elevation: 10,
        shadowColor: "black",
        alignItems: "center",
        width: 0.17 * width,
        borderRadius: 0.05 * width,
        height: 0.08 * height,
        marginBottom: 0.02 * height,
      }}
      onPress={onPress}
    >
      <Iconh
        name={name}
        type={Icons.Feather}
        size={30}
        color={"black"}
        style={{ marginTop: 0.02 * height }}
      />
    </TouchableOpacity>
  );
};
