import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ButtonComp } from "../components/ButtonComp";
import { useDispatch } from "react-redux";

const { height, width } = Dimensions.get("screen");
export const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const dispatch = useDispatch();
  const goNext = () => {
    dispatch({ type: "USER_DATA", firstName, secondName });
    navigation.navigate("createPin");
  };

  return (
    <SafeAreaView style={{ paddingTop: 0.06 * height }}>
      <Text style={styleSheet.ProfileMainText}> Set up your Profile</Text>
      <Text style={styleSheet.ProfileSideText}>
        Profiles are visible to people you message,contacts and groups.
        <Text style={styleSheet.ProfileLearnMore}> Learn More</Text>
      </Text>
      <View
        style={{
          alignSelf: "center",
          borderRadius: 100,
          height: 0.09 * height,
          width: 0.21 * width,
          borderWidth: 2,
          borderColor: "gray",
        }}
      >
        <TouchableOpacity styles={{}}>
          <Image
            source={require("../../assets/appImages/waterFall-min.jpg")}
            style={{
              width: 0.19 * width,
              height: 0.085 * height,
              alignSelf: "center",
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>{firstName}</Text>
      </View>

      <View style={styleSheet.inputViewContainer}>
        <TextInput
          value={firstName}
          style={styleSheet.inputContainer}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First name(required)"
        />
      </View>
      <View style={styleSheet.inputViewContainer}>
        <TextInput
          value={secondName}
          style={styleSheet.inputContainer}
          onChangeText={(text) => setSecondName(text)}
          placeholder="Second name(Optional)"
        />
      </View>
      <ButtonComp
        title={"Next"}
        onPress={goNext}
        disabled={firstName.length <= 0}
      />
    </SafeAreaView>
  );
};

const styleSheet = new StyleSheet.create({
  ProfileMainText: {
    fontWeight: "500",
    fontSize: 0.06 * width,
  },
  ProfileSideText: {
    padding: 0.01 * height,
    fontSize: 0.035 * width,
  },
  ProfileLearnMore: {
    color: "blue",
    fontWeight: "500",
  },
  inputContainer: {
    width: 0.7 * width,
    marginLeft: 0.07 * width,
    paddingTop: 0.01 * height,
  },
  inputViewContainer: {
    borderColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#A9b8b8",
    alignSelf: "center",
    width: 0.85 * width,
    height: 0.06 * height,
    marginTop: 0.01 * height,
    marginBottom: 0.01 * height,
  },
});
