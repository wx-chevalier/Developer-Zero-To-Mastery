import { Notifications } from "expo";
import React from "react";
import { DrawerItems, StackNavigator } from "react-navigation";
import { DrawerNavigator } from "react-navigation";
import ReaderTabNavigator from "./reader/ReaderTabNavigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserScreen from "./user/UserScreen";
import registerForPushNotificationsAsync
  from "../api/notification/registerForPushNotificationsAsync";
import { Image, ScrollView, Text, View } from "react-native";
import AboutScreen from "./business/AboutScreen";

// 定义抽屉路由
const RootDrawerNavigator = DrawerNavigator(
  {
    User: {
      screen: UserScreen,
      navigationOptions: {
        drawerLabel: "我的",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-1"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    ReaderTab: {
      screen: ReaderTabNavigator,
      navigationOptions: {
        drawerLabel: "阅读",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-1"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: "关于",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-1"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "ReaderTab",
    drawerWidth: 200,
    drawerPosition: "left",
    contentComponent: props => {
      // 这里删除第一个，是为了自定义用户界面
      let items = props.items.filter(item => {
        return item.key !== "User";
      });

      return (
        <ScrollView>
          <View>
            <Image
              source={require("../../assets/images/navigation/header_background.png")}
            />
          </View>
          <DrawerItems
            {...Object.assign({}, props, {
              items
            })}
          />
        </ScrollView>
      );
    }
  }
);

/**
 * Description 根路由控件
 */
export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootDrawerNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
