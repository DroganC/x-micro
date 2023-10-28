/*
 * @Author: Droganc
 * @Date: 2023-10-28 15:57:43
 * @LastEditTime: 2023-10-28 15:58:41
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/config/layout.ts
 */

import { basicRoutes } from './routes';

export default [
  {
    path: '/',
    component: '@/layouts/private',
    routes: [...basicRoutes],
  },
];
