/*
 * @Author: Droganc
 * @Date: 2023-10-28 16:07:52
 * @LastEditTime: 2023-10-28 16:18:44
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/plugin.ts
 */
import { IApi } from 'umi';

export default (api: IApi) => {
  // 增加错误处理
  api.addHTMLHeadScripts(() => {
    return `
        window.addEventListener('error', function (event) {
            if (
            event.message &&
            String(event.message).includes('chunk') &&
            String(event.message).includes('falied')
            ) {
            window.location.replace(window.location.href);
            }
        });
    `;
  });
};
