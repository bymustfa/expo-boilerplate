import React, { useState } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { User, Eye, EyeOff } from "../components/icons";
import { colors } from "../theme";
import { Box, Button, Text } from "../components/base";
import { DarkButton, LoginInput } from "../components/elements";
import { connect } from "react-redux";
import { login } from "../redux/reducers/loginSlice";

let Toast =
  Platform.OS !== "web" ? require("react-native-simple-toast").default : null;

const LoginView = (props) => {
  const { setLogin } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLogin("123465789");
    // setShowPassword(false);
    // if (username.trim().length > 0) {
    //   if (password.trim().length > 0) {
    //     setTimeout(() => {
    //       setLoading(true);
    //       setLoading(true);
    //     }, 2500);
    //     Platform.OS !== "web"
    //       ? Toast.show("Login İşlemleri")
    //       : alert("Login İşlemleri");
    //
    //     // await fetch(process.env.API_URL + "user/login", {
    //     //     method: "POST",
    //     //     headers: myHeaders,
    //     //     body: JSON.stringify({
    //     //         username,
    //     //         password,
    //     //     }),
    //     //     redirect: "follow",
    //     // })
    //     //     .then((response) => response.json())
    //     //     .then(async (result) => {
    //     //         if (result.status) {
    //     //             dispatch({
    //     //                 type: "LOGIN",
    //     //                 payload: { isLogin: true, token: result.token },
    //     //             });
    //     //         } else {
    //     //             Platform.OS !== "web"
    //     //                 ? Toast.show(result.message)
    //     //                 : alert(result.message);
    //     //         }
    //     //         setLoading(false);
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error("error: ", error);
    //     //         Platform.OS !== "web"
    //     //             ? Toast.show("Hata: " + JSON.stringify(error))
    //     //             : alert("Hata: " + JSON.stringify(error));
    //     //         setLoading(false);
    //     //     });
    //   } else {
    //     Platform.OS !== "web"
    //       ? Toast.show("Şifre Giriniz")
    //       : alert("Şifre Giriniz");
    //   }
    // } else {
    //   Platform.OS !== "web"
    //     ? Toast.show("T.C.K. No Giriniz")
    //     : alert("T.C.K. No Giriniz");
    // }
  };

  return (
    <Box as={SafeAreaView} flex={1} alignItems="center" justifyContent="center">
      <Box p={3}>
        <Box alignItems="center">
          <Box
            borderColor={colors.gray.dark}
            borderWidth={4}
            borderRadius={50}
            size={100}
            alignItems="center"
            justifyContent="center"
          >
            <User color={colors.gray.dark} width={75} height={75} />
          </Box>
        </Box>

        <KeyboardAvoidingView behavior="position">
          <Box alignItems="center">
            <Text fontSize={32} fontWeight="bold">
              Hoş Geldiniz
            </Text>

            <Text fontSize={20} color={colors.gray.dark}>
              Giriş Yap
            </Text>
          </Box>

          <Box my={4} />

          <LoginInput
            label="T.C.K. No:"
            placeholder="T.C.K. No"
            value={username}
            onChangeText={(e) => {
              const numbers = e.replace(/[^0-9]/g, "");
              setUsername(numbers);
            }}
            icon={<User color={colors.black} />}
            maxLength={11}
            keyboardType="decimal-pad"
          />

          <Box mt={4} />

          <LoginInput
            label="Şifre:"
            placeholder="Şifre"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            icon={
              <Button onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff color={colors.black} />
                ) : (
                  <Eye color={colors.black} />
                )}
              </Button>
            }
          />

          <Box alignItems="flex-end" mt={2}>
            <Button>
              <Text fontWeight="bold">Şifremi Unuttum</Text>
            </Button>
          </Box>

          <Box mt={4}>
            <DarkButton p={3} onPress={() => !loading && handleLogin()}>
              <Text color={colors.white} fontWeight="bold">
                {loading ? "Lütfen Bekleyin..." : "Giriş Yap"}
              </Text>
            </DarkButton>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (val) => dispatch(login(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
