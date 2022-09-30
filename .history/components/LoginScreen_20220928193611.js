import React from "react";
import { registerIndieID } from "native-notify";
import axios from "axios";
function LoginScreen(props) {
  const yourLoginFunction = () => {
    // Native Notify Indie Push Registration Code
    registerIndieID(
      "put your unique user ID here as a string",
      4066,
      "mIFjJ9VQl0tNBXc5IAO65x"
    );
    // End of Native Notify Code
  };
  return <div></div>;
}

export default LoginScreen;
