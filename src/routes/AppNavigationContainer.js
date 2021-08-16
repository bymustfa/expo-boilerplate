import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// redux
import { connect } from "react-redux";

import LoginVew from "../views/LoginVew";
import HomeView from "../views/HomeView";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginVew} />
    </Stack.Navigator>
  );
};

const AppNavigationContainer = (props) => {
  const { login } = props;
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(login.isLogin);
  }, [login.isLogin]);

  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.loginSlice,
  };
};

export default connect(mapStateToProps)(AppNavigationContainer);
