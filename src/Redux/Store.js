import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import { rootReducer } from "./RootReducer";

const reducer = (state, action) => {
  return rootReducer(state, action);
};

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk];

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware, logger))
);

export const persister = persistStore(store);
