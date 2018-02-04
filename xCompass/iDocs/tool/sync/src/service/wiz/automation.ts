import { WIZ_PASSWORD, WIZ_USERNAME } from '../../shared/private';

export const login = async (browser: any) => {
  // DOM 元素选择器
  const USERNAME_SELECTOR = '#login-wizID';
  const PASSWORD_SELECTOR = '#login-password';
  const BUTTON_SELECTOR = '#loginbtn';

  const page = await browser.newPage();

  // 等待打开登录界面执行登陆操作
  await page.goto('https://note.wiz.cn/login?p=login');

  await page.click(USERNAME_SELECTOR);
  await page.type(WIZ_USERNAME);

  await page.click(PASSWORD_SELECTOR);
  await page.type(WIZ_PASSWORD);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  return page;
};
