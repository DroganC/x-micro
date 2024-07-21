import { defineConfig } from 'umi';
import { addDefine, addExternals, isProd } from './custome';
import routes from './layout';

const configs = defineConfig({
  hash: true,
  fastRefresh: true,
  devtool: isProd ? false : 'source-map',
  routes,
  esbuildMinifyIIFE: true,
  mfsu: {},
  // mfsu:false
});

addDefine(configs);
addExternals(configs);

export default configs;
