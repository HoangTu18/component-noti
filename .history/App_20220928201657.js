import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";
import { registerIndieID } from "native-notify";
import axios from "axios";

const App = () => {
  const yourLoginFunction = () => {
    registerIndieID(4066, 4066, "mIFjJ9VQl0tNBXc5IAO65x");

    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: 4066,
      appId: 4066,
      appToken: "mIFjJ9VQl0tNBXc5IAO65x",
      title: "Congra",
      message: "logged",
      pushData: '{ "yourProperty": "yourPropertyValue" }',
    });
    // Native Notify Indie Push Registration Code

    // End of Native Notify Code
  };
  // registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");

  return (
    <View style={styles.container}>
      <Text> Open up App.js to astarta worrking on yours aappaaa!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
