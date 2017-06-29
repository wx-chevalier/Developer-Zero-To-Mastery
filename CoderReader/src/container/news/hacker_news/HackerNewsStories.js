// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  ScrollView
} from "react-native";
import { AppLoading } from "expo";

import { hackerNewsApi } from "../../../api/news/hacker_news/HackerNewsApi";
import {
  centerInRowStyleMixin,
  containerStyleMixin
} from "../../../application/theme/style_mixins";
import RefreshableListView
  from "../../../../fractal-reactnative-components/list/RefreshableListView";
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...containerStyleMixin
  }
});
