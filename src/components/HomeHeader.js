import React from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import Iconh, { Icons } from "../../assets/Icons";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");
export const HomeHeader = () => {
  const { firstName, secondName } = useSelector((state) => state.UserReducer);
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          borderRadius: 0.1 * height,
          height: 0.04 * height,
          width: 0.085 * width,
          alignItems: "center",
          marginLeft: 0.05 * width,
          marginRight: 0.05 * width,
        }}
      >
        <Text style={{ paddingTop: 0.009 * height, color: "white" }}>
          {firstName[0]}
          {secondName && secondName[0]}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 0.06 * width,
          marginRight: 0.05 * width,
        }}
      >
        Signal
      </Text>
      <TouchableOpacity>
        <Iconh
          name="search1"
          type={Icons.AntDesign}
          size={25}
          color="black"
          style={{
            marginLeft: 0.41 * width,
            marginRight: 0.03 * width,
            marginTop: 0.015 * width,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Iconh
          name={"more-vertical"}
          type={Icons.Feather}
          size={25}
          style={{ marginTop: 0.015 * width }}
          color={"black"}
        />
      </TouchableOpacity>
    </View>
  );
};
