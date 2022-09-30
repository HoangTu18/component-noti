import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";
import { registerIndieID } from "native-notify";
import axios from "axios";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const [text, setText] = useState("");

  registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");
  const Login = () => {
    console.log(inputRef.current.value);
    // registerIndieID('put your unique user ID here as a string', 4066, 'mIFjJ9VQl0tNBXc5IAO65x');
  };
  return (
    <View style={styles.container}>
      <Text> Open upa App.aajs to astarta worrking on yours aappaaa!</Text>
      <StatusBar style="auto" />
      <TextInput
        backgroundColor="#000"
        style={styles.TextInput}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Click me" onPress={Login} />
    </View>
    // <LoginScreen />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: 100,
    color: "#fff",
  },
});

export default App;
