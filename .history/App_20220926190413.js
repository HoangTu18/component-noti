import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import registerNNPushToken from "native-notify";
export default function App() {
  registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to astart working on your app!</Text>
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
