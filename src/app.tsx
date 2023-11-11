/*
 * @Author: Droganc
 * @Date: 2023-11-04 13:26:50
 * @LastEditTime: 2023-11-04 13:35:06
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/app.tsx
 */
import { ConfigProvider } from 'antd';
import { iconPrefixCls, prefixCls } from './constant/constant';
import token from './styles/token';

ConfigProvider.config({
  prefixCls,
  iconPrefixCls,
});

export const render = (oldRender) => {
  oldRender();
};

export const rootContainer = (container) => {
  return <ConfigProvider theme={{ ...token }}>{container}</ConfigProvider>;
};

export const antd = (memo) => {
  memo.prefixCls = prefixCls;
  memo.iconPrefixCls = iconPrefixCls;
  return memo;
};
