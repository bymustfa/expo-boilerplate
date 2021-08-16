import React from "react";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import AppNavigationContainer from "./src/routes/AppNavigationContainer";

export default App = () => (
  <Provider store={store}>
    <AppNavigationContainer />
  </Provider>
);
