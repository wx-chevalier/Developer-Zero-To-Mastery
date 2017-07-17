import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import RootNavigation from "./src/screen/RootNavigation";

import cacheAssetsAsync from "./src/util/cache";

export default class AppContainer extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  /**
   * Description 首先加载所有的资源
   * @returns {Promise.<void>}
   * @private
   */
  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require("./assets/images/navigation/header_background.png")],
        fonts: [
          FontAwesome.font,
          MaterialIcons.font,
          { "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf") }
        ]
      });
    } catch (e) {
      console.warn(
        "There was an error caching assets (see: main.js), perhaps due to a " +
          "network timeout, so we skipped caching. Reload the app to try again."
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          {Platform.OS === "android" &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});
