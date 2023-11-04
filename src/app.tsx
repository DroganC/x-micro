/*
 * @Author: Droganc
 * @Date: 2023-10-28 15:13:54
 * @LastEditTime: 2023-11-01 20:17:11
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/app.tsx
 */

import { ConfigProvider } from 'antd';
import token from './styles/token';

export const rootContainer = (container) => {
  return <ConfigProvider theme={{ ...token }}>{container}</ConfigProvider>;
};

export const antd = (memo) => {
  memo.prefixCls = 'bd';
  memo.iconPrefixCls = 'bd-icon';
  return memo;
};
