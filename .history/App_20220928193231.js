import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";
import { registerIndieID } from "native-notify";
import axios from "axios";
const yourLoginFunction = () => {
  ...
  // Native Notify Indie Push Registration Code
  registerIndieID('put your unique user ID here as a string', 4066, 'mIFjJ9VQl0tNBXc5IAO65x');
  // End of Native Notify Code
}
const App = () => {
  
  // useEffect(() => {
  registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");
  // }, []);
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
