import { defineConfig } from 'umi';
import { addAntd, addDefine, isProd } from './custome';
import routes from './layout';

const configs = defineConfig({
  hash: true,
  fastRefresh: true,
  devtool: isProd ? false : 'source-map',
  routes,
});

addDefine(configs);
addAntd(configs);

export default configs;
