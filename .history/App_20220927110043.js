import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";
const App = () => {
  useEffect(() => {
    registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to astarta working on your appa!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
