import { InitialScreen } from "./src/screens/InitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhoneNumberScreen } from "./src/screens/PhoneNumberScreen";
import { OtpScreen } from "./src/screens/OtpScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { CreatePinScreen } from "./src/screens/createPinScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"homeScreen"} component={InitialScreen} />
        <Stack.Screen name={"PhoneNumber"} component={PhoneNumberScreen} />
        <Stack.Screen name={"OtpScreen"} component={OtpScreen} />
        <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
        <Stack.Screen name={"createPin"} component={CreatePinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
