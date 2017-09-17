// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { centerInRowStyleMixin } from "../../application/theme/style_mixins";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

/**
 * Description 应用通用的导航头
 */
export default class NavigationHeader extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    goBackOrOpenDrawer: PropTypes.bool,
    rightElement: PropTypes.node
  };

  static defaultProps = {
    // 默认为返回上一级
    goBackOrOpenDrawer: true
  };

  render() {
    const { label, navigation, goBackOrOpenDrawer, rightElement } = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/navigation/header_background.png")}
          style={styles.backgroundImage}
        >
          <View>
            <MaterialIcons
              style={styles.icon}
              name={goBackOrOpenDrawer ? "arrow-back" : "menu"}
              onPress={() => {
                goBackOrOpenDrawer
                  ? navigation.goBack()
                  : navigation.navigate("DrawerOpen");
              }}
            />
          </View>
          <Text style={styles.label}>
            {label}
          </Text>
          {rightElement ? rightElement : <View />}
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    // 空出 StatusBar 的距离
    ...centerInRowStyleMixin
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    marginTop: 10,
    padding: 5,
    ...centerInRowStyleMixin,
    justifyContent: "space-between"
  },
  label: {
    fontSize: 15,
    color: "white",
    backgroundColor: "transparent"
  },
  icon: {
    fontSize: 23,
    color: "white",
    backgroundColor: "transparent"
  }
});
