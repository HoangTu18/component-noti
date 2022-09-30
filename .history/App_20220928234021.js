import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from "native-notify";
import { registerIndieID } from "native-notify";
import axios from "axios";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
const Stack = createNativeStackNavigator();
const App = () => {
  // const [text, setText] = useState("");

  // registerNNPushToken(4066, "mIFjJ9VQl0tNBXc5IAO65x");
  // const Login = () => {
  //   console.log(text);
  //   registerIndieID(text, 4066, "mIFjJ9VQl0tNBXc5IAO65x");
  //   navigation.navigate("Details");
  // };
  return (
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>
    //   <StatusBar style="auto" />
    //   <TextInput
    //     backgroundColor="#000"
    //     style={styles.TextInput}
    //     onChangeText={(newText) => setText(newText)}
    //   />
    //   <Button title="Go to Details" onPress={Login} />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
