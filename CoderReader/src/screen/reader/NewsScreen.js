import React from "react";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MonoText } from "../../component/StyledText";
import NavigationHeader from "../../component/navigation/NavigationHeader";
import HackerNewsStories
  from "../../container/news/hacker_news/HackerNewsStories";
import {
  centerInRowStyleMixin,
  containerStyleMixin
} from "../../application/theme/style_mixins";

export default class NewsScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          label={"资讯"}
          navigation={this.props.screenProps.drawerNavigation}
          goBackOrOpenDrawer={false}
        />
        <View style={styles.container}>
          <HackerNewsStories />
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
