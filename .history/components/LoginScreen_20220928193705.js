import React from "react";
import { registerIndieID } from "native-notify";
import axios from "axios";
function LoginScreen(props) {
  const yourLoginFunction = () => {
    // Native Notify Indie Push Registration Code
   await registerIndieID(
      "put your unique user ID here as a string",
      4066,
      "mIFjJ9VQl0tNBXc5IAO65x"
    );
    // End of Native Notify Code

    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: "put your unique app user ID here as a string",
      appId: 4066,
      appToken: "mIFjJ9VQl0tNBXc5IAO65x",
      title: "put your push notification title here as a string",
      message: "put your push notification message here as a string",
    });
  };
  return <div></div>;
}

export default LoginScreen;
