import { InitialScreen } from "./src/screens/InitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhoneNumberScreen } from "./src/screens/PhoneNumberScreen";
import { OtpScreen } from "./src/screens/OtpScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { CreatePinScreen } from "./src/screens/createPinScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { Provider } from "react-redux";
import { persister, store } from "./src/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { CameraScreen } from "./src/components/CameraScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"onBoardingScreen"} component={InitialScreen} />
            <Stack.Screen name={"PhoneNumber"} component={PhoneNumberScreen} />
            <Stack.Screen name={"OtpScreen"} component={OtpScreen} />
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
            <Stack.Screen name={"createPin"} component={CreatePinScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name={"CameraScreen"} component={CameraScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
