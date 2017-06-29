// @flow

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import NavigationHeader from "../../component/navigation/NavigationHeader";

/**
 * Description 关于我们的界面
 */
export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader label={"关于"} navigation={this.props.navigation} />
        <ScrollView style={styles.container}>
          <ExpoConfigView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
