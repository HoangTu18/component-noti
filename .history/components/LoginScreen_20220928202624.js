import React from "react";

import { StyleSheet, View } from "react-native";
import { registerIndieID } from "native-notify";
import axios from "axios";
function LoginScreen(props) {
  const yourLoginFunction = () => {
    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: 4066,
      appId: 4066,
      appToken: "mIFjJ9VQl0tNBXc5IAO65x",
      title: "Congra",
      message: "logged",
      pushData: { App: "category" },
    });
    // Native Notify Indie Push Registration Code
    registerIndieID(4066, 4066, "mIFjJ9VQl0tNBXc5IAO65x");
    // End of Native Notify Code
  };
  return (
    <View style={styles.container}>
      <Text> Open up App.js to astarta worrking on yours aappaaa!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
