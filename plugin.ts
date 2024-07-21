/*
 * @Author: Droganc
 * @Date: 2023-10-28 16:07:52
 * @LastEditTime: 2023-10-28 16:18:44
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/plugin.ts
 */
import { IApi } from 'umi';
import addErrorlisten from './plugins/addErrorlisten';
import addGlobalStyle from './plugins/addGlobalStyle';
import addGlobalVars from './plugins/addGlobalVars';
import addLibs from './plugins/addLibs';
import addLoading from './plugins/addLoading';

export default (api: IApi) => {
  // 错误监听
  addErrorlisten(api);
  // 全局css
  addGlobalStyle(api);
  addGlobalVars(api);
  addLibs(api);
  addLoading(api);
};
