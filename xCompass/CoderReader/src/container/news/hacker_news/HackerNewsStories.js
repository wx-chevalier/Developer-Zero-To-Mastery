// @flow

import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { RkTextInput } from "react-native-ui-kitten";

import { hackerNewsApi } from "../../../api/news/hacker_news/HackerNewsApi";
import { containerStyleMixin } from "../../../application/theme/style_mixins";
export default class HackerNewsStories extends Component {
  async componentDidMount() {
    let stories = await hackerNewsApi.getTopStories();
    console.log(stories);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.container}
      >

        <ActivityIndicator size={"large"} />
        <RkTextInput rkType="rounded" placeholder="Username" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...containerStyleMixin
  }
});
