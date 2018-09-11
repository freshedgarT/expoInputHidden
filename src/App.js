import React from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StatusBar,
  ScrollView,
  View
} from "react-native";

// You can import from local files

// or any pure javascript modules available in npm

export default class App extends React.Component {
  static _getKeyboardVerticalOffset() {
    if (Platform.OS === "ios") {
      if (Constants.statusBarHeight > 20) return 88;
      return 64;
    }
    return 44;
  }

  render() {
    const _osBehavior = Platform.OS === "ios" ? "position" : null;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <ScrollView>
          <View style={styles.container}>
            <View style={{ width: 200, height: 200 }}>
              <Text>Post</Text>
            </View>
          </View>

          <View style={{ height: 1000, backgroundColor: "green" }}>
            <Text>Comments</Text>
          </View>
          <Text>Last Comment</Text>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={_osBehavior}
          enabled
          keyboardVerticalOffset={App._getKeyboardVerticalOffset()}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <TextInput style={styles.input} placeholder="Type Here for fail" />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  input: {
    backgroundColor: "grey",
    flex: 1,
    paddingTop: 10,
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: "grey",
    fontSize: 30
  }
});
