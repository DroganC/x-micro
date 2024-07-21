import { IApi } from 'umi';
import packageJSON from '../package.json';

export default (api: IApi) => {
  api.addHTMLHeadScripts(() => [
    `window.__APP_VERSION__ = '${packageJSON.version}';`,
  ]);
};
