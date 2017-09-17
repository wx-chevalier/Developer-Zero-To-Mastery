// @flow

/**
 * Description 格式化数字
 * @param num
 * @returns {string}
 */
export function formatNumber(num) {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
}
