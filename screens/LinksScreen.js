import { Image, StyleSheet, View, KeyboardAvoidingView, Platform,StatusBar} from "react-native";
import React, { useState,useContext } from 'react';
import imageLogo from "../assets/images/icon.png";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import {Context} from "../context/CouponContext"
const strings = {
  LOGIN: "Log In",
  WELCOME_TO_LOGIN: "Welcome to the login screen!",
  EMAIL_PLACEHOLDER: "Username",
  PASSWORD_PLACEHOLDER: "Password"
};
export default LoginScreen = () => {
  const {signIn} = useContext(Context)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmailChange = (email) => {
    setEmail(email)
  };

  const handlePasswordChange = (password) => {
    setPassword(password)
  };

  const handleLoginPress = () => {
    console.log("Login button pressed");
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder={strings.EMAIL_PLACEHOLDER}
          keyboardType='default'
        />
        <FormTextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={strings.PASSWORD_PLACEHOLDER}
          secureTextEntry
          keyboardType='default'
        />
        <Button label={strings.LOGIN} onPress={()=>signIn(email)} />
      </View>
    </KeyboardAvoidingView>
  );
}

const colors = {
  BLACK: "#000",
  WHITE: "#FFF",
  DODGER_BLUE: "#428AF8",
  SILVER: "#BEBEBE",
  TORCH_RED: "#F8262F",
  MISCHKA: "#E5E4E6"
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});