import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { HomeHeader } from "../components/HomeHeader";
import Iconh, { Icons } from "../../assets/Icons";
import { HomeSideIcon } from "../components/HomeSideIcon";
import { db } from "../firebase";

const { height, width } = Dimensions.get("screen");
export const HomeScreen = ({ navigation }) => {
  const { firstName, secondName } = useSelector((state) => state.UserReducer);

  React.useEffect(() => {
    let user = firebase.auth().currentUser;
    if (user) {
      console.log(user, "userData");
    }
  }, []);

  const cameraNext = () => {
    navigation.navigate("CameraScreen");
  };

  React.useLayoutEffect(() => {}, []);

  return (
    <SafeAreaView style={{ paddingTop: 0.05 * height }}>
      <HomeHeader />
      <View style={{ alignItems: "center", margin: 0.1 * height }}>
        <Text>No chats yet.</Text>
        <Text>Get started by messaging a friend</Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          margin: 0.02 * height,
          paddingVertical: 0.35 * height,
        }}
      >
        <HomeSideIcon onPress={cameraNext} name={"camera"} />
        <HomeSideIcon onPress={() => null} name={"edit-2"} />
      </View>
    </SafeAreaView>
  );
};
