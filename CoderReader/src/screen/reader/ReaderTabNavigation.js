// @flow

import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../../application/constant/Colors";

import NewsScreen from "./NewsScreen";
import SettingsScreen from "../business/AboutScreen";
import PlaceHolderScreen from "../business/PlaceHolderScreen";

export default TabNavigator(
  {
    News: {
      screen: ({ navigation }) => (
        <NewsScreen screenProps={{ drawerNavigation: navigation }} />
      ),
      navigationOptions: {
        tabBarLabel: "资讯"
      }
    },
    Links: {
      screen: ({ navigation }) => (
        <PlaceHolderScreen screenProps={{ drawerNavigation: navigation }} />
      ),
      navigationOptions: {
        tabBarLabel: "周刊"
      }
    },
    Settings: {
      screen: ({ navigation }) => (
        <PlaceHolderScreen screenProps={{ drawerNavigation: navigation }} />
      ),
      navigationOptions: {
        tabBarLabel: "书籍"
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "News":
            iconName = "hacker-news";
            break;
          case "Links":
            iconName = "list-alt";
            break;
          case "Settings":
            iconName = "book";
        }
        return (
          <FontAwesome
            name={iconName}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: true
    }
  }
);
