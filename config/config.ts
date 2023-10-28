import { defineConfig } from 'umi';
import { addDefine, isProd } from './custome';
import routes from './layout';

const configs = defineConfig({
  hash: true,
  fastRefresh: true,
  devtool: isProd ? false : 'source-map',
  routes,
});

addDefine(configs);

export default configs;
