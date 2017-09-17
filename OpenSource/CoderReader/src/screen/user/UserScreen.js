// @flow

import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default class UserScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("DrawerOpen");
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {/* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */}
        {/*<ExpoConfigView />*/}
        <Text>
          sss
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
