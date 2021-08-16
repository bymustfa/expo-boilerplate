import React from "react";
import { Platform } from "react-native";
import { Box, Text, Button } from "../components/base";
import { connect } from "react-redux";
import { logout } from "../redux/reducers/loginSlice";

let Toast =
  Platform.OS !== "web" ? require("react-native-simple-toast").default : null;

const HomeView = (props) => {
  console.log("Home Props: ", props);
  const { setLogout } = props;
  return (
    <>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text>HOME PAGE</Text>
        <Button onPress={() => setLogout()}>
          <Text>Çıkış</Text>
        </Button>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogout: (val) => dispatch(logout(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
