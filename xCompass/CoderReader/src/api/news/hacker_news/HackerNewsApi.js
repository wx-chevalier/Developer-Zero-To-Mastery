// @flow
import { RequestBuilder, execute } from "fluent-fetcher/dist/index.rn";

const SCHEME = "https";
const HACKER_NEWS_API_V0 = "hacker-news.firebaseio.com/v0";
const HN_TOP_STORIES_ENDPOINT = "/topstories.json";
const HN_NEW_STORIES_ENDPOINT = "/newstories.json";
const HN_SHOW_STORIES_ENDPOINT = "/showstories.json";
const HN_ASK_STORIES_ENDPOINT = "/askstories.json";
const HN_JOB_STORIES_ENDPOINT = "/jobstories.json";
const HN_ITEM_ENDPOINT = HACKER_NEWS_API_V0 + "item/";

const requestBuilder = new RequestBuilder({
  scheme: SCHEME,
  host: HACKER_NEWS_API_V0
});

export default class HackerNewsApi {
  /**
   * Description 获取 HackerNews 资讯
   * @returns {Promise.<Array>}
   */
  async getTopStories() {
    const { url: getUrl, option: getOption } = requestBuilder
      .get(HN_TOP_STORIES_ENDPOINT)
      .build();

    let stories = [];

    try {
      stories = await execute(getUrl, getOption);
    } catch (e) {
    } finally {
      return stories;
    }
  }
}

export const hackerNewsApi = new HackerNewsApi();
