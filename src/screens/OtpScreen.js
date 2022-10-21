import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get("screen");
export const OtpScreen = ({ navigation, route }) => {
  const [time, setTime] = React.useState(60);
  const dispatch = useDispatch();
  const firstRef = React.useRef(null);
  const secondRef = React.useRef(null);
  const thirdRef = React.useRef(null);
  const fourthRef = React.useRef(null);
  const fifthRef = React.useRef(null);
  const sixRef = React.useRef(null);

  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState("");
  const [third, setThird] = React.useState("");
  const [fourth, setFourth] = React.useState("");
  const [fifth, setFifth] = React.useState("");
  const [sixth, setSixth] = React.useState("");

  if (time > 0)
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);

  const confirmCode = (text) => {
    if (route.params.verificationId) {
      let code = first + second + third + fourth + fifth + text;
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((user) => {
          dispatch({ type: "USER_LOGIN", user });
          navigation.navigate("ProfileScreen");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: 0.08 * height, alignItems: "center" }}>
      <Text style={styleSheet.otpText}> Enter the code we sent to</Text>
      <Text style={styleSheet.otpText}>{route.params.phone}</Text>
      <View style={{ flexDirection: "row", marginTop: 0.03 * height }}>
        <TextInput
          autoFocus={true}
          ref={firstRef}
          maxLength={1}
          value={first}
          onChangeText={(text) => {
            setFirst(text);
            if (text.length > 0) secondRef.current.focus();
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
        <TextInput
          value={second}
          maxLength={1}
          ref={secondRef}
          onChangeText={(text) => {
            setSecond(text);
            if (text.length > 0) thirdRef.current.focus();
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace") {
              firstRef.current.focus();
            }
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
        <TextInput
          value={third}
          maxLength={1}
          ref={thirdRef}
          onChangeText={(text) => {
            setThird(text);
            if (text.length > 0) fourthRef.current.focus();
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace") {
              secondRef.current.focus();
            }
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
        <Text style={{ alignSelf: "center", fontSize: 35, fontWeight: "400" }}>
          {" "}
          -
        </Text>
        <TextInput
          value={fourth}
          ref={fourthRef}
          maxLength={1}
          onChangeText={(text) => {
            setFourth(text);
            if (text.length > 0) fifthRef.current.focus();
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace") {
              thirdRef.current.focus();
            }
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
        <TextInput
          value={fifth}
          maxLength={1}
          ref={fifthRef}
          onChangeText={(text) => {
            setFifth(text);
            if (text.length > 0) sixRef.current.focus();
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace") {
              fourthRef.current.focus();
            }
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
        <TextInput
          value={sixth}
          ref={sixRef}
          maxLength={1}
          onChangeText={(text) => {
            setSixth(text);
            confirmCode(text);
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace") {
              fifthRef.current.focus();
            }
          }}
          style={styleSheet.otpInput}
          keyboardType={"number-pad"}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 0.05 * width }}>
        <Text
          style={{
            width: 0.35 * width,
            marginRight: 0.2 * width,
            fontWeight: "500",
            color: time === 0 ? "blue" : "gray",
          }}
        >
          Call me instead (available in 0:{time})
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "blue", fontWeight: "500" }}>Wrong number</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styleSheet = new StyleSheet.create({
  otpText: {
    fontSize: 25,
    fontWeight: "400",
  },
  otpInput: {
    margin: 0.02 * width,
    borderWidth: 1,
    width: 0.07 * width,
    borderColor: "gray",
    textAlign: "center",
  },
});
