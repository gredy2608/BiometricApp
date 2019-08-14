import React, { Component } from "react";
import { View, Button, Text } from "react-native";

import Biometrics from "react-native-biometrics";

class Playground extends Component {
  handle = () => {
    Biometrics.isSensorAvailable().then(biometryType => {
      console.log(biometryType);
    });
  };

  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1, backgroundColor: "#ababab" }}>
        <Button title="Click Me" onPress={this.handle} />
      </View>
    );
  }
}

export default Playground;
