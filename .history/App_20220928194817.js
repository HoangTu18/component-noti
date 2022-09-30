import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";

const App = () => {
  const handlePost = () => {
    axios
      .post(`${host}/api/auth/login`, { email, password, ip: expoToken })
      .then(async (res) => {
        console.log(object);
      });
  };
  registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");

  return (
    <View style={styles.container}>
      <Text>11111 Open up App.js to astarta worrking on yours aappaaa!</Text>
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
