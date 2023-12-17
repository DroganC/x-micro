import { defineConfig } from 'umi';
import { addAntd, addDefine, addExternals, isProd } from './custome';
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
addAntd(configs);
addExternals(configs);

export default configs;
