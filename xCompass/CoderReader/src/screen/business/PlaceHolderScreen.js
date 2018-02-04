// @flow

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import NavigationHeader from "../../component/navigation/NavigationHeader";
import {
  centerInRowStyleMixin,
  containerStyleMixin
} from "../../application/theme/style_mixins";

/**
 * Description 占位符界面
 */
export default class PlaceHolderScreen extends React.Component {
  render() {
    let isDrawer = !!this.props.screenProps.drawerNavigation;

    return (
      <View style={styles.container}>
        <NavigationHeader
          label={"PlaceHolderScreen"}
          navigation={
            isDrawer
              ? this.props.screenProps.drawerNavigation
              : this.props.navigation
          }
          goBackOrOpenDrawer={!isDrawer}
        />
        <View style={{ ...containerStyleMixin, ...centerInRowStyleMixin }}>
          <Text>
            王下邀月熊
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...containerStyleMixin
  }
});
