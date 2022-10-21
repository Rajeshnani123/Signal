import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { UserReducer } from "./UserReducer";

const startUpConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["user", "userLogin", "firstName", "secondName"],
};
export const rootReducer = combineReducers({
  UserReducer: persistReducer(startUpConfig, UserReducer),
});
