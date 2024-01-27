/*
 * @Author: Droganc
 * @Date: 2023-10-28 15:13:00
 * @LastEditTime: 2023-11-04 19:26:34
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/config/routes.ts
 */
export const basicRoutes = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/demo',
    component: '@/pages/demo',
  },
];

export const lowcodeRoutes = [
  {
    path: '/lowcode',
    component: '@/pages/demo',
  },
];

export const oauthRoutes = [
  {
    path: '/oauth/login',
    component: '@/pages/oauth/login',
  },
];
